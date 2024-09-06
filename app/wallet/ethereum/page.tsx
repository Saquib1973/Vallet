'use client'
import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { mnemonicToSeed } from 'bip39'
import { derivePath } from 'ed25519-hd-key'
import { Keypair } from '@solana/web3.js'
import nacl from 'tweetnacl'
import { Button } from '@nextui-org/react'
import { MnemonicContext } from './../../providers/MnemonicContext'
import FadeInWrapper from './../../components/FadeInWrapper'
import Building from '@/app/components/Building'

const Page = () => {
  const router = useRouter()
  const { mnemonic } = useContext(MnemonicContext)
  if (!mnemonic ) router.push('/wallet')

  return (
    <FadeInWrapper>
     <Building/>

    </FadeInWrapper>
  )
}

export default Page
