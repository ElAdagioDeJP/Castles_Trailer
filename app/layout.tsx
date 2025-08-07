import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: "Castle's Trailer Repair Services | Leesburg, VA",
  description:
    "Expert trailer repair services for RVs, boat trailers, cargo, horse, utility, and dump trailers in Leesburg, VA. Bilingual service (English & Spanish), weekend appointments, certified technicians.",
  keywords: [
    'trailer repair',
    'Leesburg VA',
    'RV trailer repair',
    'boat trailer repair',
    'cargo trailer repair',
    'horse trailer repair',
    'utility trailer repair',
    'dump trailer repair',
    'bilingual service',
    'weekend appointments',
  ],
  openGraph: {
    title: "Castle's Trailer Repair Services | Leesburg, VA",
    description:
      "Expert trailer repair services for RVs, boat trailers, cargo, horse, utility, and dump trailers in Leesburg, VA. Bilingual service (English & Spanish), weekend appointments, certified technicians.",
    siteName: "Castle's Trailer Repair Services",
    type: 'website',
    images: [
      {
        url: '../public/images/castle-logo.png',
        width: 800,
        height: 600,
        alt: "Castle's Trailer Repair Services Logo",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Castle's Trailer Repair Services | Leesburg, VA",
    description:
      "Expert trailer repair services for RVs, boat trailers, cargo, horse, utility, and dump trailers in Leesburg, VA. Bilingual service (English & Spanish), weekend appointments, certified technicians.",
    images: ['../public/images/castle-logo.png'],
  },
  icons: {
    icon: '../public/images/castle-logo.png',
    apple: '../public/images/castle-logo.png',
    shortcut: '../public/images/castle-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
