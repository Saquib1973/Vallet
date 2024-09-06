'use client'
import { createContext, useEffect, useState, ReactNode } from 'react'
interface AddressContextType {
  addresses: Array<{
    solana: { publicKey: string; secretKey: string }
    ethereum: { publicKey: string; secretKey: string }
  }>
  setAddresses: (addresses: Array<{
    solana: { publicKey: string; secretKey: string }
    ethereum: { publicKey: string; secretKey: string }
  }>) => void
}

export const AddressContext = createContext<AddressContextType>({
  addresses: [],
  setAddresses: () => {},
})

export default function AddressContextProvider({ children }: { children: ReactNode }) {
  const [addresses, setAddresses] = useState<
    Array<{
      solana: { publicKey: string; secretKey: string }
      ethereum: { publicKey: string; secretKey: string }
    }>
  >([])

  useEffect(() => {
    const storedAddresses = localStorage.getItem('wallet-addresses')
    if (storedAddresses) {
      setAddresses(JSON.parse(storedAddresses))
    }
  }, [])

  return (
    <AddressContext.Provider value={{ addresses, setAddresses }}>
      {children}
    </AddressContext.Provider>
  )
}
