'use client'

import { usePathname } from 'next/navigation'
import { Listbox, ListboxSection, ListboxItem } from '@nextui-org/react'

export default function NavBar() {
  const pathname = usePathname()
  const nav = [
    {
      title: 'Trend',
      showDivider: true,
      children: [
        {
          key: 'new',
          href: '/stories/new',
          text: 'New',
        },
        {
          key: 'top',
          href: '/stories/top',
          text: 'Top',
        },
        {
          key: 'best',
          href: '/stories/best',
          text: 'Best',
        },
      ],
    },
    {
      title: 'Type',
      children: [
        {
          key: 'ask',
          href: '/stories/ask',
          text: 'Ask',
        },
        {
          key: 'job',
          href: '/stories/job',
          text: 'Job',
        },
        {
          key: 'show',
          href: '/stories/show',
          text: 'Show',
        },
      ],
    },
  ]

  return (
    <Listbox color="primary" variant="flat" items={nav}>
      {nav.map(group => (
        <ListboxSection key={group.title} title={group.title} showDivider={group.showDivider} items={group.children}>
          {group.children.map(item => (
            <ListboxItem key={item.key} href={item.href} className={pathname === item.href ? 'text-primary' : ''}>
              {item.text}
            </ListboxItem>
          ))}
        </ListboxSection>
      ))}
    </Listbox>
  )
}
