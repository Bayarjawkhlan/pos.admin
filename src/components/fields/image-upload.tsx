import type React from 'react'
import { useState, useRef, useCallback } from 'react'
// import { useGalleryQuery } from '@/gql/image/gallery.generated'
import { X, Upload, Check, Images, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'

type GalleryImage = {
  id: string
  url: string
  fileName?: string | null
  fileSize?: number | null
}

type ImageUploadProps = {
  multiple?: boolean
  maxFiles?: number
  maxSize?: number // in MB
  accept?: string
  onImagesChange?: (files: File[], selectedGallery: GalleryImage[]) => void
  className?: string
  showGallery?: boolean
  initialSelected?: GalleryImage[] | GalleryImage | null
}

type PreviewImage = {
  file: File
  url: string
  id: string
}

export function ImageUpload({
  multiple = true,
  maxFiles = 5,
  maxSize = 5,
  accept = 'image/*',
  onImagesChange,
  className,
  initialSelected,
  showGallery = true
}: ImageUploadProps) {
  const [uploadedImages, setUploadedImages] = useState<PreviewImage[]>([])
  const [selectedGalleryImages, setSelectedGalleryImages] = useState<GalleryImage[]>(
    Array.isArray(initialSelected) ? initialSelected || [] : initialSelected ? [initialSelected] : []
  )
  const [tempSelectedGalleryImages, setTempSelectedGalleryImages] = useState<GalleryImage[]>([])
  const [isDragOver, setIsDragOver] = useState(false)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const totalSelected = uploadedImages.length + selectedGalleryImages.length
  const canSelectMore = totalSelected < maxFiles

  const handleImagesChange = useCallback(
    (updatedUploads: PreviewImage[], updatedGallery: GalleryImage[]) => {
      onImagesChange?.(
        updatedUploads.map((img) => img.file),
        updatedGallery
      )
    },
    [onImagesChange]
  )

  const processFiles = useCallback(
    (files: FileList) => {
      const newImages: PreviewImage[] = []
      const maxSizeBytes = maxSize * 1024 * 1024
      const validFiles = Array.from(files) //.filter((f) => f.size <= maxSizeBytes && f.type.startsWith('image/'))

      validFiles.forEach((file) => {
        if (file.size > maxSizeBytes) {
          alert(`File ${file.name} is too large. Maximum size is ${maxSizeBytes}MB.`)
          return
        }

        const reader = new FileReader()
        reader.onload = (e) => {
          newImages.push({ file, url: e.target?.result as string, id: crypto.randomUUID() })

          if (newImages.length === validFiles.length) {
            setUploadedImages((prev) => {
              const updated = multiple
                ? [...prev, ...newImages].slice(0, maxFiles - selectedGalleryImages.length)
                : newImages.slice(0, 1)
              handleImagesChange(updated, selectedGalleryImages)
              return updated
            })
          }
        }
        reader.readAsDataURL(file)
      })
    },
    [maxFiles, maxSize, multiple, handleImagesChange, selectedGalleryImages]
  )

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragOver(false)
      processFiles(e.dataTransfer.files)
    },
    [processFiles]
  )

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files
      if (files?.length) processFiles(files)
    },
    [processFiles]
  )

  const removeUploadedImage = useCallback(
    (id: string) => {
      setUploadedImages((prev) => {
        const updated = prev.filter((img) => img.id !== id)
        handleImagesChange(updated, selectedGalleryImages)
        return updated
      })
    },
    [handleImagesChange, selectedGalleryImages]
  )

  const removeGalleryImage = useCallback(
    (id: string, e: React.MouseEvent) => {
      e.stopPropagation()
      setSelectedGalleryImages((prev) => {
        const updated = prev.filter((img) => img.id !== id)
        handleImagesChange(uploadedImages, updated)
        return updated
      })
    },
    [handleImagesChange, uploadedImages]
  )

  const toggleGalleryImage = useCallback(
    (image: GalleryImage) => {
      setTempSelectedGalleryImages((prev) => {
        const isSelected = prev.some((img) => img.id === image.id)
        if (isSelected) return prev.filter((img) => img.id !== image.id)
        if (!multiple) return [image]
        if (prev.length < maxFiles - uploadedImages.length) return [...prev, image]
        return prev
      })
    },
    [multiple, maxFiles, uploadedImages.length]
  )

  const confirmGallerySelection = useCallback(() => {
    if (!multiple && tempSelectedGalleryImages.length > 0) {
      setUploadedImages([])
    }
    setSelectedGalleryImages(tempSelectedGalleryImages)
    handleImagesChange(multiple || !tempSelectedGalleryImages.length ? uploadedImages : [], tempSelectedGalleryImages)
    setIsGalleryOpen(false)
  }, [multiple, tempSelectedGalleryImages, uploadedImages, handleImagesChange])

  const clearAll = useCallback(() => {
    setUploadedImages([])
    setSelectedGalleryImages([])
    handleImagesChange([], [])
  }, [handleImagesChange])

  return (
    <div className={cn('w-full space-y-2', className)}>
      <div className='flex flex-col space-y-2'>
        <div className='flex items-center gap-2'>
          {!multiple && (uploadedImages.length > 0 || selectedGalleryImages.length > 0) ? (
            <button
              type='button'
              className='group hover:border-primary flex-1 cursor-pointer rounded-md border p-3 transition-colors'
              onClick={() => fileInputRef.current?.click()}
            >
              <div className='flex items-center gap-3'>
                <div className='relative'>
                  <div className='bg-muted h-16 w-16 overflow-hidden rounded-lg'>
                    <img
                      src={uploadedImages[0]?.url || selectedGalleryImages[0]?.url || '/placeholder.svg'}
                      alt={uploadedImages[0]?.file.name || selectedGalleryImages[0]?.fileName || 'Selected image'}
                      className='h-full w-full object-cover'
                    />
                  </div>
                  <div className='absolute inset-0 flex items-center justify-center rounded-lg bg-black/50 opacity-0 transition-opacity group-hover:opacity-100'>
                    <Upload className='h-5 w-5 text-white' />
                  </div>
                </div>
                <div className='flex-1'>
                  <p className='text-sm font-medium'>
                    {uploadedImages[0]?.file.name || selectedGalleryImages[0]?.fileName || 'Selected image'}
                  </p>
                  <p className='text-muted-foreground text-xs'>Click to replace image</p>
                  {uploadedImages[0] && (
                    <p className='text-muted-foreground text-xs'>{(uploadedImages[0].file.size / 1024 / 1024).toFixed(2)} MB</p>
                  )}
                  {selectedGalleryImages[0]?.fileSize && (
                    <p className='text-muted-foreground text-xs'>
                      {(selectedGalleryImages[0].fileSize / 1024 / 1024).toFixed(2)} MB
                    </p>
                  )}
                </div>
                <Button
                  variant='ghost'
                  size='icon'
                  className='h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100'
                  onClick={(e) => {
                    e.stopPropagation()
                    clearAll()
                  }}
                >
                  <X className='size-4' />
                </Button>
              </div>
            </button>
          ) : (
            <button
              className={cn(
                'flex-1 cursor-pointer rounded-md border border-dashed transition-colors',
                isDragOver ? 'border-primary bg-primary/5' : 'border-muted-foreground/25'
              )}
              onDrop={handleDrop}
              onDragOver={(e) => {
                e.preventDefault()
                setIsDragOver(true)
              }}
              onDragLeave={(e) => {
                e.preventDefault()
                setIsDragOver(false)
              }}
              onClick={() => fileInputRef.current?.click()}
            >
              <div className='flex items-center justify-center gap-3 p-3'>
                <Upload className='text-muted-foreground h-5 w-5' />
                <div>
                  <p className='text-sm font-medium'>Upload images</p>
                  <p className='text-muted-foreground text-xs'>
                    {multiple ? `Up to ${maxFiles - selectedGalleryImages.length} files` : 'Single file'} • Max {maxSize}MB
                  </p>
                </div>
              </div>
            </button>
          )}

          {showGallery && (
            <Button
              variant='outline'
              size='icon'
              className='aspect-square h-full'
              onClick={() => {
                setTempSelectedGalleryImages([...selectedGalleryImages])
                setIsGalleryOpen(true)
              }}
              title='Select from gallery'
            >
              <Images className='h-5 w-5' />
            </Button>
          )}
        </div>

        {multiple && (uploadedImages.length > 0 || selectedGalleryImages.length > 0) && (
          <div className='mt-2 grid grid-cols-6 gap-2'>
            {uploadedImages.map((image) => (
              <div key={image.id} className='group relative col-span-1'>
                <div className='bg-muted aspect-square overflow-hidden rounded-md'>
                  <img src={image.url} alt={image.file.name} className='h-full w-full object-cover' />
                </div>
                <Button
                  variant='destructive'
                  size='icon'
                  className='absolute -top-1 -right-1 h-5 w-5 rounded-full opacity-0 transition-opacity group-hover:opacity-100'
                  onClick={() => removeUploadedImage(image.id)}
                >
                  <X className='h-2 w-2' />
                </Button>
                <p className='text-muted-foreground mt-1 truncate text-xs'>{image.file.name}</p>
              </div>
            ))}

            {selectedGalleryImages.map((image) => (
              <div key={image.id} className='group relative col-span-1'>
                <div className='bg-muted aspect-square overflow-hidden rounded-md'>
                  <img src={image.url} alt={image.fileName || 'img'} className='h-full w-full object-cover' />
                </div>
                <Button
                  variant='destructive'
                  size='icon'
                  className='absolute -top-1 -right-1 h-5 w-5 rounded-full opacity-0 transition-opacity group-hover:opacity-100'
                  onClick={(e) => removeGalleryImage(image.id, e)}
                >
                  <X className='h-2 w-2' />
                </Button>
                <p className='text-muted-foreground mt-1 truncate text-xs'>{image.fileName}</p>
              </div>
            ))}

            {canSelectMore && (
              <button
                className='border-muted-foreground/25 bg-muted/50 hover:bg-muted col-span-1 flex aspect-square cursor-pointer items-center justify-center rounded-md border border-dashed transition-colors'
                onClick={() => fileInputRef.current?.click()}
              >
                <Plus className='text-muted-foreground h-5 w-5' />
              </button>
            )}
          </div>
        )}
      </div>

      <Input ref={fileInputRef} type='file' accept={accept} multiple={multiple} onChange={handleFileSelect} className='hidden' />

      {multiple && totalSelected > 0 && (
        <div className='text-muted-foreground flex items-center justify-between text-xs'>
          <div className='flex items-center gap-2'>
            <span>
              {totalSelected} {totalSelected === 1 ? 'image' : 'images'} selected
            </span>
            <div className='flex gap-1'>
              {uploadedImages.length > 0 && (
                <Badge variant='secondary' className='px-1 py-0 text-xs'>
                  {uploadedImages.length} uploaded
                </Badge>
              )}
              {selectedGalleryImages.length > 0 && (
                <Badge variant='outline' className='px-1 py-0 text-xs'>
                  {selectedGalleryImages.length} from gallery
                </Badge>
              )}
            </div>
          </div>
          <Button variant='ghost' size='sm' className='h-6 text-xs' onClick={clearAll}>
            Clear all
          </Button>
        </div>
      )}

      <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
        <DialogContent className='sm:max-w-2xl'>
          <DialogHeader>
            <DialogTitle>Select from Gallery</DialogTitle>
          </DialogHeader>

          <GalleryImageItem
            maxFiles={maxFiles}
            uploadedImages={uploadedImages}
            toggleGalleryImage={toggleGalleryImage}
            tempSelectedGalleryImages={tempSelectedGalleryImages}
          />

          <DialogFooter className='flex items-center justify-between'>
            <div className='text-muted-foreground text-sm'>{tempSelectedGalleryImages.length} selected</div>
            <div className='flex gap-2'>
              <Button
                variant='outline'
                onClick={() => {
                  setTempSelectedGalleryImages([...selectedGalleryImages])
                  setIsGalleryOpen(false)
                }}
              >
                Cancel
              </Button>
              <Button onClick={confirmGallerySelection}>Select Images</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

function GalleryImageItem({
  tempSelectedGalleryImages,
  toggleGalleryImage,
  maxFiles,
  uploadedImages,
  multiple = true
}: {
  tempSelectedGalleryImages: GalleryImage[]
  toggleGalleryImage: (image: GalleryImage) => void
  maxFiles: number
  uploadedImages: PreviewImage[]
  multiple?: boolean
}) {
  // TODO: Add gallery query
  // const { data } = useGalleryQuery()
  const data: any = {
    gallery: {
      edges: []
    }
  }

  return (
    <ScrollArea className='mt-2 h-[60vh]'>
      <div className='grid grid-cols-2 gap-2 p-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
        {/* TODO: Remove any after adding gallery query */}
        {data?.gallery?.edges.map(({ node: image }: any) => {
          const isSelected = tempSelectedGalleryImages.some((img) => img.id === image.id)
          const canSelect =
            tempSelectedGalleryImages.length < maxFiles - uploadedImages.length ||
            isSelected ||
            (!multiple && tempSelectedGalleryImages.length <= 1)

          return (
            <button
              key={image.id}
              className={cn(
                'group relative cursor-pointer transition-all',
                !canSelect && !isSelected && 'cursor-not-allowed opacity-50'
              )}
              onClick={() => canSelect && toggleGalleryImage(image)}
            >
              <div
                className={cn(
                  'bg-muted aspect-square overflow-hidden rounded-lg border-2 transition-colors',
                  isSelected ? 'border-primary ring-primary/20 ring-2' : 'border-transparent'
                )}
              >
                <img
                  src={image.url || '/placeholder.svg'}
                  alt={image.fileName || image.id}
                  className='h-full w-full object-cover'
                />
              </div>
              {isSelected && (
                <div className='bg-primary absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full'>
                  <Check className='text-primary-foreground h-3 w-3' />
                </div>
              )}
              <p className='text-muted-foreground mt-1 truncate text-xs'>{image.fileName}</p>
              {image.fileSize && <p className='text-muted-foreground text-xs'>{(image.fileSize / 1024 / 1024).toFixed(1)}MB</p>}
            </button>
          )
        })}
      </div>
    </ScrollArea>
  )
}
