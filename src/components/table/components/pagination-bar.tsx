import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink } from '@/components/ui/pagination'

type PaginationBarProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const PaginationBar: React.FC<PaginationBarProps> = ({ currentPage, totalPages, onPageChange }) => {
  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return
    onPageChange(page)
  }

  const createPages = React.useMemo(() => {
    if (totalPages <= 0) return [] as Array<number | 'ellipsis'>

    const pages: Array<number | 'ellipsis'> = []

    const firstPage = 1
    const lastPage = totalPages
    const leftSibling = Math.max(firstPage + 1, currentPage - 1)
    const rightSibling = Math.min(lastPage - 1, currentPage + 1)

    // Always include first page
    pages.push(firstPage)

    if (leftSibling > firstPage + 1) {
      pages.push('ellipsis')
    }

    for (let p = leftSibling; p <= rightSibling; p += 1) {
      if (p > firstPage && p < lastPage) pages.push(p)
    }

    if (rightSibling < lastPage - 1) {
      pages.push('ellipsis')
    }

    if (lastPage > firstPage) {
      pages.push(lastPage)
    }

    return pages
  }, [currentPage, totalPages])

  if (totalPages <= 1) return null

  return (
    <Pagination className='justify-center'>
      <PaginationContent>
        <PaginationItem>
          <Button
            variant='ghost'
            size='icon'
            className='bg-white'
            onClick={(e) => {
              e.preventDefault()
              goToPage(currentPage - 1)
            }}
          >
            <ChevronLeft />
          </Button>
        </PaginationItem>

        {createPages.map((item, idx) => {
          if (item === 'ellipsis') {
            return (
              <PaginationItem key={`ellipsis-${idx}`}>
                <PaginationEllipsis />
              </PaginationItem>
            )
          }

          const page = item as number
          return (
            <PaginationItem key={page}>
              <PaginationLink
                href='#'
                isActive={page === currentPage}
                className={cn(page !== currentPage && 'bg-transparent')}
                onClick={(e) => {
                  e.preventDefault()
                  goToPage(page)
                }}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          )
        })}

        <PaginationItem>
          <Button
            variant='ghost'
            size='icon'
            className='bg-white'
            onClick={(e) => {
              e.preventDefault()
              goToPage(currentPage + 1)
            }}
          >
            <ChevronRight />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export { PaginationBar }
