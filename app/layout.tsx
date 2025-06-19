import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Anyaibe Ebuka - Full Stack Developer",
  description:
    "Full Stack Developer, WordPress Expert & Blogger. Mechanical Engineering Graduate specializing in web development.",
  keywords: "Full Stack Developer, WordPress, React, Node.js, Python, TypeScript, PHP, MySQL, Anyaibe Ebuka",
  authors: [{ name: "Anyaibe Ebuka" }],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Anyaibe Ebuka - Full Stack Developer",
    description:
      "Full Stack Developer, WordPress Expert & Blogger. Mechanical Engineering Graduate specializing in web development.",
    type: "website",
    url: "https://anyaibeebuka.vercel.app",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anyaibe Ebuka - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anyaibe Ebuka - Full Stack Developer",
    description: "Full Stack Developer, WordPress Expert & Blogger",
    images: ["/og-image.png"],
    creator: "@Stephen22656799",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900 text-white antialiased`}>{children}</body>
    </html>
  )
}
