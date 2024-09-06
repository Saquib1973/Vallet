'use client'
import { Divider } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import FadeInWrapper from './components/FadeInWrapper'
import img1 from './utils/wallet.webp'
import { Tabs, Tab, Card, CardBody } from '@nextui-org/react'

export default function Home() {
  return (
    <FadeInWrapper>
      <div className="flex px-2 max-md:flex-col-reverse  gap-1 py-5 ">
        <div className="flex flex-col md:max-w-[40%] max-md:mx-auto justify-center">
          <div>
            <span className="text-3xl font-bold">
              A <span className="text-purple-500">Crypto</span> Wallet
            </span>
            <br />
            Start exploring blockchain applications in seconds. Trusted by over
            100s of users.
          </div>
          <div className="mt-4">
            <div className="space-y-1">
              <h4 className="text-medium font-medium">
                Create a web3 wallets{' '}
                <span className="text-purple-500">@Velvet</span>
              </h4>
              <p className="text-small text-neutral-400">
                equips you with a vault, secure login, and more.
              </p>
            </div>
            <Divider className="my-4" />
            <div className="flex h-5 items-center space-x-4 text-small">
              <Link
                href={'/wallet'}
                className="hover:text-purple-500 transition-all"
              >
                Your Wallet
              </Link>
              <Divider orientation="vertical" />
              <Link
                href={'/help'}
                className="hover:text-purple-500 transition-all"
              >
                Need Help ?
              </Link>
            </div>
          </div>
        </div>
        <Image
          alt="web3 wallet"
          className="max-md:mx-auto md:ml-auto max-md:size-[80%] size-[60%] "
          src={img1}
        />
      </div>
      <div className="flex w-full mt-5 flex-col">
        <Tabs className="ml-auto">
          <Tab key="ethereum" title="Ethereum">
            <Card>
              <CardBody>
                <Ethereum />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="solana" title="Solana">
            <Card>
              <CardBody>
                <Solana />
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </FadeInWrapper>
  )
}

const Ethereum = () => (
  <section
    id="ethereum-intro"
    className="p-6 rounded-lg shadow-md bg-neutral-100 dark:bg-neutral-800"
  >
    <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
      What is <span className="text-purple-500">Ethereum</span> ?
    </h2>
    <p className="text-gray-700 dark:text-gray-400 mb-4">
      <strong className="font-semibold">
        <span className="text-purple-500">Ethereum</span>
      </strong>{' '}
      is a decentralized platform that enables developers to build and deploy
      smart contracts and decentralized applications (dApps). Unlike traditional
      applications that run on a centralized server, Ethereum operates on a
      distributed network of computers, offering enhanced security,
      transparency, and immutability.
    </p>

    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
      Key Features:
    </h3>
    <ul className="list-disc pl-6 mb-4 space-y-2">
      <li>
        <strong className="font-semibold">Smart Contracts:</strong>{' '}
        Self-executing contracts with the terms of the agreement directly
        written into code. They automatically enforce and execute the contract's
        terms without the need for intermediaries.
      </li>
      <li>
        <strong className="font-semibold">
          Decentralized Applications (dApps):
        </strong>{' '}
        Applications that run on the{' '}
        <span className="text-purple-500">Ethereum</span> blockchain, leveraging
        smart contracts to function without central authority. Examples include
        decentralized finance (DeFi) platforms, games, and marketplaces.
      </li>
      <li>
        <strong className="font-semibold">Ether (ETH):</strong> The native
        cryptocurrency of the <span className="text-purple-500">Ethereum</span>{' '}
        network. It is used to pay for transaction fees and computational
        services on the platform.
      </li>
    </ul>

    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
      Why <span className="text-purple-500">Ethereum</span> Matters:
    </h3>
    <p className="text-gray-700 dark:text-gray-400 mb-4">
      <span className="text-purple-500">Ethereum</span>’s flexibility and
      programmability allow developers to create innovative solutions that can
      disrupt traditional industries. From financial services to digital
      collectibles, Ethereum’s capabilities are transforming how we interact
      with technology and each other.
    </p>

    <p className="text-gray-700 dark:text-gray-400">
      Explore the potential of <span className="text-purple-500">Ethereum</span>{' '}
      and join a global community working towards a more decentralized and
      equitable future.
    </p>
  </section>
)

const Solana = () => (
  <section
    id="solana-intro"
    className="p-6 rounded-lg shadow-md bg-neutral-100 dark:bg-neutral-800"
  >
    <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
      What is <span className="text-purple-500">Solana</span> ?
    </h2>
    <p className="text-gray-700 dark:text-gray-400 mb-4">
      <strong className="font-semibold">
        <span className="text-purple-500">Solana</span>
      </strong>{' '}
      is a high-performance blockchain platform designed to support scalable and
      user-friendly decentralized applications (dApps). It is known for its fast
      transaction speeds and low fees, making it a popular choice for developers
      building applications in the blockchain space.
    </p>

    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
      Key Features:
    </h3>
    <ul className="list-disc pl-6 mb-4 space-y-2">
      <li>
        <strong className="font-semibold">High Throughput:</strong>{' '}
        <span className="text-purple-500">Solana</span> is designed to handle
        thousands of transactions per second, thanks to its unique consensus
        mechanism called Proof of History (PoH).
      </li>
      <li>
        <strong className="font-semibold">Low Transaction Costs:</strong> The
        platform offers very low transaction fees compared to other blockchain
        networks, making it cost-effective for users and developers alike.
      </li>
      <li>
        <strong className="font-semibold">Scalability:</strong>{' '}
        <span className="text-purple-500">Solana</span>’s architecture is built
        to scale with the increasing demand for blockchain applications,
        ensuring high performance and reliability.
      </li>
    </ul>

    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
      Why <span className="text-purple-500">Solana</span> Matters:
    </h3>
    <p className="text-gray-700 dark:text-gray-400 mb-4">
      <span className="text-purple-500">Solana</span>’s focus on speed and
      efficiency makes it an attractive platform for developers looking to build
      high-performance applications. Its scalability ensures that it can support
      a growing ecosystem of decentralized applications and services.
    </p>

    <p className="text-gray-700 dark:text-gray-400">
      Discover the potential of <span className="text-purple-500">Solana</span>{' '}
      and explore how it is paving the way for the next generation of blockchain
      technology.
    </p>
  </section>
)
