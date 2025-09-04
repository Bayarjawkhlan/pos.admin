# GTN Stock platform Coding Standards

This document outlines the coding standards and best practices for the GTN Stock platform project. Following these standards ensures consistency, maintainability, and quality across the codebase.

## Code Style and Formatting

### General Guidelines

- Use consistent indentation (2 spaces)
- Limit line length to 100 characters where possible
- Use meaningful variable and function names
- Avoid abbreviations unless they are well-known (e.g., `id`, `url`)
- Use camelCase for variables and functions, PascalCase for components and classes
- Use descriptive file names that reflect the component's purpose

### Automated Formatting

The project uses Prettier for automatic code formatting. Configuration is in `.prettierrc`.

To format your code:

```bash
# Check formatting
pnpm format:check

# Fix formatting
pnpm format
```

## ESLint Rules and Best Practices

The project uses ESLint to enforce code quality and best practices. Configuration is in `eslint.config.js`.

### React Best Practices

- Use functional components with hooks instead of class components
- Use the appropriate hooks for different use cases:
  - `useState` for local component state
  - `useEffect` for side effects
  - `useCallback` for memoized callbacks
  - `useMemo` for expensive calculations
- Always include all dependencies in the dependency array for `useEffect`, `useCallback`, and `useMemo`
- Use React.memo for expensive components that re-render often
- Avoid inline function definitions in render methods where possible
- Use proper key props when rendering lists (avoid using index as key)
- Prefer controlled components over uncontrolled components
- Use React Context API for state that needs to be accessed by many components
- Use Zustand for global state management

### TypeScript Best Practices

- Use explicit types for function parameters and return values
- Use interfaces for object shapes that will be extended or implemented
- Use type for complex types, unions, and intersections
- Use Zod for runtime validation of data
- Avoid using `any` type unless absolutely necessary
- Use TypeScript's utility types (e.g., `Partial<T>`, `Pick<T>`, `Omit<T>`) where appropriate

### Accessibility Best Practices

- Ensure all images have appropriate alt text
- Use semantic HTML elements (`<button>`, `<a>`, `<nav>`, etc.)
- Ensure proper keyboard navigation
- Use ARIA attributes when necessary
- Ensure sufficient color contrast
- Test with screen readers
- Follow WCAG 2.1 AA standards

## Project Structure

- `src/components`: Reusable UI components
- `src/gql`: GraphQL queries, mutations, and generated types
- `src/lib`: Utility functions, hooks, and context providers
- `src/pages`: Page components
- `src/routes`: TanStack Router route definitions
- `src/test`: Test utilities and setup

### Component Organization

- Each component should be in its own directory if it has multiple files
- Include tests in the same directory as the component
- Use index.ts files to export components from directories
- Use barrel exports for related components


## Testing Standards

- Write tests for all components and utilities
- Test component rendering, interactions, and edge cases
- Use React Testing Library for component testing
- Mock external dependencies
- Aim for at least 80% test coverage

## Pre-commit Hooks

The project uses Husky and lint-staged to enforce code quality before commits:

- ESLint runs on all staged JavaScript and TypeScript files
- Prettier formats all staged files
- Tests must pass before pushing to the repository

## Import Order

Imports should be organized in the following order:

1. React and related libraries
2. Third-party libraries
3. Project imports (using absolute paths with `@/` prefix)
4. Relative imports
5. CSS/SCSS imports

Example:
```tsx
// React and related libraries
import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'

// Third-party libraries
import { format } from 'date-fns'
import clsx from 'clsx'

// Project imports (absolute paths)
import { Button } from '@/components/ui/Button'
import { useAuth } from '@/lib/auth'

// Relative imports
import { formatCurrency } from '../../utils'

// CSS/SCSS imports
import './styles.css'
```

## State Management

- Use local state (useState) for component-specific state
- Use React Context for state shared between related components
- Use Zustand for global application state
- Document the purpose and structure of each store

## Error Handling

- Use try/catch blocks for error handling
- Implement error boundaries at appropriate levels
- Provide user-friendly error messages
- Log errors for debugging
- Add retry mechanisms for network operations

## Performance Considerations

- Use React.memo for expensive components
- Use useCallback and useMemo for expensive operations
- Implement virtualization for long lists (AG Grid)
- Optimize bundle size with code splitting
- Lazy load components and routes
- Optimize images and assets

## Documentation

- Add JSDoc comments for functions and components
- Document props with TypeScript interfaces
- Add inline comments for complex logic
- Create README files for major directories
- Document non-obvious design decisions

## Conclusion

Following these coding standards will help maintain a consistent, high-quality codebase that is easier to understand, maintain, and extend. These standards should evolve over time as the project grows and as best practices in the industry change.