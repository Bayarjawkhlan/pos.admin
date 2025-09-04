# GTN Stock platform Development Guidelines

This document provides essential information for developers working on the GTN Stock platform project. It includes build/configuration instructions, testing setup, and development guidelines.

## Build/Configuration Instructions

### Prerequisites

- Node.js (v18+)
- pnpm (v8+)

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm dev
```

The development server will be available at `http://localhost:5173` by default, or at `https://btf.test` if you've configured your hosts file accordingly.

### Building for Production

```bash
# Build for production
pnpm build
```

The build output will be in the `dist` directory.

### Preview Production Build

```bash
# Preview the production build
pnpm preview
```

## Testing Information

### Testing Setup

The project uses Vitest for testing, along with React Testing Library for component testing.

#### Required Dependencies

Add these to your package.json:

```json
{
  "devDependencies": {
    "@testing-library/jest-dom": "^6.4.0",
    "@testing-library/react": "^15.0.0",
    "@testing-library/user-event": "^14.5.2",
    "jsdom": "^24.0.0",
    "vitest": "^1.3.0"
  }
}
```

And add this script to your package.json:

```json
{
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest",
    "test:coverage": "vitest run --coverage"
  }
}
```

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

### Writing Tests

Tests should be placed in the same directory as the component they're testing, with a `.test.tsx` or `.spec.tsx` extension.

#### Example Test

Here's a simple example of a component test:

```tsx
// Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Button } from './button'

describe('Button Component', () => {
  it('renders with the correct label', () => {
    render(<Button label='Click me' />)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn()
    render(<Button label='Click me' onClick={handleClick} />)
    fireEvent.click(screen.getByText('Click me'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('is disabled when disabled prop is true', () => {
    render(<Button label='Click me' disabled={true} />)
    expect(screen.getByText('Click me')).toBeDisabled()
  })
})
```

### Testing GraphQL Components

For components that use GraphQL, you'll need to mock the Apollo Client. Here's an example of how to do that:

```tsx
import { MockedProvider } from '@apollo/client/testing'
import { render } from '@testing-library/react'

const mocks = [
  {
    request: {
      query: YOUR_QUERY,
      variables: { id: '1' },
    },
    result: {
      data: {
        // Your mock data here
      },
    },
  },
]

render(
  <MockedProvider mocks={mocks} addTypename={false}>
    <YourComponent />
  </MockedProvider>
)
```

## Additional Development Information

### Project Structure

- `src/components`: Reusable UI components
- `src/gql`: GraphQL queries, mutations, and generated types
- `src/lib`: Utility functions, hooks, and context providers
- `src/pages`: Page components
- `src/routes`: TanStack Router route definitions
- `src/test`: Test utilities and setup

### Code Style

The project uses ESLint and Prettier for code formatting. Configuration is in:
- `.prettierrc` - Prettier configuration
- `eslint.config.js` - ESLint configuration

To check and fix formatting:

```bash
# Check formatting
pnpm format:check

# Fix formatting
pnpm format
```

### GraphQL Code Generation

The project uses GraphQL Code Generator to generate TypeScript types from the GraphQL schema.

```bash
# Generate GraphQL types
pnpm codegen
```

Configuration is in `codegen.ts`.

### Path Aliases

The project uses path aliases to simplify imports. The main alias is `@/` which points to the `src` directory.

Example:
```tsx
// Instead of
import { Button } from '../../../components/ui/Button'

// Use
import { Button } from '@/components/ui/Button'
```

### TanStack Router

The project uses TanStack Router for routing. Route definitions are in the `src/routes` directory.

### Styling

The project uses Tailwind CSS for styling. The configuration is in:
- `tailwind.config.js` - Tailwind configuration
- `components.json` - Shadcn UI configuration
