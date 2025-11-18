import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard de Métricas',
  description: 'Sistema de métricas Facebook Ads',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
