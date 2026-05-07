---
applyTo: "src/guides/**/*.md"
---

# Reviewing how-to guide documentation

You are reviewing a **how-to guide** page in a [Diátaxis](https://diataxis.fr/)-based VitePress documentation site for Caido. Before commenting, follow the project-wide rules in [`AGENTS.md`](../../AGENTS.md) — it covers repo structure, sidebar/title conventions, code-snippet style, Vue/PrimeVue conventions, and validation steps. This file adds the Diátaxis review checks specific to **how-to guide** pages.

## What a how-to guide is (Diátaxis)

A how-to guide addresses a **real-world goal or problem** with practical directions. It serves an **already competent** user who needs to get work done — not someone learning a topic from zero. Tone is task-focused (imperative), steps solve the stated problem, and background belongs elsewhere unless a single sentence is enough.

## Must do

- State the problem or goal clearly up front.
- Give actionable steps appropriate for a reader who already understands the surrounding product/plugin model.
- Use imperative, concise instruction where it helps.

## Must not do (flag these)

- **Tutorial drift**: Teaching from scratch, long guided “lessons,” or hand-holding through a first project — belong in `src/tutorials/`.
- **Explanation drift**: Background, architecture, or “why we built it this way” — belong in `src/concepts/` (link instead).
- **Section headings as categories**: Headings that only name a type or category (e.g. “Project Events”, “Log Levels”) instead of a use case or question. Prefer gerund / action phrasing (e.g. “Subscribing to Project Events”, “Choosing a Log Level”). **Exception:** the `## Examples` section heading.
- **Examples layout**: Examples scattered through the page. Per project rules, examples belong at the end under `## Examples`, with `###` sub-headers for each example, no “Example:” prefix in titles, and no non-example sections after `## Examples`.
- **Title ↔ sidebar mismatch**: The page `#` H1 must exactly match the corresponding `text` entry in `.vitepress/sidebars/guides.ts` (see [`AGENTS.md`](../../AGENTS.md)).
- **Callout placement**: `::: tip`, `::: info`, or `::: warning` blocks stuck only at the very end of the page — they should sit next to the section they apply to.

## If a violation is found

If the page reads more like another Diátaxis type, recommend moving or splitting it:

- Teaching from scratch → `src/tutorials/`
- Solving a specific task → `src/guides/` (here)
- API/config/manifest lookup → `src/reference/`
- Concept / why / big picture → `src/concepts/`

Trust these instructions and [`AGENTS.md`](../../AGENTS.md). Only fall back to broader judgment when neither covers the situation.
