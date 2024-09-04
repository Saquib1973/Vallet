'use client'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { Switch } from '@nextui-org/switch'
import { SunIcon } from '../utils/SunIcon'
import { MoonIcon } from '../utils/MoonIcon'
const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const handleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <div>
      <Switch
        color="secondary"
        onClick={handleTheme}
        startContent={<MoonIcon />}
        endContent={<SunIcon />}
      ></Switch>
    </div>
  )
}

export default ThemeSwitcher
