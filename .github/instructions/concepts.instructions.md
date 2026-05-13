---
applyTo: "src/concepts/**/*.md"
---

# Reviewing explanation / concept documentation

You are reviewing an **explanation** (concept) page in a [Diátaxis](https://diataxis.fr/)-based VitePress documentation site for Caido. Before commenting, follow the project-wide rules in [`AGENTS.md`](../../AGENTS.md) — it covers repo structure, linking, and style. This file adds the Diátaxis review checks specific to **explanation** pages.

## What explanation is (Diátaxis)

Explanation provides **context and background**. It answers “why?” and helps readers understand how ideas fit together. It may include perspective and connect topics. It serves **study** (understanding), not step-by-step work — procedures and raw specs live in guides and reference.

## Must do

- **First-sentence orientation**: Immediately after the `#` page title, the very first sentence of body text must say what this article is about and what conceptual ground the reader will cover (what they will understand or how the topic fits in). Place it before any `##` heading, `::: callout`, list, image, table, or fenced code block.
- Clarify purpose early: what conceptual question this page answers.
- Link to `src/reference/` for exact fields/APIs and to `src/guides/` for procedures.
- Use narrative, comparison, or multiple angles where that aids understanding.

## Must not do (flag these)

- **Deferred orientation**: Starting the page with a heading, callout, list, image, table, or code before any sentence that explains what the article is about, or burying that explanation only later in the page.
- **Procedures**: Commands or numbered steps the reader is meant to run to accomplish a task — belong in `src/guides/` (or a full `src/tutorials/` if teaching from scratch).
- **Reference dumps**: Exhaustive parameter tables, full manifest field lists, or API catalogs — belong in `src/reference/`.
- **Tutorial-style walkthrough**: Building something step-by-step — belongs in `src/tutorials/`.
- **Definitions-only page**: If the content is mostly specification-like lists with little narrative, it may belong in `src/reference/` instead.

## If a violation is found

If the page reads more like another Diátaxis type, recommend moving or splitting it:

- Teaching from scratch → `src/tutorials/`
- Specific task how-to → `src/guides/`
- Lookup facts / specs → `src/reference/`
- Understanding / why / big picture → `src/concepts/` (here)

Trust these instructions and [`AGENTS.md`](../../AGENTS.md). Only fall back to broader judgment when neither covers the situation.
