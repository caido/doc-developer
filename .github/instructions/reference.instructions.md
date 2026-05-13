---
applyTo: "src/reference/**/*.md"
---

# Reviewing reference documentation

You are reviewing a **reference** page in a [Diátaxis](https://diataxis.fr/)-based VitePress documentation site for Caido. Before commenting, follow the project-wide rules in [`AGENTS.md`](../../AGENTS.md) — it covers repo structure, generated vs hand-written reference, and formatting expectations. This file adds the Diátaxis review checks specific to **reference** pages.

## What reference is (Diátaxis)

Reference material is **neutral technical description**: facts the user needs to use things correctly — accurate, complete, and organized for **lookup**. It is not concerned with the user’s current task or learning journey. Structure should mirror the thing being described (e.g. same module/class/method relationships as the API).

## Must do

- **First-sentence orientation**: Immediately after the `#` page title, the very first sentence of body text must say what this article documents and what information the reader can look up here. Place it before any `##` heading, `::: callout`, list, image, table, or fenced code block.
- Present facts (parameters, types, return values, defaults, constraints) clearly and consistently.
- Use stable headings and grouping so readers can scan and find entries quickly.
- Keep the same structural patterns across similar entries (e.g. every function: signature, parameters, returns, errors).

## Must not do (flag these)

- **Deferred orientation**: Starting the page with a heading, callout, list, image, table, or code before any sentence that explains what the article is about, or burying that explanation only later in the page.
- **Opinion or persuasion**: “We recommend…”, “You should…”, product narrative — not reference.
- **Tutorial framing**: “Let’s build…”, “First we will…”, story-led walkthroughs — belong in `src/tutorials/` or task steps in `src/guides/`.
- **Step-by-step tasks**: Procedural “how to configure X” guides — belong in `src/guides/`.
- **Explanation drift**: Background, motivation, or conceptual discussion — belong in `src/concepts/` with links from reference where useful.
- **Inconsistent reference style**: Mixed formatting for the same kind of item (e.g. some APIs with tables, others with prose-only), missing return types or error cases where peers include them.

## If a violation is found

If the page reads more like another Diátaxis type, recommend moving or splitting it:

- Teaching from scratch → `src/tutorials/`
- Task-oriented procedure → `src/guides/`
- Neutral facts and specifications → `src/reference/` (here)
- Why / context / architecture → `src/concepts/`

Trust these instructions and [`AGENTS.md`](../../AGENTS.md). Only fall back to broader judgment when neither covers the situation.
