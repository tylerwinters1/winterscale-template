import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Winterscale Media',
  description: 'Your quick and easy solution to web-design',
  generator: 'Winterscale Media',
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
