# Markdown Accessibility Audit

An audit of markdown documentation, run on 2026-11-20. Read the executive summary for the verdict, the priorities section for what to do first, and the findings tables for detail.

## Metadata

What was audited, with what, and under which settings.

| Field | Value |
|---|---|
| Date | 2026-11-20 |
| Scope | 3 items |
| Skills run | markdown-scanner |
| Tooling | node v26.13.1, a11y-mcp-server 7.1.0 |
| Scan configuration | defaults, no config file found |
| Checks counted | 10 |

Audited:

- `G:\The Last Safehouse NEWWW\Design\Chapter 1\Chapter-1-Design.md`
- `G:\The Last Safehouse NEWWW\Design\Superseded\Superseded-Design-Sections.md`
- `G:\The Last Safehouse NEWWW\Design\The-Last-Safehouse-Design.md`

## Executive summary

Pass. No critical or serious findings.

The headline numbers for this run.

| Measure | Value |
|---|---|
| Score | 100 out of 100 |
| Grade | A |
| Findings | 0 |
| Blocking (critical plus serious) | 0 |
| Verdict | Pass |

## Severity breakdown

Counts by severity, highest impact first.

| Severity | Count | What it means |
|---|---:|---|
| critical | 0 | Blocks a person from completing the task |
| serious | 0 | Major barrier with a difficult workaround |
| moderate | 0 | Real friction, workaround exists |
| minor | 0 | Noticeable but rarely blocking |

## Findings

No findings. Every check listed under "What passed" ran and came back clean.

## Remediation priorities

Nothing to remediate.

## Delta tracking

Movement since the previous report.

| Change | Count |
|---|---:|
| Fixed | 0 |
| New | 0 |
| Persistent | 0 |
| Regressed | 0 |

Score moved from 100 to 100.

## Needs a human

Items a skill could not decide, or could not check automatically.

- **markdown-scanner**: Only Critical and Serious findings are reported.
- **markdown-scanner**: markdownlint-cli2 was unavailable; the file was reviewed directly across all nine domains.
- **markdown-scanner**: No Critical or Serious findings were identified.
- **markdown-scanner**: The scanner used the installed accessibility-agents schema.
- **markdown-scanner**: No Critical or Serious findings were identified across the nine domains.
- **markdown-scanner**: Lower-severity findings are omitted per the selected profile.
- **markdown-scanner**: Markdownlint was not run because it is not installed.

## Next steps

1. Keep the current checks in continuous integration so this does not regress.
2. Re-audit when the interface changes materially, or quarterly.
3. Confirm the automated result with a manual screen reader and keyboard pass.

Automated checks find a minority of accessibility barriers. A passing score is a floor, not a guarantee.

## Findings data

The merged findings, embedded so the next run can compute a delta without parsing this document.

```json a11y-findings
{
  "skills": [
    "markdown-scanner"
  ],
  "scope": [
    "G:\\The Last Safehouse NEWWW\\Design\\Chapter 1\\Chapter-1-Design.md",
    "G:\\The Last Safehouse NEWWW\\Design\\Superseded\\Superseded-Design-Sections.md",
    "G:\\The Last Safehouse NEWWW\\Design\\The-Last-Safehouse-Design.md"
  ],
  "findings": [],
  "passed": [],
  "notes": [
    {
      "skill": "markdown-scanner",
      "note": "Only Critical and Serious findings are reported."
    },
    {
      "skill": "markdown-scanner",
      "note": "markdownlint-cli2 was unavailable; the file was reviewed directly across all nine domains."
    },
    {
      "skill": "markdown-scanner",
      "note": "No Critical or Serious findings were identified."
    },
    {
      "skill": "markdown-scanner",
      "note": "The scanner used the installed accessibility-agents schema."
    },
    {
      "skill": "markdown-scanner",
      "note": "No Critical or Serious findings were identified across the nine domains."
    },
    {
      "skill": "markdown-scanner",
      "note": "Lower-severity findings are omitted per the selected profile."
    },
    {
      "skill": "markdown-scanner",
      "note": "Markdownlint was not run because it is not installed."
    }
  ],
  "counts": {
    "critical": 0,
    "serious": 0,
    "moderate": 0,
    "minor": 0
  },
  "components": [],
  "score": 100,
  "grade": "A",
  "penalty": 0,
  "checks": 10,
  "generated": "2026-11-20",
  "template": "markdown"
}
```
