import './globals.css'
import { Inter, Roboto_Mono } from 'next/font/google'
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] })
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono'
});

export const metadata = {
  title: 'Book A Boat - IN',
  description: 'Explore the beauty of Kerala with Book A Boat - IN. Your gateway to luxury houseboat experiences in Alappuzha. Stay tuned for updates on our platform and be the first to embark on a journey of relaxation and adventure. Book your unique houseboat experience soon!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers attribute="class" defaultTheme="system" enableSystem>
          <main className={`min-h-screen bg-slate-50 ${robotoMono.variable} font-roboto-mono dark:bg-slate-900`}>
            <div className='max-w-screen-sm mx-auto'>
              {children}
            </div>
          </main>
        </Providers>
      </body>
    </html>
  )
}
