import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import Toaster from './_components/toaster'
import BackToTop from './_components/back-to-top'
import Header from './_components/header'
import Footer from './_components/footer'
import ContactForm from './_components/contact-form'
import HeroSections from './_components/contact-button'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        {/* <Toaster />
        <BackToTop /> */}
        <Header />
        {children}
        {/* <ContactForm />
        <Footer /> */}
      </body>
    </html>
  )
}
