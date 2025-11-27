# Guides Sidebar Analysis

## Current Structure

```
Guides
├── Getting Started
├── Configuring Your Package
└── AI Assisted Coding

Frontend
├── Creating a Page
├── Creating a Command
├── Customizing Context Menus
├── Storing Frontend Data
└── Using the Component Library

Backend
├── Creating and Calling a Custom Function
├── Handling Backend Events
├── Fetching Proxied Requests
├── Sending HTTP Requests
├── Sending a Fetch Request
├── Sending Events to the Frontend
├── Spawning a Process
├── Storing Data in SQLite
├── Using Findings
└── Using Invalid UTF-8

Shared
├── Adding Files
└── Using Environment Variables

Community Store
├── Setting Up Your Repository
└── Submitting to the Store

Contributions
└── Documentation
```

## Issues with Current Structure

### 1. **Technical Organization vs. Task-Oriented Organization**

**Problem**: The sidebar is organized by technical boundaries (Frontend/Backend/Shared) rather than by user tasks. This violates Diátaxis principles for how-to guides, which should be organized around "what the user wants to accomplish."

**Example**: A user wanting to "create a command" needs to understand both frontend (registering the command) and potentially backend (if the command calls backend functions), but these are separated.

### 2. **Mixed Abstraction Levels**

Some guides are very specific ("Sending a Fetch Request") while others are more conceptual ("Creating a Page"). This makes it harder for users to find what they need at their level of understanding.

### 3. **Not Aligned with User Mental Models**

Users think in terms of:

- "I want to build a UI"
- "I want to handle HTTP requests"
- "I want to store data"
- "I want to communicate between frontend and backend"

Not in terms of:

- "I want to use the frontend SDK"
- "I want to use the backend SDK"

### 4. **Missing Conceptual Groupings**

Based on the missing guides analysis, there are clear conceptual patterns that should be grouped:

- Editor extensions and view modes
- Event subscriptions
- Scope management
- Query/filter management
- Slots system

## Recommended Structure (Task-Oriented)

```
Getting Started
├── Getting Started
├── Configuring Your Package
└── AI Assisted Coding

Building User Interfaces
├── Creating a Page
├── Creating a Command
├── Customizing Context Menus
├── Using the Component Library
└── Showing Dialogs (missing)

Working with HTTP
├── Sending HTTP Requests
├── Sending a Fetch Request
├── Fetching Proxied Requests
└── Using Findings

Storing Data
├── Storing Frontend Data
├── Storing Data in SQLite
└── Adding Files

Communication & Events
├── Creating and Calling a Custom Function (RPC)
├── Handling Backend Events
├── Sending Events to the Frontend
└── Listening to Application Events (missing)

System Integration
├── Spawning a Process
├── Using Environment Variables
└── Using Invalid UTF-8

Distribution
├── Setting Up Your Repository
└── Submitting to the Store

Contributions
└── Documentation
```

## Alternative Structure (By User Goal)

If we want to be even more task-oriented, we could organize by common user goals:

```
Getting Started
├── Getting Started
├── Configuring Your Package
└── AI Assisted Coding

Creating Plugin Features
├── Building User Interfaces
│   ├── Creating a Page
│   ├── Creating a Command
│   ├── Customizing Context Menus
│   ├── Using the Component Library
│   └── Showing Dialogs (missing)
├── Working with HTTP
│   ├── Sending HTTP Requests
│   ├── Sending a Fetch Request
│   ├── Fetching Proxied Requests
│   └── Using Findings
└── Managing Data
    ├── Storing Frontend Data
    ├── Storing Data in SQLite
    └── Adding Files

Connecting Components
├── Creating and Calling a Custom Function (RPC)
├── Handling Backend Events
├── Sending Events to the Frontend
└── Listening to Application Events (missing)

System Operations
├── Spawning a Process
├── Using Environment Variables
└── Using Invalid UTF-8

Sharing Your Plugin
├── Setting Up Your Repository
└── Submitting to the Store

Contributing
└── Documentation
```

## Recommended Approach

I recommend the **first alternative structure** (Task-Oriented) because:

1. **Clear task groupings** - Each section answers "what do I want to do?"
2. **Progressive disclosure** - Users can expand sections as needed
3. **No technical boundaries** - Frontend/backend separation is hidden
4. **Scalable** - Easy to add new guides to appropriate sections
5. **Matches Diátaxis** - How-to guides should be organized by user goals

## Implementation Notes

1. **Rename sections** to be more user-friendly:
   - "Frontend" → "Building User Interfaces"
   - "Backend" → Split into "Working with HTTP", "Communication & Events", "System Integration"
   - "Shared" → Merge into appropriate sections

2. **Group related concepts**:
   - All HTTP-related guides together
   - All event-related guides together
   - All storage-related guides together

3. **Consider adding missing guides** as placeholders:
   - "Showing Dialogs" under Building User Interfaces
   - "Listening to Application Events" under Communication & Events

4. **Keep "Getting Started" separate** - It serves a different purpose (onboarding)

5. **Keep "Distribution" and "Contributions" separate** - These are meta-topics about the plugin ecosystem, not plugin development itself

## Comparison: Current vs. Recommended

| Current | Recommended | Benefit |
|---------|-------------|---------|
| Frontend/Backend/Shared | Task-oriented sections | Users find guides by what they want to do, not which SDK |
| Technical boundaries | User goals | Better matches mental models |
| Mixed abstraction | Consistent grouping | Easier to find related guides |
| SDK-focused | Concept-focused | Aligns with Diátaxis principles |

## Next Steps

1. Reorganize the sidebar structure in `.vitepress/sidebars/guides.ts`
2. Consider renaming some guides to be more task-oriented:
   - "Creating and Calling a Custom Function" → "Communicating Between Frontend and Backend"
   - "Sending a Fetch Request" → "Making HTTP Requests with Fetch"
3. Add placeholders for missing high-priority guides
4. Update guide titles to be more consistent (all start with action verbs)
