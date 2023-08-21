import ThemeProvider from '@/components/theme-provider'
import './globals.css'
import { Inter, Crimson_Pro } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-crimson-pro'
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className={`flex min-h-screen bg-slate-950 ${crimsonPro.variable} font-crimson-pro`}>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
