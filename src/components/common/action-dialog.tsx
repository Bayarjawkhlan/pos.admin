import { i18n } from '@lingui/core'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'

type ActionDialogProps = {
  onConfirm: () => void
  children: React.ReactNode
  title?: string
  description?: string
}

export const ActionDialog = ({ onConfirm, children, title, description }: ActionDialogProps) => (
  <AlertDialog>
    <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>{title || i18n.t('Анхаар')}</AlertDialogTitle>
        <AlertDialogDescription>
          {description || i18n.t('Та энэ үйлдлийг хийхдээ итгэлтэй байна уу? Энэ үйлдэл буцаагдахгүй.')}
        </AlertDialogDescription>
      </AlertDialogHeader>

      <AlertDialogFooter>
        <AlertDialogCancel>{i18n.t('Үгүй')}</AlertDialogCancel>
        <AlertDialogAction onClick={onConfirm}>{i18n.t('Тийм')}</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
)
