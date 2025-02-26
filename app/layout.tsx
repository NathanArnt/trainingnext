import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ui/theme-provider'
import { SessionProvider } from 'next-auth/react'
import NavbarApp from '@/components/Navbar'
import { StoreProvider } from '@/lib/StoreProvider'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'NextApp',
  description: 'Generated by create next app'
}


export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className='scroll-smooth antialiased'
      suppressHydrationWarning
    >
      <body>
        <StoreProvider>
          <ThemeProvider
            enableSystem
            attribute='class'
            defaultTheme='system'
            disableTransitionOnChange
            >
            <SessionProvider>
              <main className='w-screen height-screen'>
                <NavbarApp/>
                {children}
                <Footer/>
              </main>
            </SessionProvider>
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  )
}