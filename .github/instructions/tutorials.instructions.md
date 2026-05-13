---
applyTo: "src/tutorials/**/*.md"
---

# Reviewing tutorial documentation

You are reviewing a **tutorial** page in a [Diátaxis](https://diataxis.fr/)-based VitePress documentation site for Caido. Before commenting, follow the project-wide rules in [`AGENTS.md`](../../AGENTS.md) — it covers repo structure, sidebar conventions, code-snippet style, Vue/PrimeVue conventions, and validation steps. This file adds the Diátaxis review checks specific to **tutorial** pages.

## What a tutorial is (Diátaxis)

A tutorial is a **lesson** that takes the learner by the hand through a practical experience. It is always practical: the user does something under guidance. The purpose is to develop skill and confidence through doing — not to deliver exhaustive facts or get a job done in production. The instructor is absent on the page, so steps must be complete, ordered, and safe to follow.

## Must do

- **First-sentence orientation**: Immediately after the `#` page title, the very first sentence of body text must say what this article is about and what the reader will learn or build by following it. Place it before any `##` heading, `::: callout`, list, image, table, or fenced code block.
- Present a clear learning outcome at the start (what the reader will have built or achieved).
- Use numbered steps and include working code or concrete actions at each step where relevant.
- Lead to a demonstrable result (running example, completed plugin flow, etc.).
- Keep explanatory prose minimal; when deeper background is needed, link to `src/concepts/` instead of embedding long “why” sections.

## Must not do (flag these)

- **Deferred orientation**: Starting the page with a heading, callout, list, image, table, or code before any sentence that explains what the article is about, or burying that explanation only later in the page.
- **Reference drift**: API tables, exhaustive option lists, or neutral specification-style prose that belongs in `src/reference/`.
- **Long background**: Extended “why” or architecture narrative — belong in `src/concepts/` with a link from the tutorial.
- **Incomplete paths**: Missing steps, missing code where the learner must type or paste something, or an unclear final state.
- **Competent-user framing**: Assuming the reader already knows how to wire SDK pieces together without walking through it — that is how-to territory (`src/guides/`).

## If a violation is found

If the page reads more like another Diátaxis type, recommend moving or splitting it:

- Teaching from scratch, hands-on lesson → `src/tutorials/` (here).
- Solving a specific task for someone who already knows the basics → `src/guides/`
- Facts, fields, signatures, neutral lookup → `src/reference/`
- Context, architecture, why → `src/concepts/`

Trust these instructions and [`AGENTS.md`](../../AGENTS.md). Only fall back to broader judgment when neither covers the situation.
