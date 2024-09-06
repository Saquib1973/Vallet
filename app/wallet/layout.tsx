'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname() // Get the current path

  return (
    <div className="flex max-md:flex-col">
      <div className="md:w-[200px] sticky top-[55px] bg-white max-md:p-2 z-30 md:top-[108px] dark:bg-black  max-md:ml-auto flex md:flex-col gap-2 max-md:w-full max-md:justify-end  md:mr-4 max-h-[170px] md:mt-10 border-neutral-400 py-4 dark:border-neutral-700 md:border-r-1 max-md:border-b max-md:border-neutral-200 max-md:dark:border-neutral-900">
        <Link
          href={'/wallet'}
          className={`
            ${
              pathname === '/wallet' ? 'bg-purple-500  text-white' : ''
            } p-2 max-md:rounded-md`}
        >
          Mnemonic
        </Link>
        <Link
          href={'/wallet/ethereum'}
          className={`
${pathname === '/wallet/ethereum' ? 'bg-purple-500 text-white' : ''}
            p-2 max-md:rounded-md`}
        >
          Ethereum
        </Link>
        <Link
          href={'/wallet/solana'}
          className={`
${pathname === '/wallet/solana' ? ' bg-purple-500 text-white' : ''} p-2 max-md:rounded-md`}
        >
          Solana
        </Link>
      </div>

      <div className="w-full">{children}</div>
    </div>
  )
}

export default Layout
