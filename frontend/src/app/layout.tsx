import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import classNames from 'classnames'
import { useLocale } from 'next-intl'
import { ApolloWrapper } from './ApolloWrapper'
import Footer from '@/components/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Llocs de Begur',
  description: "Descobreix llocs increhibles d'es teu poble.",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = useLocale()

  return (
    <html lang={locale}>
      <body className={classNames([inter.className, '[&>main]:min-h-screen'])}>
        <ApolloWrapper>{children}</ApolloWrapper>

        <Footer />
      </body>
    </html>
  )
}
