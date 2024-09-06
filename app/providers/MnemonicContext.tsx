'use client'
import { createContext, useEffect, useState, ReactNode } from 'react'

interface MnemonicContextType {
  mnemonic: string | null
  setMnemonic: (mnemonic: string | null) => void
}

export const MnemonicContext = createContext<MnemonicContextType>({
  mnemonic: null,
  setMnemonic: () => {},
})

export default function Context({ children }: { children: ReactNode }) {
  const [mnemonic, setMnemonic] = useState<string | null>(null)

  useEffect(() => {
    const mn = localStorage.getItem('velvet-mnemonic')
    if (mn) {
      setMnemonic(mn)
    }
  }, [])

  return (
    <MnemonicContext.Provider value={{ mnemonic, setMnemonic }}>
      {children}
    </MnemonicContext.Provider>
  )
}
