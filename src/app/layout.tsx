// app/layout.tsx
import './globals.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { ReactNode } from 'react'

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>TEDxVJIT</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

      </head>
      <body className="relative min-h-screen flex flex-col bg-gray-900 text-white font-sans">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
