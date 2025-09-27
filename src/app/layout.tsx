// app/layout.tsx
import './globals.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { ReactNode } from 'react'
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
})

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <title>TEDxVJIT</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className="relative min-h-screen flex flex-col bg-gray-900 text-white font-sans">
        <Navbar />
        <main className="flex-grow font-[var(--font-inter)]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
