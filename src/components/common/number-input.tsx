import { NumericFormat, NumericFormatProps } from 'react-number-format'
import { Input } from '@/components/ui/input'

type NumberInputProps = NumericFormatProps &
  React.ComponentProps<'input'> & {
    field: any
    type?: 'number' | 'string'
  }

export const NumberInput = ({ field, type, ...props }: NumberInputProps) => (
  <NumericFormat
    customInput={Input}
    {...field}
    onChange={undefined}
    onValueChange={(values) => field.onChange(type === 'number' ? values.floatValue : values.floatValue?.toString())}
    {...props}
  />
)
