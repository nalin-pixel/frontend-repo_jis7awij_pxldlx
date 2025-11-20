export default function Footer() {
  return (
    <footer className="mt-20 border-t border-red-600/30 bg-black/80 text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-semibold mb-3">Pro Bull Riding</h4>
            <p className="text-sm">Elite events, fearless riders, and the heart-pounding world of professional bull riding.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-red-400">About</a></li>
              <li><a href="/services" className="hover:text-red-400">Services</a></li>
              <li><a href="/events" className="hover:text-red-400">Events</a></li>
              <li><a href="/blogs" className="hover:text-red-400">Blogs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <p className="text-sm">Email: contact@probullriding.com</p>
            <p className="text-sm">Phone: +1 (555) 123-4567</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Follow</h4>
            <div className="flex gap-3 text-sm">
              <a href="#" className="hover:text-red-400">Instagram</a>
              <a href="#" className="hover:text-red-400">Twitter/X</a>
              <a href="#" className="hover:text-red-400">YouTube</a>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-white/60">© {new Date().getFullYear()} Pro Bull Riding. All rights reserved.</p>
      </div>
    </footer>
  )
}
