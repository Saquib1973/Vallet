'use client'
import { Divider } from '@nextui-org/react'
import { generateMnemonic } from 'bip39'
import Link from 'next/link'
import { useContext, useState } from 'react'
import FadeInWrapper from '../components/FadeInWrapper'
import { MnemonicContext } from '../providers/MnemonicContext'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react'

const page = () => {
  // @ts-ignore
  const { mnemonic, setMnemonic } = useContext(MnemonicContext)
  const [mnemonictxt, setMnemonictxt] = useState('')
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const generate = () => {
    const mn = generateMnemonic()
    setMnemonictxt(mn)
    localStorage.setItem('velvet-mnemonic', mn)
    setMnemonic(mn)
  }

  return (
    <FadeInWrapper>
      {mnemonic && (
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="max-w-xl mx-auto  rounded-md p-4  bg-neutral-100 dark:bg-neutral-900 shadow-md">
            <div className="blur-sm transition-all  hover:blur-0  grid grid-cols-4 gap-2 ">
              {mnemonic?.split(' ')?.map((item: any, i: number) => {
                if (item.length)
                  return (
                    <Button key={i + 'key'} className="rounded-sm">
                      {item}
                    </Button>
                  )
                return null
              })}
            </div>
          </div>
          <Button onPress={onOpen} variant="bordered" color="danger">
            Delete
          </Button>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <div>
                  <ModalHeader className="flex flex-col gap-1">
                    Delete Wallet
                  </ModalHeader>
                  <ModalBody>Delete the selected wallet</ModalBody>
                  <ModalFooter>
                    <Button color="secondary" variant="light" onPress={onClose}>
                      Cancel
                    </Button>
                    <Button
                      color="danger"
                      variant="flat"
                      onClick={() => {
                        setMnemonictxt('')
                        setMnemonic('')
                        localStorage.removeItem('velvet-mnemonic')
                      }}
                      onPress={onClose}
                    >
                      Delete
                    </Button>
                  </ModalFooter>
                </div>
              )}
            </ModalContent>
          </Modal>
        </div>
      )}

      <div className="mt-4 flex flex-col gap-2 items-center justify-center">
        {mnemonic === '' && (
          <p className="text-neutral-700 dark:text-neutral-500">
            We could not find anything. Generate a new mnemonic
          </p>
        )}
        {mnemonic === '' && (
          <Button
            color="success"
            className="mt-2 text-white"
            onClick={generate}
          >
            Generate
          </Button>
        )}
      </div>
    </FadeInWrapper>
  )
}

export default page
