import { NavLink, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 bg-slate-950/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-gradient-to-br from-blue-500 to-emerald-500"/>
          <span className="font-semibold tracking-tight">Versa Sync Studios</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <NavLink to="/" end className={({isActive}) => `hover:text-white ${isActive ? 'text-white' : ''}`}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => `hover:text-white ${isActive ? 'text-white' : ''}`}>About</NavLink>
          <NavLink to="/services" className={({isActive}) => `hover:text-white ${isActive ? 'text-white' : ''}`}>Services</NavLink>
          <NavLink to="/portfolio" className={({isActive}) => `hover:text-white ${isActive ? 'text-white' : ''}`}>Portfolio</NavLink>
          <NavLink to="/contact" className={({isActive}) => `hover:text-white ${isActive ? 'text-white' : ''}`}>Contact</NavLink>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Link to="/contact" className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-400 text-white text-sm font-medium">Book a Call</Link>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/10 text-slate-200">
          <span className="sr-only">Menu</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10">
          <nav className="px-6 py-4 grid gap-4 text-slate-200">
            <NavLink onClick={() => setOpen(false)} to="/" end className="hover:text-white">Home</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/about" className="hover:text-white">About</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/services" className="hover:text-white">Services</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/portfolio" className="hover:text-white">Portfolio</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/contact" className="hover:text-white">Contact</NavLink>
            <Link onClick={() => setOpen(false)} to="/contact" className="mt-2 inline-flex justify-center px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-400 text-white text-sm font-medium">Book a Call</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
