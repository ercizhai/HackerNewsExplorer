import AppNavbar from '@/components/AppNavbar'
import { Providers } from './providers'
import '@/styles/tailwind.css'
import '@/styles/globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light">
      <body className="bg-default-50">
        <AppNavbar />
        <div className="max-w-[1024px] mx-auto p-6">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  )
}
