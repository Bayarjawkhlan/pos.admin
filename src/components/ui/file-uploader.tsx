import { useRef } from 'react'
import { i18n } from '@lingui/core'
import { CloudUpload } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Input } from './input'

interface FileUploaderProps {
  onChange?: (file: File | null) => void
  value: File | null
  disabled?: boolean
  className?: string
}

export const FileUploader = ({ onChange, value, disabled, className }: FileUploaderProps) => {
  const ref = useRef<HTMLInputElement>(null)

  return (
    <button
      type='button'
      className={cn(
        'flex w-full flex-col items-center justify-center gap-y-3 rounded-lg border border-dashed px-5 py-4',
        className
      )}
      disabled={disabled}
      onClick={() => ref.current?.click()}
    >
      <div className='bg-secondary-background flex size-12 items-center justify-center rounded-full'>
        <CloudUpload className='text-primary size-7' />
      </div>
      <p>
        <span>{i18n.t('Дарах')}</span> {i18n.t('эсвэл чирч оруулна уу')}
      </p>
      {value && <div className='relative'>{value.name}</div>}
      <Input
        ref={ref}
        type='file'
        onChange={(e) => onChange?.(e.target?.files?.[0] || null)}
        disabled={disabled}
        className='invisible size-0 cursor-default'
      />
    </button>
  )
}
