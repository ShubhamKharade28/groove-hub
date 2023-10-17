import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GrooveHub',
  description: 'Listen to your favourites',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
