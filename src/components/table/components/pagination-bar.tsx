import React, { useMemo } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink } from '@/components/ui/pagination'
import { useTablesStore } from '../store'
import { TableKey } from '../types'

type PaginationBarProps = {
  tableKey: TableKey
}

const PaginationBar: React.FC<PaginationBarProps> = ({ tableKey }) => {
  const { tables, setPage } = useTablesStore()

  const { page: currentPage, totalPage } = useMemo(() => tables?.[tableKey as TableKey], [tableKey, tables])

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPage || page === currentPage) return
    setPage(tableKey, page)
  }

  const createPages = React.useMemo(() => {
    if (totalPage <= 0) return [] as Array<number | 'ellipsis'>

    const pages: Array<number | 'ellipsis'> = []

    const firstPage = 1
    const leftSibling = Math.max(firstPage + 1, currentPage - 1)
    const rightSibling = Math.min(totalPage - 1, currentPage + 1)

    pages.push(firstPage)

    if (leftSibling > firstPage + 1) {
      pages.push('ellipsis')
    }

    for (let p = leftSibling; p <= rightSibling; p += 1) {
      if (p > firstPage && p < totalPage) pages.push(p)
    }

    if (rightSibling < totalPage - 1) {
      pages.push('ellipsis')
    }

    if (totalPage > firstPage) {
      pages.push(totalPage)
    }

    return pages
  }, [currentPage, totalPage])

  if (totalPage <= 1) return null

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
