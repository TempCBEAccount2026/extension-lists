# Security Policy

Entries merged in this repository are honored by Proctorio's exam software. Treat problems with it as security issues, not bugs.

## Reporting

Do not open a public issue for any of the following. Email vulnerability@proctorio.com, or use GitHub's private vulnerability reporting on this repository (Security tab, "Report a vulnerability"), and reference this repository:

- an allowlisted extension that is compromised, has changed ownership, or has added capabilities that could undermine exam integrity
- an entry whose description does not match what the extension ID actually is
- a weakness in this repository's tooling or review process that could let a bad entry reach `extensions.txt`

## Notes for reviewers and maintainers

- Extension IDs are permanent, but extension ownership and code are not. An extension that was safe when listed can be sold or updated later. Periodic re-review of the list is part of maintaining this repository.
- The generated `extensions.txt` goes live for exams once merged to main. Branch protection with required reviews should stay enabled at all times.
