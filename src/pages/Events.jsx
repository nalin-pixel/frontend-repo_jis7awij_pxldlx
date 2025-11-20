export default function Events() {
  const events = [
    { date: 'Jan 20, 2026', city: 'Fort Worth, TX', venue: 'Dickies Arena' },
    { date: 'Feb 10, 2026', city: 'Las Vegas, NV', venue: 'T-Mobile Arena' },
    { date: 'Mar 05, 2026', city: 'Denver, CO', venue: 'Ball Arena' },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold">Upcoming Events</h1>
        <div className="mt-8 divide-y divide-white/10 rounded-xl overflow-hidden border border-red-600/20">
          {events.map((e, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white/5 px-6 py-5">
              <div>
                <p className="text-red-400 font-semibold">{e.date}</p>
                <p className="text-lg">{e.city}</p>
              </div>
              <p className="text-white/80">{e.venue}</p>
              <button className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded font-semibold">Tickets</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
