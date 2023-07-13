import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { MainContainer } from '../lib/styled'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Memory Game',
  description: 'Memory game for fun',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>Memory Game</h1>
        <MainContainer>
          {children}
        </MainContainer>
      </body>
    </html>
  )
}
