'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react'

export default function AppNavbar() {
  const nav = [
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
  ]
  const pathname = usePathname()
  const [colorMode, setColorMode] = useState<'light' | 'dark'>('light')
  const toggleColorMode = () => (colorMode === 'light' ? setColorMode('dark') : setColorMode('light'))
  useEffect(() => {
    document.documentElement.className = colorMode
  }, [colorMode])

  return (
    <Navbar className="w-full" shouldHideOnScroll>
      <NavbarBrand>
        <h1 className="text-success text-2xl font-bold">HackerNews Explorer</h1>
      </NavbarBrand>
      <NavbarContent justify="center">
        {nav.map(item => (
          <NavbarItem key={item.key}>
            <Link href={item.href} color={pathname === item.href ? 'success' : 'foreground'}>
              {item.text}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <Button color="success" onClick={toggleColorMode}>
          {colorMode === 'light' ? 'Dark' : 'Light'} Mode
        </Button>
      </NavbarContent>
    </Navbar>
  )
}
