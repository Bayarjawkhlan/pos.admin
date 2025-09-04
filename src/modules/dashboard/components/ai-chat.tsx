import { useEffect, useRef, useState } from 'react'
import { i18n } from '@lingui/core'
import { Sparkles } from 'lucide-react'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { AI_CHAT_INSTANT_SUGGESTED_MESSAGES, CHATS } from '../constants'

export const AiChat = () => {
  const [value, setValue] = useState('')
  const scrollRootRef = useRef<HTMLDivElement | null>(null)

  const chats = CHATS

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSendMessage(value)
    }
  }

  const handleSendMessage = async (message: string) => {
    toast.success(message)
  }

  useEffect(() => {
    const root = scrollRootRef.current
    if (!root) return
    const viewport = root.querySelector('[data-slot=scroll-area-viewport]') as HTMLDivElement | null
    if (!viewport) return

    const scrollToBottom = () => {
      viewport.scrollTop = viewport.scrollHeight
    }

    scrollToBottom()

    const observer = new MutationObserver(() => scrollToBottom())
    observer.observe(viewport, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [chats?.length])

  return (
    <div className='bg-card top-24 flex h-96 flex-col gap-y-2 rounded-xl border px-5 py-4 shadow-sm xl:sticky xl:h-[calc(100vh-15.5rem)]'>
      <div className='flex h-10 items-center gap-2'>
        <div className='bg-secondary-background flex size-10 items-center justify-center rounded-lg border'>
          <Sparkles className='size-5' />
        </div>
        <p className='font-medium'>{i18n.t('AI туслах')}</p>
      </div>
      <div className='relative min-h-0 flex-1' ref={scrollRootRef}>
        <div className='absolute top-0 left-0 z-10 h-14 w-full bg-gradient-to-t from-transparent to-white' />
        <ScrollArea className='h-full w-full pr-1'>
          <div className='flex flex-col gap-y-3 pt-10 pb-2'>
            <div className='h-80' />
            {chats?.length === 0 &&
              AI_CHAT_INSTANT_SUGGESTED_MESSAGES.map((message) => (
                <button
                  key={message}
                  onClick={() => handleSendMessage(message)}
                  className='w-fit max-w-4/5 rounded-lg border px-3.5 py-2'
                >
                  <p className='text-muted-foreground text-left text-xs'>{message}</p>
                </button>
              ))}
            {chats?.map((chat) => (
              <div
                key={chat.id}
                className={cn(
                  'w-fit max-w-4/5 rounded-lg px-3.5 py-2',
                  chat.role === 'ai' ? 'bg-muted' : 'bg-primary ml-auto text-white'
                )}
              >
                <p className='text-left text-xs'>{chat.message}</p>
              </div>
            ))}
            {/* TODO: change to true when backend is ready */}
            {/* <Skeleton className='bg-primary ml-auto h-8 w-2/3' /> */}
          </div>
        </ScrollArea>
      </div>
      <div
        className={cn(
          'animate-gradient relative h-9 rounded-lg p-[1px]',
          'bg-[linear-gradient(90deg,#E7E7EE_0%,#67AC98_12.5%,#019678_25%,#8E01CA_37.5%,#E8F1F2_50%,#019678_62.5%,#DBE8E1_75%,#FE0002_87.5%,#8E01CA_100%)]'
        )}
      >
        <div className='relative h-full rounded-lg bg-white'>
          <div className='absolute top-1/2 left-2 size-5 -translate-y-1/2'>
            <img src='/images/ai-chat-star-icon.svg' alt='sparkles' className='size-full' />
          </div>

          <Input
            value={value}
            onKeyDown={handleKeyDown}
            placeholder={i18n.t('Асуултаа энд бичих')}
            onChange={(event) => setValue(event.target.value)}
            // TODO: change to true when backend is ready
            disabled={false}
            className='text-muted-foreground placeholder:text-muted-foreground/50 h-full rounded-lg bg-transparent pl-9 focus-visible:border-0 focus-visible:ring-0 focus-visible:outline-0'
          />
        </div>
      </div>
    </div>
  )
}
