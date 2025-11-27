# AGENTS.md - AI Agent Contribution Guide

## Repository Overview

This repository contains the **Caido Developer Documentation** - a comprehensive documentation site for developers building plugins for Caido, a lightweight web security auditing toolkit.

The documentation is built using [VitePress](https://vitepress.dev/) and is published at [docs.caido.io](https://docs.caido.io). All documentation is written in Markdown format.

## Documentation Framework: Diátaxis

This repository **strictly adheres** to the [Diátaxis documentation framework](https://diataxis.fr/). Diátaxis organizes documentation into four distinct types based on user needs:

### The Four Documentation Types

1. **Tutorials** (`src/tutorials/`)
   - **Purpose**: Learning-oriented, step-by-step lessons
   - **User need**: "I want to learn how to do something"
   - **Characteristics**:
     - Shows how to accomplish a specific task from start to finish
     - Provides a working example that can be followed
     - Teaches through doing
     - Should result in a working implementation
   - **Example**: The Notebook tutorial walks through building a complete note-taking plugin

2. **How-to Guides** (`src/guides/`)
   - **Purpose**: Task-oriented, problem-solving instructions
   - **User need**: "I want to know how to accomplish a specific task"
   - **Characteristics**:
     - Focuses on solving a particular problem or achieving a specific goal
     - Provides clear, actionable steps
     - Assumes some prior knowledge
     - Answers "how do I...?" questions
   - **Example**: "How to create a command", "How to query requests"

3. **Reference** (`src/reference/`)
   - **Purpose**: Technical documentation, API specifications
   - **User need**: "I need to look up how something works"
   - **Characteristics**:
     - Describes the machinery - how things work
     - Accurate, complete, and concise
     - Organized for quick lookup
     - No explanation of why, just what
   - **Example**: SDK API documentation, manifest.json field definitions, module references

4. **Explanation** (`src/concepts/`)
   - **Purpose**: Understanding-oriented, conceptual documentation
   - **User need**: "I want to understand how something works"
   - **Characteristics**:
     - Explains background, context, and reasoning
     - Helps users understand the "why" behind things
     - Provides conceptual understanding
     - May include diagrams, metaphors, and examples
   - **Example**: "Plugin Architecture", "Dealing with Binary Data", "Plugins vs Workflows"

### Key Principles

- **Each type serves a different need** - Don't mix purposes. A tutorial should not become a reference guide.
- **Users know what they need** - Structure documentation so users can quickly find the right type.
- **Clear boundaries** - Keep content within its appropriate category.

## Repository Structure

```text
src/
├── tutorials/          # Step-by-step learning experiences
│   ├── index.md
│   └── notebook.md
├── guides/             # Task-oriented how-to guides
│   ├── index.md
│   ├── components/     # Component-specific guides
│   ├── config.md
│   ├── contributions/  # Contribution guides
│   └── distribution/   # Distribution guides
├── reference/          # Technical reference documentation
│   ├── index.md
│   ├── sdks/          # SDK documentation
│   ├── modules/       # Module documentation
│   ├── config.md
│   └── manifest.md
└── concepts/          # Explanatory documentation
    ├── index.md
    ├── essentials/    # Core concepts
    ├── frontend/      # Frontend concepts
    ├── backend/      # Backend concepts
    └── modules/       # Module concepts
```

## How to Contribute (For AI Agents)

### 1. Determine the Correct Documentation Type

Before writing or editing documentation, determine which type it should be:

- **Tutorial**: Is this teaching someone how to build something from scratch? → `tutorials/`
- **How-to Guide**: Is this solving a specific problem or task? → `guides/`
- **Reference**: Is this documenting an API, function, or configuration? → `reference/`
- **Explanation**: Is this explaining concepts, architecture, or reasoning? → `concepts/`

### 2. File Organization

- All documentation files are Markdown (`.md`)
- Files must be linked in the appropriate `index.md` file to appear in navigation
- Use descriptive, lowercase filenames with hyphens (e.g., `creating-commands.md`)
- Place files in the appropriate subdirectory based on topic

### 3. Writing Guidelines

#### For Tutorials

- Start with a clear goal: "By the end of this tutorial, you will have built..."
- Provide complete, working examples
- Break down into clear, numbered steps
- Include all necessary code snippets
- Show the final result
- Use a friendly, teaching tone

#### For How-to Guides

- Start with a clear problem statement or goal
- Provide step-by-step instructions
- Include code examples relevant to the task
- Address common pitfalls or edge cases
- Use imperative mood ("Create a command", "Register the handler")
- Be concise and focused on the task

#### For Reference

- Be accurate, complete, and concise
- Use consistent formatting for APIs
- Include parameter descriptions, return types, examples
- Organize for quick lookup (alphabetical, by category, etc.)
- Avoid explanations of "why" - focus on "what"

#### For Explanations

- Start with context and background
- Explain the "why" behind concepts
- Use analogies and examples to aid understanding
- Link to related reference material
- Help readers understand the bigger picture

### 4. Technical Requirements

- **Markdown**: Use standard Markdown syntax
- **VitePress**: Supports VitePress-specific features (frontmatter, components, etc.)
- **Linking**: Always link pages in the appropriate `index.md` file
- **Images**: Place images in `src/_images/` and reference with relative paths
- **Code blocks**: Use appropriate language tags for syntax highlighting

### 5. Validation

Before submitting changes:

1. **Lint**: Run `pnpm lint` to check for linting errors
2. **Type check**: Run `pnpm typecheck` to verify TypeScript types
3. **Build**: Run `pnpm build` to ensure the site builds successfully
4. **Preview**: Run `pnpm dev` to preview changes locally

### 6. Common Patterns

#### Frontmatter

Some pages may include YAML frontmatter for VitePress configuration:

```yaml
---
title: Page Title
---
```

#### Code Examples

Always use appropriate language tags:

````markdown
```ts
// TypeScript example
```

```json
// JSON example
```

```bash
# Shell command
```
````

#### VitePress Components

The documentation uses VitePress components like:

- `::: info` - Information callouts
- `::: tip` - Tips
- `::: warning` - Warnings
- `<VideoContainer>` - Video embeds
- `<img>` tags with `center` attribute

#### Linking

- Use relative paths for internal links: `/guides/components/command.md`
- Always update `index.md` files when adding new pages

### 7. Content Guidelines

- **Be clear and concise**: Avoid unnecessary verbosity
- **Use examples**: Code examples are essential for understanding
- **Keep it current**: Ensure information matches current Caido versions
- **Link appropriately**: Link to related documentation (reference ↔ concepts, guides ↔ tutorials)
- **Maintain consistency**: Follow existing patterns and style

### 8. What NOT to Do

- ❌ Don't mix documentation types (e.g., don't add explanations to reference docs)
- ❌ Don't create pages without linking them in `index.md`
- ❌ Don't use absolute paths for images or internal links
- ❌ Don't skip validation steps
- ❌ Don't add content that doesn't fit the Diátaxis framework

## Quick Reference: Decision Tree

When adding new documentation, ask:

1. **Is this teaching someone to build something from scratch?**
   - Yes → `tutorials/`
   - No → Continue

2. **Is this solving a specific "how do I...?" problem?**
   - Yes → `guides/`
   - No → Continue

3. **Is this documenting an API, function, or configuration?**
   - Yes → `reference/`
   - No → Continue

4. **Is this explaining concepts, architecture, or reasoning?**
   - Yes → `concepts/`

## Additional Resources

- [Diátaxis Framework](https://diataxis.fr/) - The documentation framework this repo follows
- [VitePress Documentation](https://vitepress.dev/) - The static site generator used
- [Contribution Guide](./src/guides/contributions/documentation.md) - Human-oriented contribution guide
- [Caido Developer Documentation](https://docs.caido.io) - The live documentation site

## Summary for AI Agents

When contributing to this repository:

1. **Always respect Diátaxis**: Determine the correct documentation type before writing
2. **Follow the structure**: Place files in the correct directory (`tutorials/`, `guides/`, `reference/`, `concepts/`)
3. **Link your work**: Add entries to the appropriate `index.md` file
4. **Validate changes**: Run linting, type checking, and build before submitting
5. **Maintain quality**: Write clear, accurate, and well-organized documentation
6. **Use examples**: Include code examples and practical demonstrations
7. **Stay focused**: Keep each document focused on its specific purpose

Remember: The goal is to help developers build plugins for Caido effectively. Every piece of documentation should serve a clear purpose within the Diátaxis framework.
