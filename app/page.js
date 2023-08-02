import Landing from "./_components/landing";
import { Crimson_Pro } from 'next/font/google';

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-crimson-pro'
})

export default function Page() {
  return (
    <main className={`flex min-h-screen bg-slate-950 ${crimsonPro.variable} font-crimson-pro`}>
      <div className="max-w-screen-sm mx-auto h-full bg-gradient-to-br from-slate-900 to-sky-950 text-slate-50">
        <Landing />
      </div>
    </main>
  )
}
