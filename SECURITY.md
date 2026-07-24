# Security Policy

This repository is a live control surface: entries merged here are honored by Proctorio's exam software. Treat problems with it as security issues, not bugs.

## Reporting

**Do not open a public issue** for any of the following — use GitHub's private vulnerability reporting on this repository ("Security" tab → "Report a vulnerability"), or contact Proctorio support and reference this repository:

- An allowlisted extension that is compromised, has changed ownership, or has added capabilities that could undermine exam integrity (communication, content capture, remote scripting)
- An entry whose description does not match what the extension ID actually is
- A weakness in this repository's tooling or review process that could let a bad entry reach `extensions.txt`

## Scope notes for reviewers and maintainers

- Extension IDs are permanent, but extension *ownership and code are not*. An extension that was safe when allowlisted can be sold or updated later. Periodic re-review of the list is part of this repository's maintenance.
- The generated `extensions.txt` goes live for exams once merged to `main`. Branch protection with required reviews should remain enabled at all times.
