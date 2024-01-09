'use client'

import { useState, useEffect } from 'react'
import { Button } from '@nextui-org/react'

export default function TopBar() {
  const [colorMode, setColorMode] = useState<'light' | 'dark'>('light')
  const toggleColorMode = () => (colorMode === 'light' ? setColorMode('dark') : setColorMode('light'))
  useEffect(() => {
    document.documentElement.className = colorMode
  }, [colorMode])

  return (
    <div className="h-12 p-1 bg-default-100 flex flex-row-reverse">
      <Button variant="light" onClick={toggleColorMode}>
        {colorMode === 'light' ? 'Dark' : 'Light'} Mode
      </Button>
    </div>
  )
}
