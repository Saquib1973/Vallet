'use client'
import React, { useContext, useEffect } from 'react'
import FadeInWrapper from '../components/FadeInWrapper'
import { MnemonicContext } from '../providers/MnemonicContext'
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()
  const { mnemonic } = useContext(MnemonicContext)

  if (mnemonic === '') {
    router.push('/generate')
  }

  return <FadeInWrapper>Solana</FadeInWrapper>
}

export default Page
