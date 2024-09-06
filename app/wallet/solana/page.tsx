"use client"
import React, { useContext } from 'react'
import FadeInWrapper from './../../components/FadeInWrapper'
import { useRouter } from 'next/navigation'
import { MnemonicContext } from '@/app/providers/MnemonicContext'
import Building from '@/app/components/Building'

const page = () => {
  const router = useRouter();
  const { mnemonic } = useContext(MnemonicContext)

  if (!mnemonic ) router.push('/wallet')

  return <FadeInWrapper>
    <Building/>

  </FadeInWrapper>
}

export default page
