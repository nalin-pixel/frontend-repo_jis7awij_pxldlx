export default function Blogs() {
  const posts = [
    { title: 'Inside the Chute: What Riders See', excerpt: 'A rider’s-eye view moments before the gate opens...', date: 'Oct 8, 2025' },
    { title: 'Top 5 Bulls to Watch This Season', excerpt: 'Power, spin, kick — meet the legends in the making...', date: 'Sep 21, 2025' },
    { title: 'Behind the Pyro: How We Build the Show', excerpt: 'From rigging to cues — a look at arena production...', date: 'Aug 30, 2025' },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold">Blogs</h1>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="bg-white/5 border border-red-600/20 rounded-xl p-6">
              <p className="text-xs text-white/60">{p.date}</p>
              <h3 className="mt-2 text-xl font-semibold text-red-400">{p.title}</h3>
              <p className="mt-2 text-white/80 text-sm">{p.excerpt}</p>
              <button className="mt-4 text-sm text-white/90 hover:text-red-400">Read more →</button>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
