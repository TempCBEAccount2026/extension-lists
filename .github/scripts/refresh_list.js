const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const LISTS_DIR = path.join(__dirname, '../../contributable_lists');
const OUTPUT_FILE = path.join(__dirname, '../../extensions.txt');

// Chrome/Edge extension IDs are exactly 32 characters, a-p only.
const ID_PATTERN = /^[a-p]{32}$/;

function parseLists() {
  const errors = [];
  const entries = [];
  const seen = new Map();

  const files = fs
    .readdirSync(LISTS_DIR)
    .filter((f) => f.endsWith('.txt'))
    .sort();

  if (files.length === 0) {
    errors.push(`No .txt list files found in ${LISTS_DIR}`);
  }

  for (const file of files) {
    const lines = fs.readFileSync(path.join(LISTS_DIR, file), 'utf8').split(/\r?\n/);

    lines.forEach((line, index) => {
      const where = `${file}:${index + 1}`;
      const trimmed = line.trim();

      // Skip blank lines and comment-only lines.
      if (trimmed === '' || trimmed.startsWith('//')) return;

      const separator = trimmed.indexOf('//');
      const id = (separator === -1 ? trimmed : trimmed.slice(0, separator)).trim();
      const description = separator === -1 ? '' : trimmed.slice(separator + 2).trim();

      if (!ID_PATTERN.test(id)) {
        errors.push(`${where}: "${id}" is not a valid extension ID (must be 32 characters, a-p only)`);
        return;
      }
      if (description === '') {
        errors.push(`${where}: missing "// <extension name>" description after the ID`);
        return;
      }
      if (seen.has(id)) {
        errors.push(`${where}: duplicate of ${seen.get(id)}`);
        return;
      }

      seen.set(id, where);
      entries.push(id);
    });
  }

  return { entries, errors };
}

function main() {
  // --lint  : validate the source lists only (used on pull requests)
  // --check : validate AND verify extensions.txt is in sync (used on main)
  // default : validate and regenerate extensions.txt
  const lintOnly = process.argv.includes('--lint');
  const checkOnly = process.argv.includes('--check');
  const { entries, errors } = parseLists();

  if (errors.length > 0) {
    for (const error of errors) console.error(`ERROR: ${error}`);
    console.error(`\n${errors.length} problem(s) found in contributable_lists/.`);
    process.exitCode = 1;
    return;
  }

  if (lintOnly) {
    console.log(`OK: ${entries.length} extension IDs validated.`);
    return;
  }

  const content =
    entries.map((id) => crypto.createHash('md5').update(id).digest('hex')).join('\n') + '\n';

  if (checkOnly) {
    const current = fs.existsSync(OUTPUT_FILE) ? fs.readFileSync(OUTPUT_FILE, 'utf8') : '';
    if (current !== content) {
      console.error(
        'ERROR: extensions.txt does not match contributable_lists/. Run "npm run refresh-list" and commit the result.'
      );
      process.exitCode = 1;
      return;
    }
    console.log(`OK: ${entries.length} extension IDs validated; extensions.txt is up to date.`);
    return;
  }

  fs.writeFileSync(OUTPUT_FILE, content, 'utf8');
  console.log(`extensions.txt updated (${entries.length} extension IDs).`);
}

main();
