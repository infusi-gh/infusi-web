import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { Navbar, Footer } from "@/components/layout"

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Bold.otf",
      weight: "600 700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
})

export const metadata: Metadata = {
  title: "Infusi LLC",
  description: "Home of Infusi LLC",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} antialiased font-sans`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
