import "./globals.css"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Christine Gueffier - Portfolio",
  description:
    "Portfolio de Christine Gueffier, Développeur web junior, certification OpenClassrooms",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="fr"
      className={
        montserrat.className + " antialiased scroll-smooth pt-20 scroll-pt-20"
      }
    >
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
