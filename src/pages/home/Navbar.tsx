import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Experience', href: '#experience' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-dark shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleNav('#home')} className="flex items-center gap-2 sm:gap-3 group">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden glow-card border border-yellow-500/30 group-hover:animate-logo-hover transition-all">
          <img
            src="icons/logo12_27_224448png.png"
            alt="IOEL"
            className="object-contain scale-150 group-hover:scale-175 transition-transform duration-300"
          />
        </div>
          <div className="flex flex-col leading-tight hidden sm:flex">
            <span className="font-black text-xl tracking-wider text-white group-hover:text-yellow-400 transition-colors">IOEL</span>
            <span className="text-xs text-yellow-500/70 font-medium tracking-widest">E-LEARNING</span>
          </div>
        </button>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <button key={l.label} onClick={() => handleNav(l.href)} className="nav-link">
              {l.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => handleNav('#courses')}
            className="btn-outline text-sm py-2.5 px-5"
          >
            Explore Courses
          </button>
          <button
            onClick={() => handleNav('#contact')}
            className="btn-gold text-sm py-2.5 px-5"
          >
            Enroll Now
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white p-2 rounded-lg glass transition-all hover:border-yellow-500/40"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-400 overflow-hidden ${
          open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass-dark mx-4 mt-2 rounded-2xl p-6 flex flex-col gap-4">
          {navLinks.map((l) => (
            <button
              key={l.label}
              onClick={() => handleNav(l.href)}
              className="nav-link text-left text-base py-2 border-b border-white/5 last:border-0"
            >
              {l.label}
            </button>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <button onClick={() => handleNav('#courses')} className="btn-outline text-sm text-center">
              Explore Courses
            </button>
            <button onClick={() => handleNav('#contact')} className="btn-gold text-sm text-center">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
