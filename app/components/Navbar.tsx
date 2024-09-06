import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="flex gap-2 max-md:px-4 max-md:p-3 border-b-1 border-neutral-200 dark:border-neutral-900 z-40 sticky top-0 bg-white dark:bg-black justify-between md:py-4 py-2 ">
      <Link href={'/'} className="text-xl md:text-3xl">
        Velvet
      </Link>
      <div className="flex gap-4 items-center">
        <Link
          href={'/wallet'}
          className="text-base text-purple-500 underline underline-offset-4"
        >
          Wallet
        </Link>
        <ThemeSwitcher />
      </div>
    </div>
  )
}

export default Navbar
