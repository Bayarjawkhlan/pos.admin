import { useState } from 'react'
import { ZodSchema, TypeOf } from 'zod'
import { useForm, UseFormProps, UseFormReturn, SubmitErrorHandler, Path, DeepPartial } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ApolloError } from '@apollo/client'

// Define a type that matches the expected Zod3Type interface
type Zod3Compatible<T = any> = ZodSchema<T> & {
  _def: {
    typeName: string
  }
}

/**
 * Custom hook for form handling with standardized error handling
 *
 * @template TSchema - Zod schema type
 * @param schema - Zod schema for form validation
 * @param options - Additional options for useForm
 * @returns Form methods and submission handlers
 */
export const useAppForm = <
  TSchema extends Zod3Compatible<any>,
  TFieldValues extends TypeOf<TSchema> = TypeOf<TSchema>,
  TContext = any
>(
  schema: TSchema,
  options?: Omit<UseFormProps<TFieldValues, TContext>, 'resolver'> & {
    defaultValues?: DeepPartial<TFieldValues>
  }
) => {
  const [loading, setLoading] = useState(false)

  // Initialize form with Zod resolver
  const form = useForm<TFieldValues>({
    defaultValues: {} as DeepPartial<TFieldValues>, // Ensure default values are compatible with the schema
    ...options,
    resolver: zodResolver(schema)
  })

  /**
   * Handle form submission with standardized error handling
   *
   * @param onSubmit - Function to call on successful form submission
   * @param onError - Optional function to call on form validation error
   * @returns A function that handles form submission
   */
  const handleSubmit = (
    onSubmit: (values: TFieldValues, form: UseFormReturn<TFieldValues, TContext>) => Promise<void> | void,
    onError?: SubmitErrorHandler<TFieldValues>
  ) =>
    form.handleSubmit(async (values) => {
      try {
        setLoading(true)
        await onSubmit(values, form)
      } catch (error) {
        // Handle Apollo GraphQL errors
        if (error instanceof ApolloError) {
          error.graphQLErrors?.forEach((err) => {
            if (err.extensions?.attribute) {
              form.setError(err.extensions.attribute as Path<TFieldValues>, { message: err.message, type: 'manual' })
            }
          })
        }
        // Handle generic errors
        else if (error instanceof Error) {
          form.setError('root', { message: error.message || 'An unexpected error occurred' })
        }
      } finally {
        setLoading(false)
      }
    }, onError)

  return {
    form,
    loading,
    handleSubmit
  }
}
