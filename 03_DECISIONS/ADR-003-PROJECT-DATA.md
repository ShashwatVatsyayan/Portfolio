# ADR-003: Centralized Project Data Architecture

## Status
Accepted

## Context
The portfolio features 5 specific projects: `FBOOST AGRO`, `BugOff`, `SANSEC AI`, `Career Ledger`, and `Aegis AI`. The user requires placeholder links (`#`) that can be replaced later without modifying core template markup.

## Decision
Create centralized data structures under `06_SRC/data/` (e.g. `projects.js`, `skills.js`, `experience.js`).
Every project defines:
- `id`: Two-digit index (`01` through `05`)
- `title`: Name of project
- `category`: Domain/genre badge
- `desc`: Verified factual summary without exaggeration
- `tech`: Array of genuine technologies
- `github`: Editable URL placeholder (`#`)
- `live`: Editable URL placeholder (`#`)

## Consequences
- Single source of truth.
- Zero risk of invented metrics or broken links.
