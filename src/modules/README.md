Modules Directory
This directory contains the feature-specific code for the GTN Stock platform application. Each top-level folder represents a distinct module (e.g., admin, users, auth). If a module has sub-modules, the parent folder serves as a logical container and does not contain its own components, stores, or utility files. The functional code is organized within the sub-modules.

Directory Structure
This structure ensures a clear separation of concerns, with the parent module acting as a namespace for its sub-modules.

<!--  -->

modules/
├── submodule-a/
│ ├── components/
│ │ ├── ComponentA.tsx
│ │ └── ComponentB.tsx
│ ├── hooks/
│ │ └── use-submodule-a-hook.ts
│ ├── store.ts
│ ├── constants.ts
│ └── utils.ts
├── submodule-b/
├───├ submodule-c/
├── ├─├── components/
├── ├─├── ComponentA.tsx
├── ├─└── ComponentB.tsx
├── ├─└── hooks/
├── ├─ └── use-submodule-a-hook.ts
├── ├─└ store.ts
├── ├─└ constants.ts
├── └─└ utils.ts
├───├ submodule-d/
├── ├─├── components/
├── ├─├── ComponentA.tsx
├── ├─└── ComponentB.tsx
├── ├─└── hooks/
├── ├─ └── use-submodule-a-hook.ts
├── ├─└ store.ts
├── ├─└ constants.ts
├── └─└ utils.ts

A parent module in this structure serves only as a logical container if it contains sub-modules. In such cases, the parent module **must not** contain its own components, stores, or utilities—these should reside exclusively within its sub-modules.  
 However, if a module does **not** have any sub-modules, it can function as a standalone module and may contain its own components, hooks, store, constants, and utilities directly within its folder.

Sub-Module-Level Stores and Utilities
The lib directory is for global code, while each sub-module contains its own, self-contained logic.

store.ts: A Zustand store for state that is only relevant to this specific sub-module.

utils.ts: Utility functions that are only used within this sub-module.

constants.ts: Constants that are specific to this sub-module's logic or configuration.

This structure prevents the global lib directory from becoming cluttered and makes modules easier to maintain and reuse.

Best Practices
When working with modules, remember to:

Encapsulate Logic: Keep all module-specific code, including components, hooks, and state, within the sub-module's folder.

Avoid Global Imports: Only import from the global lib directory when absolutely necessary.

Follow Conventions: Use the defined folder structure and naming conventions for consistency across all modules.
