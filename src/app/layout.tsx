import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import './globals.css'
config.autoAddCss = false


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Krzysztof Kowalczyk',
  description: 'Krzysztof Kowalczyk - Software Engineer, problem solver',
}

interface Props {
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
