import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative">
        <div className="h-[70vh] w-full bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM2MjQzMTR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center">
          <div className="h-full w-full bg-gradient-to-t from-black via-black/70 to-black/20 grid place-content-center text-center px-6">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
              Ride the Edge
            </h1>
            <p className="mt-4 text-white/80 max-w-2xl mx-auto">
              Experience the adrenaline of professional bull riding — world-class riders, legendary bulls, and sold-out arenas.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Link to="/events" className="px-5 py-3 rounded bg-red-600 hover:bg-red-500 transition-colors font-semibold">View Events</Link>
              <Link to="/contact" className="px-5 py-3 rounded border border-white/20 hover:border-red-500 hover:text-red-400 transition-colors font-semibold">Book Us</Link>
            </div>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold">Why Choose Us</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Elite Riders',
              desc: 'Championship-level athletes with unmatched skill and grit.',
            },
            {
              title: 'Legendary Bulls',
              desc: 'Top-ranked stock known for power, agility, and heart.',
            },
            {
              title: 'Arena Production',
              desc: 'Full-show production with lights, music, and pyrotechnics.',
            },
          ].map((f) => (
            <div key={f.title} className="bg-white/5 border border-red-600/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-400">{f.title}</h3>
              <p className="mt-2 text-white/80 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
