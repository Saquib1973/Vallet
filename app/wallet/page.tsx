'use client'
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react'
import { generateMnemonic, mnemonicToSeed } from 'bip39'
import { useContext, useState } from 'react'
import FadeInWrapper from '../components/FadeInWrapper'
import { MnemonicContext } from '../providers/MnemonicContext'
import Loading from '../components/Loading'
import DownloadIcon from './../utils/DownloadIcon';
import { derivePath } from 'ed25519-hd-key'
import nacl from 'tweetnacl'
import { Keypair } from '@solana/web3.js'
import DeleteIcon from '../utils/DeleteIcon'
import bs58 from 'bs58'
import CopyIcon from '../utils/CopyIcon'
import { AddressContext } from '../providers/WalletContext'

const Page = () => {
  const { mnemonic, setMnemonic } = useContext(MnemonicContext)
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const { addresses, setAddresses } = useContext(AddressContext)
  const [loading, setLoading] = useState(false);
  const generate = () => {
    setLoading(true)
    setTimeout(() => {
      const mn = generateMnemonic()
      localStorage.setItem('velvet-mnemonic', mn)
      setMnemonic(mn)
      setLoading(false)
    }, 1000)
  }
  const deleteMnemonic = () => {
    setLoading(true);
    setTimeout(() => {
       setMnemonic(null)
       setAddresses([])
       localStorage.removeItem('velvet-mnemonic');
       localStorage.removeItem('wallet-addresses');

       setLoading(false)
     }, 1000)

  }
  const downloadMnemonic = () => {
    const element = document.createElement('a')
    if(typeof(mnemonic) !== 'string') return
    const file = new Blob([mnemonic], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = 'mnemonic.txt'
    document.body.appendChild(element) // Required for Firefox
    element.click()
    document.body.removeChild(element)
  }
  const [idx, setIdx] = useState(0)

const handleCreateWallet = async () => {
  if (!mnemonic) return
  setLoading(true)
  try {
    const seed = await mnemonicToSeed(mnemonic)
    const path = `m/44'/501'/${idx}'/0'`
    const derivedSeed = derivePath(path, seed.toString('hex')).key
    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey
    const keypair = Keypair.fromSecretKey(secret)

    setIdx(idx + 1)
    setAddresses(
      [...addresses, {
        solana: {
          publicKey: keypair.publicKey.toBase58(),
          secretKey: bs58.encode(secret),
        },
        ethereum: {
          publicKey: '',
          secretKey: '',
        }
      }]
    )
     localStorage.setItem('wallet-addresses', JSON.stringify(addresses))
  } catch (error) {
    console.error('Error generating wallet:', error)
  } finally {
    setLoading(false)
  }
  }
  const handleDeleteWallet = (index: number) => {
    const updatedAddresses = addresses.filter((_, i) => i !== index)
    setAddresses(updatedAddresses)
    localStorage.setItem('wallet-addresses', JSON.stringify(updatedAddresses))
  }

  return (
    <FadeInWrapper>
      {mnemonic ? (
        <p className="heading">Your Wallet</p>
      ) : (
        <p className="heading">Create a wallet</p>
      )}

      {loading && <Loading />}

      {/* Render only if mnemonic exists and is valid */}
      {!loading && mnemonic && mnemonic.split(' ').length > 0 && (
        <div className="flex flex-col mt-5 items-center justify-center gap-3">
          <div className="rounded-md p-4 max-md:mx-auto bg-neutral-100 dark:bg-neutral-900 shadow-md">
            <div className="blur-sm transition-all hover:blur-0 grid grid-cols-4 gap-2">
              {mnemonic.split(' ').map((item: string, i: number) => (
                <Button key={i + 'key'} className="rounded-sm text-lg">
                  {item}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex gap-2 justify-end">
            <Button onPress={onOpen} variant="ghost" color="danger">
              Delete <DeleteIcon />
            </Button>

            <Button variant="flat" color="secondary" onClick={downloadMnemonic}>
              Download <DownloadIcon />
            </Button>
          </div>

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
                      onClick={deleteMnemonic}
                      onPress={onClose}
                    >
                      Delete
                    </Button>
                  </ModalFooter>
                </div>
              )}
            </ModalContent>
          </Modal>

          <div className="mt-4 flex-col gap-2 border-t-1 w-full flex py-6 border-neutral-200 dark:border-neutral-900">
            <Button
              variant="faded"
              className="ml-auto"
              color="secondary"
              onClick={handleCreateWallet}
            >
              Create New Wallet
            </Button>

            <div className="grid sm:grid-cols-2 gap-2 max-md:px-4">
              {addresses?.map((address: any, i: number) => (
                <div
                  key={i}
                  className="bg-purple-400 flex flex-col gap-1 text-white  dark:bg-purple-800 p-2 rounded-md"
                >
                 <div className="flex justify-between gap-2">
                  <p className="text-xl mb-1">Account {i + 1}</p>

                    <button
                    onClick={()=>handleDeleteWallet(i)}
                    >
              <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="size-5 hover:text-red-500 transition-all"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
      />
    </svg>
             </button>


                 </div>

                  <p className="flex justify-between gap-2 text-sm">
                    <span>
                      {' '}
                      Solana : {address?.solana?.publicKey.substr(
                        0,
                        20
                      )}...{' '}
                    </span>
                    <CopyIcon />
                  </p>
                  <p className="flex justify-between gap-2 text-sm">
                    <span>
                      {' '}
                      Ethereum : {address?.solana?.publicKey.substr(
                        0,
                        20
                      )}...{' '}
                    </span>
                    <CopyIcon />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* When no wallet exists */}
      {!mnemonic && !loading && (
        <div className="mt-4 flex flex-col gap-2 items-center justify-center">
          <p className="text-neutral-700 dark:text-neutral-500">
            We could not find anything. Generate a new mnemonic
          </p>
          <Button
            color="secondary"
            className="mt-2 text-white"
            onClick={generate}
            disabled={loading}
          >
            Generate
          </Button>
        </div>
      )}
    </FadeInWrapper>
  )
}

export default Page
