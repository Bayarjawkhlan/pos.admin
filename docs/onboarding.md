# GTN Stock platform Onboarding Guide

Welcome to the GTN Stock platform project! This guide will help you get started with the development environment, understand the project structure, and learn common workflows and tasks.

## Development Environment Setup

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v18+) - [Download](https://nodejs.org/)
- **pnpm** (v8+) - Install with `npm install -g pnpm`
- **Git** - [Download](https://git-scm.com/downloads)
- A code editor (we recommend [WebStorm](https://www.jetbrains.com/webstorm/))

### Recommended VS Code Extensions

For the best development experience, we recommend installing the following VS Code extensions:

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- GraphQL
- vscode-styled-components
- Error Lens

### Setting Up Your Development Environment

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-org/btf.admin.git
   cd btf.admin
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory based on the `.env.example` file:

   ```bash
   cp .env.example .env
   ```

   Update the values in the `.env` file with your local development settings.

4. **Configure Husky (pre-commit hooks)**

   The project uses Husky for pre-commit hooks to ensure code quality. This should be set up automatically when you run `pnpm install`, but if you encounter any issues, you can run:

   ```bash
   pnpm prepare
   ```

## Getting Started

### Running the Application Locally

1. **Start the development server**

   ```bash
   pnpm dev
   ```

   This will start the development server at `http://localhost:5173` by default, or at `https://btf.test` if you've configured your hosts file accordingly.

2. **Access the application**

   Open your browser and navigate to `http://localhost:5173` (or `https://btf.test`).

### Project Structure

The project follows a modular structure organized by feature and responsibility:

- `src/components`: Reusable UI components
- `src/gql`: GraphQL queries, mutations, and generated types
- `src/lib`: Utility functions, hooks, and context providers
- `src/pages`: Page components
- `src/routes`: TanStack Router route definitions
- `src/test`: Test utilities and setup
- `src/assets`: Static assets (images, icons, etc.)

For more detailed information about the project structure, refer to the [Architecture Documentation](./architecture.md).

### Basic Development Workflow

1. **Create a new branch for your feature or bug fix**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**

   Implement your feature or fix the bug according to the project requirements.

3. **Run linting and formatting**

   ```bash
   pnpm lint
   pnpm format
   ```

4. **Run tests**

   ```bash
   pnpm test
   ```

5. **Commit your changes**

   The project uses pre-commit hooks to ensure code quality. When you commit, Husky will automatically run linting and formatting checks.

   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

6. **Push your changes and create a pull request**

   ```bash
   git push origin feature/your-feature-name
   ```

   Then create a pull request on GitHub.

## Common Workflows and Tasks

### Adding a New Component

1. **Create a new component file**

   Create a new file in the appropriate directory under `src/components`. For UI components, use the `src/components/ui` directory.

   ```tsx
   // src/components/ui/MyComponent.tsx
   import React from 'react'
   import { cn } from '@/lib/utils'

   interface MyComponentProps {
     className?: string
     children: React.ReactNode
   }

   export function MyComponent({ className, children }: MyComponentProps) {
     return (
       <div className={cn('my-component-base-styles', className)}>
         {children}
       </div>
     )
   }
   ```

2. **Add tests for your component**

   Create a test file in the same directory as your component:

   ```tsx
   // src/components/ui/MyComponent.test.tsx
   import { render, screen } from '@testing-library/react'
   import { describe, it, expect } from 'vitest'
   import { MyComponent } from './MyComponent'

   describe('MyComponent', () => {
     it('renders children correctly', () => {
       render(<MyComponent>Test Content</MyComponent>)
       expect(screen.getByText('Test Content')).toBeInTheDocument()
     })
   })
   ```

3. **Export your component**

   If you're creating a component in a new directory, create an `index.ts` file to export it:

   ```typescript
   // src/components/ui/my-component/index.ts
   export * from './MyComponent'
   ```

### Working with GraphQL

1. **Define a new query or mutation**

   Create a new file in the appropriate directory under `src/gql`:

   
   ```graphql
    #src/gql/myEntity/myEntity.gql
    query GetMyEntity($id: ID!) {
       node(id: $id) {
         id
         ... on User{
           fullName
           email
         }
       }
     }
   ```

2. **Generate TypeScript types**

   After defining your GraphQL operations, generate the TypeScript types:

   ```bash
   pnpm codegen
   ```

3. **Use the query or mutation in a component**

   ```tsx
   import { useQuery } from '@apollo/client'
   import { GET_MY_ENTITY } from '@/gql/queries/myEntity.gql'
   import { GetMyEntityQuery, GetMyEntityQueryVariables } from '@/gql/generated/types'

   function MyEntityDetails({ id }: { id: string }) {
     const { data, loading, error } = useQuery<GetMyEntityQuery, GetMyEntityQueryVariables>(
       GET_MY_ENTITY,
       {
         variables: { id },
       }
     )

     if (loading) return <div>Loading...</div>
     if (error) return <div>Error: {error.message}</div>
     if (!data?.myEntity) return <div>Entity not found</div>

     return (
       <div>
         <h1>{data.myEntity.name}</h1>
         <p>{data.myEntity.description}</p>
       </div>
     )
   }
   ```

### Testing

1. **Running tests**

   ```bash
   # Run all tests
   pnpm test

   # Run tests in watch mode
   pnpm test:watch

   # Run tests with coverage
   pnpm test:coverage
   ```

2. **Writing component tests**

   Use React Testing Library to test components:

   ```tsx
   import { render, screen, fireEvent } from '@testing-library/react'
   import { describe, it, expect, vi } from 'vitest'
   import { Button } from './button'

   describe('Button Component', () => {
     it('renders with the correct label', () => {
       render(<Button>Click me</Button>)
       expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
     })

     it('calls onClick handler when clicked', () => {
       const handleClick = vi.fn()
       render(<Button onClick={handleClick}>Click me</Button>)
       fireEvent.click(screen.getByRole('button', { name: /click me/i }))
       expect(handleClick).toHaveBeenCalledTimes(1)
     })
   })
   ```

3. **Testing GraphQL components**

   Use the `MockedProvider` from Apollo Client to test components that use GraphQL:

   ```tsx
   import { render, screen, waitFor } from '@testing-library/react'
   import { MockedProvider } from '@apollo/client/testing'
   import { GET_MY_ENTITY } from '@/gql/queries/myEntity.gql'
   import { MyEntityDetails } from './MyEntityDetails'

   const mocks = [
     {
       request: {
         query: GET_MY_ENTITY,
         variables: { id: '1' },
       },
       result: {
         data: {
           myEntity: {
             id: '1',
             name: 'Test Entity',
             description: 'This is a test entity',
           },
         },
       },
     },
   ]

   describe('MyEntityDetails', () => {
     it('renders loading state initially', () => {
       render(
         <MockedProvider mocks={mocks} addTypename={false}>
           <MyEntityDetails id="1" />
         </MockedProvider>
       )
       expect(screen.getByText(/loading/i)).toBeInTheDocument()
     })

     it('renders entity data when loaded', async () => {
       render(
         <MockedProvider mocks={mocks} addTypename={false}>
           <MyEntityDetails id="1" />
         </MockedProvider>
       )
       await waitFor(() => {
         expect(screen.getByText('Test Entity')).toBeInTheDocument()
         expect(screen.getByText('This is a test entity')).toBeInTheDocument()
       })
     })
   })
   ```

### Building for Production

1. **Build the application**

   ```bash
   pnpm build
   ```

   This will create a production-ready build in the `dist` directory.

2. **Preview the production build**

   ```bash
   pnpm preview
   ```

   This will serve the production build locally for testing.

## Troubleshooting

### Common Issues

1. **Dependency installation fails**

   Try clearing the pnpm cache and reinstalling:

   ```bash
   pnpm store prune
   pnpm install
   ```

2. **GraphQL code generation fails**

   Ensure your GraphQL schema is up to date and your queries/mutations are valid:

   ```bash
   pnpm codegen
   ```

3. **Pre-commit hooks not working**

   Ensure Husky is properly installed:

   ```bash
   pnpm prepare
   ```

4. **TypeScript errors**

   Run the TypeScript compiler to check for errors:

   ```bash
   pnpm tsc
   ```

### Getting Help

If you encounter any issues not covered in this guide, please:

1. Check the project documentation in the `docs` directory
2. Ask a team member for assistance
3. Check the project's issue tracker on GitHub

## Additional Resources

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [TanStack Router Documentation](https://tanstack.com/router/latest)
- [Apollo Client Documentation](https://www.apollographql.com/docs/react/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vitest Documentation](https://vitest.dev/guide/)
- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)

## Conclusion

This onboarding guide should help you get started with the GTN Stock platform project. As you become more familiar with the codebase, refer to the more detailed documentation in the `docs` directory, including the [Architecture Documentation](./architecture.md) and [Coding Standards](./coding-standards.md).

Happy coding!