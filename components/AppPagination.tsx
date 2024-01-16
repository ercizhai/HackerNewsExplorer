'use client'

import { useRouter, usePathname } from 'next/navigation'
import { Pagination } from '@nextui-org/react'

export default function AppPagination({ page, total, label }: { page: number; total: number; label: string }) {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className="flex justify-center">
      <Pagination
        color="success"
        total={total}
        page={page}
        onChange={page => router.push(`/stories/${label}/${page}`)}
      />
    </div>
  )
}
