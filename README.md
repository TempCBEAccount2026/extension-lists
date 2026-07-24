# Proctorio Extension Allowlist

Welcome! This repository maintains the official allowlist of browser extensions that are permitted to run during Proctorio-monitored exams. These carefully vetted extensions ensure students can access essential tools while maintaining exam security and integrity.

## 📂 Repository Structure

All editable extension lists are organized in the **`contributable_lists/`** folder, categorized by purpose:

- **accessibility.txt** - Extensions supporting users with disabilities
- **productivity.txt** - General productivity and workflow tools
- **security.txt** - Security and privacy-focused extensions
- **supervision.txt** - Extensions for monitoring and supervision
- **utilities.txt** - Miscellaneous utility extensions

> **⚠️ Do not edit `extensions.txt`.** It is generated automatically from the category lists by CI after each merge to `main`. Pull requests that modify it directly will fail validation.

## 📝 Contribution Format

Each extension entry follows a standardized format for clarity and consistency:

```
EXTENSION_ID // Extension Name or Brief Description
```

**Example:**
```
cjpalhdlnbpafiamejdnhcphjbkeiagm // uBlock Origin - Ad blocker
```

> **Important:** Always include a descriptive comment after the `//` to help reviewers and users understand the extension's purpose.

## 🤝 How to Contribute

We welcome contributions from the community! Follow these steps to propose additions or modifications:

### Step 1: Select a Category
Navigate to the **`contributable_lists/`** folder and choose the appropriate category file for your extension.

### Step 2: Edit the File
1. Click the **pencil icon** (✏️) in the top-right corner to edit the file
2. Add your extension ID following the format above
3. Ensure the description clearly explains the extension's purpose

### Step 3: Commit Your Changes
1. Scroll to the bottom of the edit page
2. Write a meaningful commit message (e.g., "Add Grammarly extension to productivity list")
3. Optionally add an extended description explaining why this extension should be allowed
4. Choose to create a new branch
5. Click **"Propose changes"**

### Step 4: Create a Pull Request
1. Review your changes on the comparison page
2. Add a clear title and description for your pull request
3. Fill out the pull request template completely — a **link to the extension's store listing is required**
4. Click **"Create pull request"**

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full acceptance criteria and review checklist.

### Step 5: Review Process
- A repository administrator will review your submission
- They may request additional information or clarification
- Once approved, your changes will be merged and go live immediately
- The extension will be available for use in real-time during exams

## ✅ Contribution Guidelines

To ensure your pull request is accepted quickly:

- **Verify the extension ID** - The ID must exactly match the one in the extension's store listing URL; reviewers verify the ID, not the description
- **Provide clear descriptions** - The `//` comment must match the extension's actual store name
- **Choose the right category** - Place extensions in the most appropriate list
- **One extension per pull request** - Makes reviews easier and faster
- **Check for duplicates** - Search *all* files in `contributable_lists/` (CI rejects duplicates automatically)

## 🔒 Security & Privacy

All submitted extensions undergo a security review process to ensure:
- They don't compromise exam integrity
- They don't enable cheating or unauthorized communication
- They respect user privacy and data security
- They serve a legitimate educational or accessibility purpose

To report a security concern about an already-listed extension, see [SECURITY.md](SECURITY.md).

## 📧 Questions or Issues?

If you have questions about:
- Which category an extension belongs to
- Whether an extension qualifies for the allowlist
- Technical issues with the repository

Please open an issue in the repository, and our team will assist you promptly.

## ⚖️ License

This repository is source-available under the [Proctorio Source-Available License](LICENSE): free for anyone to use, copy, and redistribute — **except** by or for the benefit of any product or service that competes with Proctorio.

---

**Thank you for helping make online exams more accessible and user-friendly while maintaining academic integrity!** 🎓
