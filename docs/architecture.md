# GTN Stock platform Architecture

This document outlines the architecture, data flow, and key design decisions for the GTN Stock platform application.

## Application Architecture

The GTN Stock platform follows a modern React application architecture with a focus on component-based design, type safety, and maintainability.

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        UI Layer                             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │ Components  │  │   Pages     │  │      Layouts        │  │
│  └─────────────┘  └─────────────┘  └─────────────────────┘  │
├─────────────────────────────────────────────────────────────┤
│                      Application Layer                      │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │    Hooks    │  │    HOCs     │  │  Context Providers  │  │
│  └─────────────┘  └─────────────┘  └─────────────────────┘  │
├─────────────────────────────────────────────────────────────┤
│                       State Management                      │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │   Zustand   │  │React Context│  │   Local State       │  │
│  │   Stores    │  │             │  │                     │  │
│  └─────────────┘  └─────────────┘  └─────────────────────┘  │
├─────────────────────────────────────────────────────────────┤
│                        Data Access                          │
│  ┌─────────────────────────────────────────────────────────┐│
│  │                    Apollo Client                        ││
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐  ││
│  │  │   Queries   │  │  Mutations  │  │  Subscriptions  │  ││
│  │  └─────────────┘  └─────────────┘  └─────────────────┘  ││
│  └─────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────┘
```

### Key Components

1. **UI Layer**: Responsible for rendering the user interface
   - Components: Reusable UI components
   - Pages: Route-specific views
   - Layouts: Page structure and organization

2. **Application Layer**: Contains application logic
   - Hooks: Reusable stateful logic
   - HOCs: Cross-cutting concerns
   - Context Providers: Shared state for component trees

3. **State Management**: Manages application state
   - Zustand Stores: Global state management
   - React Context: Component tree state
   - Local State: Component-specific state

4. **Data Access**: Handles data fetching and manipulation
   - Apollo Client: GraphQL client for data fetching
   - Queries: Data retrieval operations
   - Mutations: Data modification operations
   - Subscriptions: Real-time data updates

## Data Flow

The application follows a unidirectional data flow pattern:

1. **User Interaction**: User interacts with the UI
2. **Action Dispatch**: UI components dispatch actions (e.g., state updates, API calls)
3. **State Update**: State is updated in response to actions
4. **UI Update**: UI components re-render based on the new state

### Example Data Flow

```
┌──────────────┐    ┌───────────────┐    ┌──────────────┐    ┌──────────────┐
│  User clicks │    │ Component     │    │ Apollo       │    │ GraphQL      │
│  "Save" in   │───►│ dispatches    │───►│ Client       │───►│ Server       │
│  UserForm    │    │ mutation      │    │ executes     │    │ processes    │
└──────────────┘    └───────────────┘    │ mutation     │    │ mutation     │
                                         └──────┬───────┘    └──────┬───────┘
                                                │                   │
                                                ▼                   ▼
┌──────────────┐    ┌───────────────┐    ┌──────────────┐    ┌──────────────┐
│  UI updates  │    │ Component     │    │ Apollo       │    │ Server       │
│  to show     │◄───│ re-renders    │◄───│ Client       │◄───│ returns      │
│  success     │    │ with new data │    │ updates cache│    │ response     │
└──────────────┘    └───────────────┘    └──────────────┘    └──────────────┘
```

## State Management Strategy

The application uses a hybrid state management approach:

### Global State (Zustand)

Zustand is used for global application state that needs to be accessed by many components across the application. Examples include:

- Authentication state
- User information
- Application-wide settings
- Global UI state (e.g., sidebar state, theme)

```typescript
// Example Zustand store
import { create } from 'zustand'

interface AuthState {
  isAuthenticated: boolean
  user: User | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: async (email, password) => {
    // Login logic
    set({ isAuthenticated: true, user: userData })
  },
  logout: () => {
    // Logout logic
    set({ isAuthenticated: false, user: null })
  },
}))
```

### Component Tree State (React Context)

React Context is used for state that needs to be shared among a specific subtree of components. Examples include:

- Form state
- Modal/dialog state
- Component-specific settings

```typescript
// Example Context Provider
import { createContext, useContext, useState } from 'react'

interface SearchContextValue {
  query: string
  setQuery: (query: string) => void
  results: SearchResult[]
}

const SearchContext = createContext<SearchContextValue | undefined>(undefined)

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])

  // Search logic

  // Return the provider with children
  return {
    /* JSX code to render the SearchContext.Provider */
  }
}

export function useSearch() {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider')
  }
  return context
}
```

### Local State (React Hooks)

React's built-in state hooks (`useState`, `useReducer`) are used for component-specific state. Examples include:

- Form input values
- UI state (e.g., isOpen, isLoading)
- Component-specific data

```typescript
// Example local state
function UserForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Form logic
}
```

## Routing

The application uses TanStack Router for routing. Routes are defined in a file-based structure in the `src/routes` directory.

### Route Structure

```
routes/
├── _authenticated/  # Protected routes
│   ├── dashboard/
│   │   └── route.tsx
│   ├── users/
│   │   ├── route.tsx
│   │   └── $id/
│   │       └── route.tsx
│   └── route.tsx
├── auth/  # Public routes
│   ├── sign-in/
│   │   └── route.tsx
│   └── sign-up/
│       └── route.tsx
└── route.tsx  # Root route
```

### Route Definition

```typescript
// Example route definition
import { createFileRoute } from '@tanstack/react-router'
import { DashboardPage } from '@/pages/dashboard'

export const Route = createFileRoute('/_authenticated/dashboard/')({
  component: DashboardPage,
  loader: async () => {
    // Fetch data needed for this route
    return {
      stats: await api.getStats(),
    }
  },
})
```

## Data Fetching

The application uses Apollo Client for GraphQL data fetching. GraphQL operations are defined in the `src/gql` directory.

### GraphQL Operations

```typescript
// Example GraphQL query
import { gql } from '@apollo/client'

export const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      email
      firstName
      lastName
      role
    }
  }
`
```

### Data Fetching in Components

```typescript
// Example data fetching in a component
import { useQuery } from '@apollo/client'
import { GET_USER } from '@/gql/queries/user.gql'

function UserProfile({ userId }: { userId: string }) {
  const { data, loading, error } = useQuery(GET_USER, {
    variables: { id: userId },
  })

  // Handle loading and error states
  if (loading) return { /* Loading component */ }
  if (error) return { /* Error component */ }

  // Render the user profile
  return {
    /* JSX code to render the user profile */
  }
}
```

## Component Design Patterns

The application uses several component design patterns to promote reusability, maintainability, and separation of concerns.

### Compound Components

The compound component pattern is used for complex UI elements that have multiple related parts. Examples include:

- ConfirmDialog
- Form
- Tabs

```tsx
// Example usage of compound components
function DeleteUserDialog() {
  const handleDelete = () => {
    // Delete user logic
  }

  // Return JSX with compound components
  return {
    /* JSX code using ConfirmDialog compound components */
  }
}
```

### Higher-Order Components (HOCs)

HOCs are used to add cross-cutting functionality to components. Examples include:

- withAuth: Authentication protection
- withErrorBoundary: Error handling
- withLoading: Loading state

```tsx
// Example usage of HOCs
function createEnhancedComponent() {
  // Create an enhanced component with multiple HOCs
  const EnhancedUserProfile = withAuth(
    withErrorBoundary(
      withLoading(UserProfile),
      // Error fallback component
      () => ({ /* JSX for error state */ })
    )
  )

  return EnhancedUserProfile
}
```

### Custom Hooks

Custom hooks are used to extract and reuse stateful logic. Examples include:

- useToggle: Boolean toggle state
- useDisclosure: Modal/dialog state
- useFetch: Data fetching with loading and error states

```tsx
// Example usage of custom hooks
function UserModal() {
  const { isOpen, open, close } = useDisclosure()

  // Return JSX with modal implementation
  return {
    /* JSX code to render the modal */
  }
}
```

## Authentication and Authorization

The application uses a token-based authentication system with OAuth 2.0.

### Authentication Flow

1. User enters credentials on the sign-in page
2. Application sends credentials to the authentication server
3. Server validates credentials and returns access and refresh tokens
4. Application stores tokens in cookies with appropriate security settings
5. Application includes the access token in subsequent API requests
6. When the access token expires, the application uses the refresh token to obtain a new access token

### Authorization

Authorization is handled at multiple levels:

1. **Route Level**: Protected routes check for authentication status
2. **Component Level**: Components check for user permissions
3. **API Level**: GraphQL resolvers check for user permissions

## Error Handling

The application implements a comprehensive error handling strategy:

1. **Global Error Handling**: Error boundaries catch unhandled errors
2. **API Error Handling**: Apollo Client error policies and error handling
3. **Form Validation**: Zod schemas for form validation
4. **User Feedback**: Toast notifications for error messages

## Styling

The application uses Tailwind CSS for styling, with a focus on utility classes and component composition.

### Styling Strategy

1. **Base Styles**: Defined in `index.css` and applied globally
2. **Component Styles**: Applied using Tailwind utility classes
3. **Variants**: Implemented using the `class-variance-authority` library
4. **Dynamic Styles**: Generated using the `cn` utility function

```tsx
// Example styled component
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'underline-offset-4 hover:underline text-primary',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3 rounded-md',
        lg: 'h-11 px-8 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  // Return the button element with appropriate classes and props
  return {
    /* JSX code to render the button */
  }
}
```

## Internationalization (i18n)

The application uses Lingui for internationalization, allowing for translation of text content.

### i18n Strategy

1. **Message Extraction**: Text is wrapped in translation functions
2. **Translation Files**: JSON files contain translated messages
3. **Language Selection**: Users can select their preferred language
4. **Dynamic Loading**: Language files are loaded dynamically

## Accessibility

The application follows WCAG 2.1 AA standards for accessibility.

### Accessibility Features

1. **Semantic HTML**: Proper use of HTML elements
2. **ARIA Attributes**: Added where necessary
3. **Keyboard Navigation**: All interactive elements are keyboard accessible
4. **Focus Management**: Proper focus handling for modals and dialogs
5. **Color Contrast**: Sufficient contrast for text and UI elements

## Performance Optimization

The application implements several performance optimizations:

1. **Code Splitting**: Routes and large components are code-split
2. **Lazy Loading**: Components are loaded on demand
3. **Memoization**: React.memo, useMemo, and useCallback are used to prevent unnecessary re-renders
4. **GraphQL Optimization**: Query batching, caching, and optimistic updates
5. **Asset Optimization**: Images and other assets are optimized for web

## Conclusion

The GTN Stock platform architecture is designed to be modular, maintainable, and scalable. By following modern React patterns and best practices, the application provides a solid foundation for future development and enhancement.
