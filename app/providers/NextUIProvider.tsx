'use client'
import React from 'react'
import { ThemeProvider } from 'next-themes'
import { useEffect, useState } from 'react'
import { NextUIProvider } from '@nextui-org/react'

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) return <>{children}</>

  return (
    <NextUIProvider>
      <ThemeProvider attribute="class" defaultTheme='dark' themes={['light', 'dark']}>
        {children}
      </ThemeProvider>
    </NextUIProvider>
  )
}

export default Provider
