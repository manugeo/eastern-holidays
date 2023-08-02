import Landing from "./_components/landing";
import { Crimson_Pro } from 'next/font/google';

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-crimson-pro'
})

export default function Page() {
  return (
    <main className={`flex min-h-screen ${crimsonPro.variable} font-crimson-pro`}>
      <div className="max-w-screen-sm h-full bg-slate-900 text-slate-50">
        <Landing />
      </div>
    </main>
  )
}
