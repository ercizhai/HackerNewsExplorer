import TopBar from '@/components/TopBar'
import SideBar from '@/components/SideBar'
import { Providers } from './providers'
import '@/styles/tailwind.css'
import '@/styles/globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light">
      <body className="flex">
        <SideBar />
        <div className="flex-1 flex flex-col">
          <TopBar />
          <main className="flex-1 p-2">
            <Providers>{children}</Providers>
          </main>
        </div>
      </body>
    </html>
  )
}
