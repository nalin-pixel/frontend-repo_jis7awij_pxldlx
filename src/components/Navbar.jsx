import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/events', label: 'Events' },
  { to: '/blogs', label: 'Blogs' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/60 bg-black/80 border-b border-red-600/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-red-700 to-red-500 grid place-content-center ring-2 ring-red-500/30">
              <span className="text-white font-black">PB</span>
            </div>
            <span className="text-white font-semibold tracking-wide group-hover:text-red-400 transition-colors">Pro Bull Riding</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `text-sm uppercase tracking-wide transition-colors ${isActive ? 'text-red-400' : 'text-white/80 hover:text-white'}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            aria-label="Toggle Menu"
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-red-600/30 bg-black/90">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `block px-3 py-2 rounded text-sm uppercase tracking-wide ${isActive ? 'text-red-400 bg-white/5' : 'text-white/80 hover:text-white hover:bg-white/5'}`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
