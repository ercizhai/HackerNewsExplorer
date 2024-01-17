import AppNavbar from '@/components/AppNavbar'
import { Providers } from './providers'
import '@/styles/tailwind.css'
import '@/styles/globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-default-100">
        <AppNavbar />
        <div>
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  )
}
