# GraphQL Directory

This directory contains all GraphQL-related code for the GTN Stock platform application, including queries, mutations, subscriptions, and generated TypeScript types.

## Directory Structure

```
gql/
├── account/
│   ├── create.gql.ts
│   └── update.gql.ts
├── address/
│   ├── find.gql.ts
│   └── update.gql.ts
├── auth/
│   ├── login.gql.ts
│   └── logout.gql.ts
├── bank-account/
│   ├── create.gql.ts
│   └── delete.gql.ts
├── kyc/
│   ├── create-financial.gql.ts
│   ├── update-kyc-progress.gql.ts
│   └── upload-doc.gql.ts
├── generated/
│   └── ...
└── schema.graphql
```

## GraphQL Code Generation

The project uses GraphQL Code Generator to automatically generate TypeScript types from the GraphQL schema and operations. This ensures type safety when working with GraphQL data.

### Configuration

The configuration for GraphQL Code Generator is in the `codegen.ts` file at the root of the project:

```typescript
import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'src/gql/schema.graphql',
  documents: ['src/gql/**/*.gql.ts'],
  generates: {
    'src/gql/generated/types.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        withHooks: true,
        withComponent: false,
        withHOC: false
      }
    }
  }
}

export default config
```

### Running Code Generation

To generate TypeScript types from GraphQL schema and operations, run:

```bash
pnpm codegen
```

## Defining GraphQL Operations

### Queries

Queries are defined in the `queries` directory and follow a consistent pattern:

```typescript
// src/gql/queries/user.gql.ts
import { gql } from '@apollo/client'
import { USER_FRAGMENT } from '../fragments/user.gql'

export const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`

export const GET_USERS = gql`
  query GetUsers($page: Int, $limit: Int) {
    users(page: $page, limit: $limit) {
      items {
        ...UserFragment
      }
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
  }
  ${USER_FRAGMENT}
`
```

### Mutations

Mutations are defined in the `mutations` directory:

```typescript
// src/gql/mutations/user.gql.ts
import { gql } from '@apollo/client'
import { USER_FRAGMENT } from '../fragments/user.gql'

export const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`

export const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`
```

### Fragments

Fragments are reusable pieces of GraphQL queries that can be shared between different operations:

```typescript
// src/gql/fragments/user.gql.ts
import { gql } from '@apollo/client'

export const USER_FRAGMENT = gql`
  fragment UserFragment on User {
    id
    email
    firstName
    lastName
    role
    createdAt
    updatedAt
  }
`
```

## Using GraphQL Operations

### Queries

```tsx
import { GetUserQuery, GetUserQueryVariables } from '@/gql/generated/types'
import { GET_USER } from '@/gql/queries/user.gql'
import { useQuery } from '@apollo/client'

function UserProfile({ userId }: { userId: string }) {
  const { data, loading, error } = useQuery<GetUserQuery, GetUserQueryVariables>(GET_USER, {
    variables: { id: userId }
  })

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  const user = data?.user
  if (!user) return <div>User not found</div>

  return (
    <div>
      <h1>
        {user.firstName} {user.lastName}
      </h1>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  )
}
```

### Mutations

```tsx
import { UpdateUserMutation, UpdateUserMutationVariables } from '@/gql/generated/types'
import { UPDATE_USER } from '@/gql/mutations/user.gql'
import { useMutation } from '@apollo/client'

function UserEditForm({ userId, user, onSuccess }: { userId: string; user: User; onSuccess: () => void }) {
  const [updateUser, { loading }] = useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UPDATE_USER, {
    onCompleted: () => {
      onSuccess()
    }
  })

  const handleSubmit = (values) => {
    updateUser({
      variables: {
        id: userId,
        input: {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email
        }
      }
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button type='submit' disabled={loading}>
        {loading ? 'Saving...' : 'Save'}
      </button>
    </form>
  )
}
```

## Apollo Client Configuration

The Apollo Client is configured in the `src/lib/apollo.ts` file. It includes settings for the GraphQL endpoint, authentication, error handling, and caching.

## Best Practices

1. **Use Fragments**: Break down complex queries into reusable fragments
2. **Type Safety**: Use generated TypeScript types for queries and mutations
3. **Error Handling**: Implement proper error handling for GraphQL operations
4. **Caching**: Configure Apollo Client caching for optimal performance
5. **Pagination**: Use cursor-based pagination for large data sets
6. **Optimistic UI**: Implement optimistic updates for mutations

## Contributing

When adding new GraphQL operations:

1. Follow the existing directory structure and naming conventions
2. Use fragments for reusable parts of queries
3. Run code generation to update TypeScript types
4. Add appropriate error handling when using the operations
