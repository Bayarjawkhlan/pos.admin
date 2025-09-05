import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { useProductsStore } from '../store'

export const ProductFormModal = () => {
  const { data, isEditing, onClose } = useProductsStore()

  const isOpen = !!data && !isEditing

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle> {data?.name} </SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
