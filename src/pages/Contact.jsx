import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // Demo only: fake delay
    await new Promise(r => setTimeout(r, 800))
    setStatus('Message sent! We will get back to you shortly.')
    e.currentTarget.reset()
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="mt-2 text-white/80">Have a venue, brand, or community event? Let’s talk.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input required name="name" placeholder="Name" className="bg-white/5 border border-white/10 rounded px-4 py-3 outline-none focus:ring-2 focus:ring-red-500" />
            <input required name="email" type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded px-4 py-3 outline-none focus:ring-2 focus:ring-red-500" />
          </div>
          <input name="subject" placeholder="Subject" className="bg-white/5 border border-white/10 rounded px-4 py-3 outline-none focus:ring-2 focus:ring-red-500 w-full" />
          <textarea required name="message" rows="5" placeholder="Message" className="bg-white/5 border border-white/10 rounded px-4 py-3 outline-none focus:ring-2 focus:ring-red-500 w-full" />
          <button className="px-5 py-3 rounded bg-red-600 hover:bg-red-500 transition-colors font-semibold">Send Message</button>
        </form>

        {status && <p className="mt-4 text-green-400">{status}</p>}
      </section>
    </main>
  )
}
