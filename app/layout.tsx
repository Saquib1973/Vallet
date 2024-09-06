import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import './globals.css'
import Provider from './providers/NextUIProvider'
import Context from './providers/MnemonicContext'
import Footer from './components/Footer'
import AddressContextProvider  from './providers/WalletContext'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vallet',
  description: 'Web3 Project made by @saquib',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className="max-w-5xl mx-auto">
          <Provider>
            <Context>
              <AddressContextProvider>
              <Navbar />
              {children}
              <Footer />
              </AddressContextProvider>
            </Context>
          </Provider>
        </div>
      </body>
    </html>
  )
}
