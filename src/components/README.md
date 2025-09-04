# Components Directory

This directory contains all the common React components used in the every modules of GTN Stock platform application. Components are organized into several categories to maintain a clean and scalable architecture.

## Directory Structure

- `ui/`: Contains reusable UI components that form the building blocks of the application
- `common/`: This is for components that are used frequently throughout the application but don't fit into the other specific categories. It's a general-purpose folder for things like a navigation bar or a footer that appear on many different pages.
- `fields/`: This folder is dedicated to all components related to forms. For example, it would contain components for entering text, selecting dates, or uploading files.
- `ag-grid/`: holds all the components that use the powerful AG Grid library for creating advanced data tables with features like sorting and filtering.

## UI Components

The ui/ directory houses all the application's reusable UI components. These components are based on Radix UI for functionality and are styled using Tailwind CSS. They follow the Shadcn UI design system, ensuring a consistent, accessible, and easily customizable look and feel.

How to Use UI Components
To use a component, simply import it from the @/components/ui path.

```tsx
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const MyComponent = () => {
  return (
    <div>
      <Input placeholder='Enter your name' />
      <Button>Submit</Button>
    </div>
  )
}
```

Understanding Compound Components
Some of our more advanced UI elements use a compound component pattern. This design makes them more flexible and easier to combine, allowing you to build complex interfaces with simple parts.

A great example is the ConfirmDialog component, which is built from smaller pieces like ConfirmDialogHeader and ConfirmDialogConfirm. This approach gives you full control over the dialog's structure and content.

Example: ConfirmDialog
TypeScript

```tsx
import {
  ConfirmDialog,
  ConfirmDialogTrigger,
  ConfirmDialogHeader,
  ConfirmDialogTitle,
  ConfirmDialogDescription,
  ConfirmDialogFooter,
  ConfirmDialogCancel,
  ConfirmDialogConfirm
} from '@/components/ui/confirm-dialog'

function DeleteUserDialog() {
  return (
    <ConfirmDialog onConfirm={handleDelete}>
      <ConfirmDialogTrigger asChild>
        <Button variant='destructive'>Delete User</Button>
      </ConfirmDialogTrigger>
      <ConfirmDialogHeader>
        <ConfirmDialogTitle>Delete User</ConfirmDialogTitle>
        <ConfirmDialogDescription>
          Are you sure you want to delete this user? This action cannot be undone.
        </ConfirmDialogDescription>
      </ConfirmDialogHeader>
      <ConfirmDialogFooter>
        <ConfirmDialogCancel>Cancel</ConfirmDialogCancel>
        <ConfirmDialogConfirm destructive>Delete</ConfirmDialogConfirm>
      </ConfirmDialogFooter>
    </ConfirmDialog>
  )
}
```

Best Practices
When working with components in this directory, keep these guidelines in mind:

Focus: Keep each component focused on a single task.

Documentation: Use JSDoc comments to document component properties and behavior.

Accessibility: Always make sure components are accessible for all users.

Reusability: Design components to be versatile and reusable across different parts of the application.

Testing: Write tests to ensure your components work as expected.

Contributing
To add a new component to this directory:

Follow our existing naming conventions.

Use JSDoc comments to document the component's API.

Write a test file for the component.

If needed, update this README to reflect the changes.
