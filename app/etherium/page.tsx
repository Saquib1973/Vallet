'use client'
import React, { useContext, useEffect, useState } from 'react'
import FadeInWrapper from '../components/FadeInWrapper'
import { MnemonicContext } from '../providers/MnemonicContext'
import { useRouter } from 'next/navigation'
import { mnemonicToSeed } from 'bip39'
import { derivePath } from 'ed25519-hd-key'
import { Keypair } from '@solana/web3.js'
import nacl from 'tweetnacl'
import { Button } from '@nextui-org/react'

const Page = () => {
  const router = useRouter()
  const { mnemonic } = useContext(MnemonicContext)
  const [currentIdx, setCurrentIdx] = useState(0)
  const [publicKeys, setPublicKeys] = useState<string[]>([])

  const handleClick = async () => {
    try {
      const seed = await mnemonicToSeed(mnemonic)
      const path = `m/44'/501'/${currentIdx}'/0'`
      const derivedSeed = derivePath(path, seed.toString('hex')).key
      const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey
      const keypair = Keypair.fromSecretKey(secret)

      // Updating state correctly with the new publicKey
      setPublicKeys((prevKeys) => [...prevKeys, keypair.publicKey.toBase58()])
      setCurrentIdx((prevIdx) => prevIdx + 1)
    } catch (error) {
      console.error('Error generating wallet:', error)
    }
  }

  // Redirect if no mnemonic is available
  useEffect(() => {
    if (!mnemonic) {
      router.push('/generate')
    }
  }, [mnemonic, router])

  return (
    <FadeInWrapper>
      <div>
        <Button onClick={handleClick}>Add Solana Wallet</Button>
        <div>
          {publicKeys.map((key, idx) => (
            <div key={idx}>{key}</div>
          ))}
        </div>
      </div>
    </FadeInWrapper>
  )
}

export default Page
