'use client';
import { createContext, useEffect, useState, ReactNode } from 'react';

// Step 1: Define a type for the context
interface MnemonicContextType {
  mnemonic: string;
  setMnemonic: (mnemonic: string) => void;
}

// Step 2: Create the context with the type
export const MnemonicContext = createContext<MnemonicContextType | undefined>(undefined);

export default function Context({ children }: { children: ReactNode }) {
  const [mnemonic, setMnemonic] = useState<string>('');

  useEffect(() => {
    const mn = localStorage.getItem('velvet-mnemonic');
    if (mn) {
      setMnemonic(mn);
    }
  }, []);

  return (
    <MnemonicContext.Provider value={{ mnemonic, setMnemonic }}>
      {children}
    </MnemonicContext.Provider>
  );
}
