import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export interface SimpleSelectProps {
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  options?: { value: string; label: string }[]
}
export function SimpleSelect({ value, onChange, options, placeholder }: SimpleSelectProps) {
  return (
    <Select value={value || ''} onValueChange={onChange}>
      <SelectTrigger className='w-full'>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options?.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
