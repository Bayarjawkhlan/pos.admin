# Routes Directory

This directory contains the route definitions for the GTN Stock platform application using TanStack Router. TanStack Router is a fully type-safe router for React applications that provides a powerful and flexible routing system.

## Directory Structure

The routes directory follows a file-based routing structure similar to Next.js, but with TanStack Router's conventions:

```
routes/
├── _authenticated/
│   ├── dashboard/
│   │   ├── index.tsx
│   │   └── analytics/
│   │       └── index.tsx
│   ├── users/
│   │   ├── index.tsx
│   │   ├── $id/
│   │   │   └── index.tsx
│   │   └── create/
│   │       └── index.tsx
│   └── index.tsx
├── _auth/
│   ├── sign-in/
│   │   └── index.tsx
│   ├── sign-up/
│   │   └── index.tsx
│   └── forgot-password/
│       └── index.tsx
└── route.tsx
```

## Route Definition

Each route is defined in a `route.tsx` file using the `createFileRoute` function from TanStack Router. Here's an example of a route definition:

```tsx
import { createFileRoute } from '@tanstack/react-router'

const Page = () => {}

export const Route = createFileRoute('/_authenticated/users/')({
  component: Page,
  loader: async ({ context }) => {
    // Fetch data needed for this route
    return {
      users: await context.api.getUsers()
    }
  },
  beforeLoad: async ({ location, context }) => {
    // Run logic before the route loads
    // Can be used for authorization checks, redirects, etc.
  },
  errorComponent: ({ error }) => {
    // Custom error handling for this route
    return <div>Error: {error.message}</div>
  }
})
```

## Route Parameters

Dynamic route parameters are defined using the `$` prefix in the directory name. For example, `users/$id/route.tsx` defines a route with a dynamic `id` parameter.

```tsx
import { createFileRoute } from '@tanstack/react-router'

const Page = () => {}

export const Route = createFileRoute('/_authenticated/users/$id')({
  component: Page,
  loader: async ({ params }) => {
    // Access the id parameter
    const { id } = params

    // Fetch data for this specific user
    return {
      user: await api.getUser(id)
    }
  }
})
```

## Nested Routes

Routes can be nested to create a hierarchy. The `_authenticated` route is a parent route that applies authentication to all its child routes.

```tsx
import { createFileRoute, redirect } from '@tanstack/react-router'
import { useAuthStore } from '@/lib/stores/auth'

const Layout = () => {
  return <Outlet />
}

export const Route = createFileRoute('/_authenticated')({
  component: Layout,
  beforeLoad: async ({ location }) => {
    const { isAuthenticated, isLoading } = useAuthStore.getState()
    if (isLoading) return
    if (!isAuthenticated) {
      throw redirect({
        to: '/auth/sign-in',
        search: {
          redirect: location.href
        }
      })
    }
  }
})
```

## Route Data and Loaders

TanStack Router provides a powerful data loading system through route loaders. Loaders are functions that run before a route is rendered and can fetch data needed for the route.

```tsx
import { createFileRoute } from '@tanstack/react-router'
import { DashboardPage } from '@/pages/dashboard'

export const Route = createFileRoute('/_authenticated/dashboard/')({
  component: DashboardPage,
  loader: async () => {
    // Fetch data in parallel
    const [stats, recentActivity] = await Promise.all([api.getStats(), api.getRecentActivity()])

    return {
      stats,
      recentActivity
    }
  }
})
```

In the component, you can access the loader data using the `useLoaderData` hook:

```tsx
import { useLoaderData } from '@tanstack/react-router'

function DashboardPage() {
  const { stats, recentActivity } = useLoaderData()

  return (
    <div>
      <StatsDisplay stats={stats} />
      <ActivityFeed activities={recentActivity} />
    </div>
  )
}
```

## Navigation

TanStack Router provides several ways to navigate between routes:

### Link Component

```tsx
import { Link } from '@tanstack/react-router'

function Navigation() {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/users'>Users</Link>
      <Link to='/settings'>Settings</Link>
    </nav>
  )
}
```

### Programmatic Navigation

```tsx
import { useNavigate } from '@tanstack/react-router'

function LoginForm() {
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Login logic
    navigate({ to: '/dashboard' })
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button type='submit'>Login</button>
    </form>
  )
}
```

## Best Practices

1. **Route Organization**: Group related routes together in directories
2. **Data Loading**: Use loaders to fetch data needed for a route
3. **Authentication**: Use the `beforeLoad` hook to check authentication status
4. **Error Handling**: Provide error components for graceful error handling
5. **Type Safety**: Leverage TypeScript for fully type-safe routing

## Contributing

When adding new routes:

1. Follow the existing directory structure and naming conventions
2. Use the route definition template outlined above
3. Add appropriate loaders and error handling
4. Consider adding tests for the route
