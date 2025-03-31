import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Na.IA',
  description: 'Na.IA - AI powered by Next.js',
  icons: {
    icon: '/NA.IA_ICON NEGRO.png',
  },
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
