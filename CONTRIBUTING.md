# Contributing to the Proctorio Extension Allowlist

Thank you for helping keep this list accurate. This repository controls which browser extensions are allowed to run during Proctorio-monitored exams, so every entry is reviewed with exam integrity in mind.

## Adding an extension

1. Find the extension's **ID** — the 32-character string (letters `a`–`p` only) in its store URL:
   `https://chromewebstore.google.com/detail/<name>/<THIS IS THE ID>`
2. Pick the right category file in [`contributable_lists/`](contributable_lists/):
   - `accessibility.txt` — assistive technology (screen readers, text-to-speech, etc.)
   - `productivity.txt` — general productivity and workflow tools
   - `security.txt` — endpoint security, filtering, and identity extensions
   - `supervision.txt` — classroom management and monitoring tools
   - `utilities.txt` — everything else with a legitimate institutional purpose
3. Add **one line per extension** in this exact format:

   ```
   abcdefghijklmnopabcdefghijklmnop // Extension Name — short purpose
   ```

4. Open a pull request and **fill out the PR template completely**, including a link to the extension's store listing. PRs without a store link (or an explanation for unlisted enterprise extensions) will not be reviewed.

Do **not** edit `extensions.txt` — it is generated automatically from the category lists after your PR is merged. CI will reject PRs that modify it.

## What gets accepted

An extension is a candidate for the allowlist when it:

- Serves a legitimate educational, accessibility, security, or institutional purpose
- Is published by an identifiable vendor with a public store listing (or documented enterprise distribution)
- Does not undermine exam integrity

An extension will be **rejected** if it can:

- Enable communication between people (chat, messaging, screen sharing, co-browsing)
- Look up, generate, or display answers (search assistants, AI helpers, flashcard/answer tools)
- Capture, record, or exfiltrate exam content
- Inject arbitrary or remotely-controlled scripts into pages
- Remote-control the browser or mask the user's activity
- Route, tunnel, or disguise network traffic — consumer VPNs, proxies, and IP/location spoofers are not accepted. (Corporate filtering/security agents deployed and controlled by an institution's MDM — e.g. Netskope, iboss, Smoothwall — are fine.)

## What reviewers check (and why your description must be accurate)

Reviewers verify the **ID**, not the description. The description in your PR is a label, not proof — a reviewer will open the store listing for the exact ID you submitted and confirm the publisher, name, and permissions match your claim. Submitting an ID that belongs to a different product than described will get the PR closed and the submitter blocked.

## Validation

CI validates every PR automatically. You can run the same checks locally:

```
npm run validate        # format, duplicate, and description checks
npm run refresh-list    # regenerate extensions.txt (maintainers/CI only)
```

## Reporting a problem with a listed extension

If you believe an already-allowlisted extension is compromised, has changed ownership, or can be abused during exams, please see [SECURITY.md](SECURITY.md) rather than opening a public issue with exploit details.

## License of contributions

By submitting a pull request you agree that your contribution is provided under the repository's [LICENSE](LICENSE) and may be redistributed by Proctorio as part of this list.
