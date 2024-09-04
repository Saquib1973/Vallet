import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="flex gap-2 justify-between max-md:px-1 md:py-4 py-2 ">
      <Link href={'/'} className="text-3xl">
        Velvet
      </Link>
      <ThemeSwitcher />
    </div>
  )
}

export default Navbar
