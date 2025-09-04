/* eslint-disable react-refresh/only-export-components */
import * as React from 'react'
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
  type ControllerProps,
  type FieldPath,
  type FieldValues
} from 'react-hook-form'
import * as LabelPrimitive from '@radix-ui/react-label'
import { Slot } from '@radix-ui/react-slot'
import { NumericFormat } from 'react-number-format'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const Form = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => (
  <FormFieldContext.Provider value={{ name: props.name }}>
    <Controller {...props} />
  </FormFieldContext.Provider>
)

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState } = useFormContext()
  const formState = useFormState({ name: fieldContext.name })
  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>')
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue)

function FormItem({ className, ...props }: React.ComponentProps<'div'>) {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div data-slot='form-item' className={cn('grid gap-2', className)} {...props} />
    </FormItemContext.Provider>
  )
}

function FormLabel({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>) {
  const { error, formItemId } = useFormField()

  return (
    <Label
      data-slot='form-label'
      data-error={!!error}
      className={cn('data-[error=true]:text-destructive', className)}
      htmlFor={formItemId}
      {...props}
    />
  )
}

function FormControl({ ...props }: React.ComponentProps<typeof Slot>) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      data-slot='form-control'
      id={formItemId}
      aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
      aria-invalid={!!error}
      {...props}
    />
  )
}

function FormDescription({ className, ...props }: React.ComponentProps<'p'>) {
  const { formDescriptionId } = useFormField()

  return (
    <p
      data-slot='form-description'
      id={formDescriptionId}
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

function FormMessage({ className, ...props }: React.ComponentProps<'p'>) {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message ?? '') : props.children

  if (!body) {
    return null
  }

  return (
    <p data-slot='form-message' id={formMessageId} className={cn('text-destructive text-sm', className)} {...props}>
      {body}
    </p>
  )
}

// Custom layout
function FieldItemH({
  label,
  children,
  description
}: {
  label: React.ReactNode
  children: React.ReactNode
  description: string
}) {
  return (
    <FormItem className='grid-cols-[minmax(0,120px)_1fr] items-center gap-4'>
      <FormLabel className=''>{label}</FormLabel>
      <div className='flex min-h-9 flex-col justify-center gap-2'>
        <FormControl>{children}</FormControl>
        {description && <FormDescription>{description}</FormDescription>}
        <FormMessage />
      </div>
    </FormItem>
  )
}

// Custom layout
function FieldItemV({
  label,
  children,
  className,
  description
}: {
  label: React.ReactNode
  children: React.ReactNode
  className?: string
  description?: React.ReactNode
}) {
  return (
    <FormItem className={cn('relative flex flex-col', className)}>
      <FormLabel>{label}</FormLabel>
      <FormControl>{children}</FormControl>
      {description && <FormDescription>{description}</FormDescription>}
      <FormMessage />
    </FormItem>
  )
}

// Simplified FormField for common input cases
interface FormFieldSimplifiedProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
  control: ControllerProps<TFieldValues, TName>['control']
  name: TName
  label?: string
  placeholder?: string
  description?: React.ReactNode
  className?: string
  autoComplete?: React.InputHTMLAttributes<HTMLInputElement>['autoComplete']
  type?: string
  component?: React.ComponentType<any>
  componentProps?: Record<string, any>
}

const FormFieldSimplified = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  control,
  name,
  label,
  placeholder,
  description,
  autoComplete,
  className,
  type,
  component: Component = Input,
  componentProps = {}
}: FormFieldSimplifiedProps<TFieldValues, TName>) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FieldItemV
        label={label || name.toString().charAt(0).toUpperCase() + name.toString().slice(1)}
        description={description}
        className={className}
      >
        {type === 'number' ? (
          <NumericFormat
            customInput={Input}
            thousandSeparator
            {...field}
            onChange={undefined}
            className={className}
            placeholder={placeholder}
            onValueChange={(values) => field.onChange(values.floatValue)}
            {...componentProps}
          />
        ) : (
          <Component {...field} autoComplete={autoComplete} placeholder={placeholder} type={type} {...componentProps} />
        )}
      </FieldItemV>
    )}
  />
)

// Simplified FormField for common input cases
interface FormFieldAddonProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
  control: ControllerProps<TFieldValues, TName>['control']
  name: TName
  label?: string
  placeholder?: string
  addon: string
  className?: string
  type?: string
  onChange?: (value: number) => void
  component?: React.ComponentType<any>
  componentProps?: Record<string, any>
}

const FormFieldAddon = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  control,
  name,
  label,
  placeholder,
  addon,
  className,
  onChange,
  componentProps = {}
}: FormFieldAddonProps<TFieldValues, TName>) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <div className='relative'>
          <Label className='text-muted-foreground pointer-events-none absolute top-1/2 left-3 -translate-y-1/2'>{label}</Label>
          <FormControl>
            <NumericFormat
              customInput={Input}
              thousandSeparator
              {...field}
              onChange={(e) => {
                const val = e.target.value
                onChange?.(val ? parseFloat(e.target.value.replace(/,/g, '')) : 0)
              }}
              className={cn('h-10 text-right font-bold', className)}
              style={{ paddingRight: (addon.length || 0) * 12 + 16 }}
              placeholder={placeholder}
              onValueChange={(values) => {
                field.onChange(values.floatValue)
              }}
              {...componentProps}
            />
          </FormControl>
          <div className='text-muted-foreground pointer-events-none absolute top-1/2 right-3 -translate-y-1/2'>{addon}</div>
        </div>
        <FormMessage />
      </FormItem>
    )}
  />
)

export {
  FieldItemH,
  FieldItemV,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormFieldAddon,
  FormFieldSimplified,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField
}
