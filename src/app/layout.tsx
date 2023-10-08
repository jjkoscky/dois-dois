import './globals.css'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

const jatbrains_mono = JetBrains_Mono ({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',

});

export const metadata: Metadata = {
  title: 'Jefferson Koscky Jr',
  description: 'JJ - Portfólio Web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={jatbrains_mono.className}>{children}</body>
    </html>
  )
}
