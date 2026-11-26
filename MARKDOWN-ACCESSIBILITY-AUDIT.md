# Markdown Accessibility Audit

An audit of the project's markdown documentation, run on 2026-11-26. Read the executive summary for the verdict, the observation inventory for what is left, and the findings tables for detail.

## Metadata

What was audited, with what, and under which settings.

| Field | Value |
|---|---|
| Date | 2026-11-26 |
| Scope | 39 files: 12 active design and planning documents, 27 archived drafts |
| Skills run | manual-structural-scan |
| Tooling | Python 3.11.2 structure scanner written for this audit; `markdownlint-cli2` unavailable; no `a11y-mcp-server` in this environment |
| Scan configuration | defaults, no config file present |
| Checks counted | 10 |

Audited:

- `Design/Chapter 1/Chapter-1-Design.md` through `Design/Chapter 7/Chapter-7-Design.md`
- `Design/The-Last-Safehouse-Design.md`
- `Design/Superseded/Superseded-Design-Sections.md`
- `docs/roadmap.md`, `docs/decisions.md`, `docs/playtests/README.md`
- `Design/Previous Drafts/*.md` (27 archived files, checked only for blocking issues)

Volume: 22,514 lines and 205,156 words across the whole scope; 8,631 lines and 84,426 words in the active set.

## Executive summary

Pass. No critical or serious findings.

The lower-severity inventory is larger than the previous run because the scope is twelve times wider: 208 observations in the active documents and 662 across the whole scope, all of one of three repeatable patterns rather than one-off defects.

| Measure | Value |
|---|---|
| Score | 100 out of 100 |
| Grade | A |
| Findings (critical plus serious) | 0 |
| Blocking | 0 |
| Lower-severity observations | 662 |
| Verdict | Pass |

Reporting profile: as in the previous audit, only critical and serious findings count against the score. Lower-severity items are inventoried rather than scored, so the 100 means "nothing blocks a reader", not "nothing could be improved".

## Severity breakdown

Counts by severity, highest impact first.

| Severity | Count | What it means |
|---|---:|---|
| critical | 0 | Blocks a person from completing the task |
| serious | 0 | Major barrier with a difficult workaround |
| moderate | 0 | Real friction, workaround exists |
| minor | 662 | Noticeable but rarely blocking |

## Findings

No findings. Every check listed under "What passed" ran across all 39 files and came back clean.

## Observation inventory

Lower-severity patterns, recorded so a later pass can act on them without rescanning.

| Pattern | Active | Archive | Total | Why it matters |
|---|---:|---:|---:|---|
| Repeated heading text at the same level | 145 | 261 | 406 | A generated table of contents shows several identical entries, and duplicate anchors cannot be linked individually. Hierarchy still conveys context to a screen reader. |
| Bold-only line used as a label | 56 | 179 | 235 | Labels such as "**Expected query:**" are emphatic text, not headings, so they are absent from the document outline. |
| Heading with no blank line before it | 7 | 14 | 21 | Renders correctly in CommonMark but breaks the source pattern used everywhere else and can surprise simpler parsers. |

Per-document detail for the active set:

| Document | Headings | Repeated | Bold labels | Missing blank line |
|---|---:|---:|---:|---:|
| Chapter 1 | 103 | 23 | 4 | 0 |
| Chapter 2 | 42 | 0 | 0 | 0 |
| Chapter 3 | 98 | 22 | 18 | 0 |
| Chapter 4 | 121 | 25 | 28 | 0 |
| Chapter 5 | 127 | 19 | 6 | 0 |
| Chapter 6 | 136 | 34 | 0 | 0 |
| Chapter 7 | 110 | 22 | 0 | 0 |
| Master design | 34 | 0 | 0 | 4 |
| Superseded sections | 37 | 0 | 0 | 3 |
| docs/roadmap.md | 12 | 0 | 0 | 0 |
| docs/decisions.md | 1 | 0 | 0 | 0 |
| docs/playtests/README.md | 1 | 0 | 0 | 0 |

The repeated headings are structural rather than careless: every lesson legitimately has its own "Story opening", "Guided stage", and "Accessibility", each nested under a distinct lesson heading. They only become a defect if a table of contents or anchor links are generated from them.

## What passed

- Every document has exactly one level-1 heading.
- No heading level is skipped anywhere in the 39 files.
- Every table has a header separator row.
- Every fenced code block declares a language.
- No link has empty text, and no link uses generic text such as "here".
- Every internal link resolves once percent-encoding is decoded; the master design's 20 links all resolve.
- No embedded image lacks alt text; the only image in scope is referenced by a described link rather than embedded.
- No bare URLs outside code blocks.
- No tabs, and no trailing whitespace on prose lines.

## Remediation priorities

1. **Nothing required for a pass.** No reader is blocked by anything in this report.
2. **Before generating a table of contents or cross-document anchors,** qualify repeated subsection headings — "Lesson 3 — Accessibility" rather than a seventh "Accessibility" — or assign explicit identifiers.
3. **Incremental and optional:** promote bold-only labels that introduce a block of content to real headings, starting with the 46 in Chapters 3 and 4 where the pattern is most frequent.
4. **Housekeeping:** add the missing blank lines before 21 headings, mostly in the master design and the archive, for consistent source formatting.

The very long physical lines in these documents are deliberate. One paragraph per line is a common Markdown convention with no accessibility consequence, so line length is not counted as an observation.

## Delta tracking

Movement since the previous report.

| Change | Count |
|---|---:|
| Fixed | 0 |
| New observations | 662 |
| Persistent | 0 |
| Regressed | 0 |

The previous report covered three files and reported only critical and serious results, so its zero and this zero measure the same thing across a far larger scope. The 662 observations are new to the record, not new to the documents.

## Needs a human

Items this scan could not decide or could not check.

- **manual-structural-scan:** judges structure only. It cannot tell whether a heading is descriptive, only whether it is unique and correctly nested.
- **manual-structural-scan:** cannot assess plain-language quality, sentence length, or reading level, which matter more than structure in teaching material.
- **manual-structural-scan:** verifies that table header rows exist, not that header cells describe their columns.
- **manual-structural-scan:** cannot judge whether a link's destination is useful, only that the text exists and the target resolves.
- **markdownlint-cli2:** unavailable, so no lint baseline was captured.
- **a11y-mcp-server:** not present in this environment, so no automated screen-reader simulation was run.
- **Manual pass still needed:** one screen-reader and keyboard review of a rendered chapter, and one of the HTML export if these documents are ever published.

Automated checks find a minority of accessibility barriers. A passing score is a floor, not a guarantee.

## Findings data

The merged inventory, embedded so the next run can compute a delta without parsing this document.

```json a11y-findings
{
  "skills": [
    "manual-structural-scan"
  ],
  "scope": [
    "Design/Chapter 1/Chapter-1-Design.md through Design/Chapter 7/Chapter-7-Design.md",
    "Design/The-Last-Safehouse-Design.md",
    "Design/Superseded/Superseded-Design-Sections.md",
    "docs/roadmap.md",
    "docs/decisions.md",
    "docs/playtests/README.md",
    "Design/Previous Drafts/*.md (27 files)"
  ],
  "findings": [],
  "passed": [
    "single level-1 heading per document",
    "no skipped heading levels",
    "table header separator rows present",
    "code fences declare a language",
    "no empty or generic link text",
    "internal links resolve after percent-decoding",
    "embedded images have alt text",
    "no bare URLs outside code blocks",
    "no tabs or trailing whitespace on prose lines"
  ],
  "observations": {
    "duplicate_headings": 406,
    "bold_labels": 235,
    "headings_without_blank_line": 21,
    "active_documents": {
      "duplicate_headings": 145,
      "bold_labels": 56,
      "headings_without_blank_line": 7
    }
  },
  "notes": [
    {
      "skill": "manual-structural-scan",
      "note": "Structure only. Heading descriptiveness, reading level, and link usefulness need a human."
    },
    {
      "skill": "manual-structural-scan",
      "note": "markdownlint-cli2 was unavailable, so no lint baseline was captured."
    },
    {
      "skill": "manual-structural-scan",
      "note": "a11y-mcp-server is not present in this environment; no automated screen-reader simulation ran."
    },
    {
      "skill": "manual-structural-scan",
      "note": "Long physical lines are intentional and are not counted as observations."
    }
  ],
  "counts": {
    "critical": 0,
    "serious": 0,
    "moderate": 0,
    "minor": 662
  },
  "components": [],
  "score": 100,
  "grade": "A",
  "penalty": 0,
  "checks": 10,
  "volume": {
    "files": 39,
    "lines": 22514,
    "words": 205156
  },
  "generated": "2026-11-26",
  "template": "markdown",
  "per_file": {
    "Design/Chapter 1/Chapter-1-Design.md": {
      "headings": 103,
      "duplicate_headings": 23,
      "bold_labels": 4,
      "headings_without_blank_line": 0
    },
    "Design/Chapter 2/Chapter-2-Design.md": {
      "headings": 42,
      "duplicate_headings": 0,
      "bold_labels": 0,
      "headings_without_blank_line": 0
    },
    "Design/Chapter 3/Chapter-3-Design.md": {
      "headings": 98,
      "duplicate_headings": 22,
      "bold_labels": 18,
      "headings_without_blank_line": 0
    },
    "Design/Chapter 4/Chapter-4-Design.md": {
      "headings": 121,
      "duplicate_headings": 25,
      "bold_labels": 28,
      "headings_without_blank_line": 0
    },
    "Design/Chapter 5/Chapter-5-Design.md": {
      "headings": 127,
      "duplicate_headings": 19,
      "bold_labels": 6,
      "headings_without_blank_line": 0
    },
    "Design/Chapter 6/Chapter-6-Design.md": {
      "headings": 136,
      "duplicate_headings": 34,
      "bold_labels": 0,
      "headings_without_blank_line": 0
    },
    "Design/Chapter 7/Chapter-7-Design.md": {
      "headings": 110,
      "duplicate_headings": 22,
      "bold_labels": 0,
      "headings_without_blank_line": 0
    },
    "Design/The-Last-Safehouse-Design.md": {
      "headings": 34,
      "duplicate_headings": 0,
      "bold_labels": 0,
      "headings_without_blank_line": 4
    },
    "Design/Superseded/Superseded-Design-Sections.md": {
      "headings": 37,
      "duplicate_headings": 0,
      "bold_labels": 0,
      "headings_without_blank_line": 3
    },
    "docs/roadmap.md": {
      "headings": 12,
      "duplicate_headings": 0,
      "bold_labels": 0,
      "headings_without_blank_line": 0
    },
    "docs/decisions.md": {
      "headings": 1,
      "duplicate_headings": 0,
      "bold_labels": 0,
      "headings_without_blank_line": 0
    },
    "docs/playtests/README.md": {
      "headings": 1,
      "duplicate_headings": 0,
      "bold_labels": 0,
      "headings_without_blank_line": 0
    }
  }
}
```
