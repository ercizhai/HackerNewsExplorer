'use client'

import { usePathname } from 'next/navigation'
import { Listbox, ListboxSection, ListboxItem } from '@nextui-org/listbox'
import { Providers } from './providers'
import '@/styles/tailwind.css'
import '@/styles/globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <html lang="en" className="light">
      <body className="flex">
        <aside className="w-48 h-full p-2 bg-default-100">
          <h1 className="py-4 text-primary text-xl text-center font-bold">
            HackerNews
            <br />
            Explorer
          </h1>
          <Listbox color="primary" variant="flat">
            <ListboxSection title="Trend" showDivider>
              <ListboxItem key="new" href="/">
                <span className={pathname === '/' ? 'text-primary' : ''}>New</span>
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
        </aside>
        <main className="flex-1">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  )
}
