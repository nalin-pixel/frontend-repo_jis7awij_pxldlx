export default function Services() {
  const services = [
    { title: 'Live Event Production', desc: 'End-to-end arena production: lighting, sound, staging, pyrotechnics, and operations.' },
    { title: 'Rider & Stock Management', desc: 'Elite riders and top-ranked bulls with full logistics, safety, and compliance.' },
    { title: 'Sponsorship & Branding', desc: 'Custom brand integrations, on-site activations, and broadcast-ready content.' },
    { title: 'Community Exhibitions', desc: 'Family-friendly exhibitions, clinics, and meet-and-greets for local events.' },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold">Services</h1>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="p-6 rounded-xl bg-white/5 border border-red-600/20">
              <h3 className="text-xl font-semibold text-red-400">{s.title}</h3>
              <p className="mt-2 text-white/80">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
