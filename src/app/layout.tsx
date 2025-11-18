import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'METRI-GO Streaming',
  description: 'Seu tracker pessoal de filmes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  )
}
