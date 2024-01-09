'use client'

import { usePathname } from 'next/navigation'
import { Listbox, ListboxSection, ListboxItem } from '@nextui-org/react'

export default function NavBar() {
  const pathname = usePathname()

  return (
    <Listbox color="primary" variant="flat">
      <ListboxSection title="Trend" showDivider>
        <ListboxItem key="new" href="/new">
          <span className={pathname === '/new' ? 'text-primary' : ''}>New</span>
        </ListboxItem>
        <ListboxItem key="top" href="/top">
          <span className={pathname === '/top' ? 'text-primary' : ''}>Top</span>
        </ListboxItem>
        <ListboxItem key="best" href="/best">
          <span className={pathname === '/best' ? 'text-primary' : ''}>Best</span>
        </ListboxItem>
      </ListboxSection>
      <ListboxSection title="Type">
        <ListboxItem key="ask" href="/ask">
          <span className={pathname === '/ask' ? 'text-primary' : ''}>Ask</span>
        </ListboxItem>
        <ListboxItem key="job" href="/job">
          <span className={pathname === '/job' ? 'text-primary' : ''}>Job</span>
        </ListboxItem>
        <ListboxItem key="show" href="/show">
          <span className={pathname === '/show' ? 'text-primary' : ''}>Show</span>
        </ListboxItem>
      </ListboxSection>
    </Listbox>
  )
}
