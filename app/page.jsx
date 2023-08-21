import Landing from "./_components/landing";
import Services from "./_components/services";

export default function Page() {
  return (
    <div className="max-w-screen-sm mx-auto h-full bg-gradient-to-br from-slate-900 to-sky-950 text-slate-50">
      <Landing />
      <Services />
    </div>
  )
}
