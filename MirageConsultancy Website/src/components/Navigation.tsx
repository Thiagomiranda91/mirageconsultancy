import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-4 left-4 right-4 md:left-8 md:right-8 z-50 transition-all duration-300 max-w-7xl mx-auto">
      <nav className={`flex justify-between items-center px-6 md:px-8 py-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl transition-all ${scrolled ? 'bg-white/10 shadow-lg' : ''}`}>
        <NavLink to="/" className="flex items-center gap-2 relative z-50 group transition-opacity">
          <img src="/mirageconsultancylogo.png" alt="Mirage Consultancy Logo" className="h-10 object-contain group-hover:opacity-80 transition-opacity" />
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
          <div className="flex items-center gap-8 opacity-70">
            {links.map((link, index) => (
              <React.Fragment key={link.name}>
                {index > 0 && <div className="h-4 w-px bg-white/20 rounded-full" />}
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) => 
                    `hover:text-indigo-400 transition-colors hover:opacity-100 ${isActive ? 'text-indigo-400 opacity-100' : 'text-slate-100'}`
                  }
                >
                  {link.name}
                </NavLink>
              </React.Fragment>
            ))}
          </div>
          <NavLink 
            to="/contact"
            className="px-6 py-2 bg-white text-black text-xs font-bold rounded-full tracking-tighter hover:bg-indigo-100 transition-colors"
          >
            LET'S TALK
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden relative z-50 text-slate-100 hover:text-indigo-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 mt-4 p-8 bg-[#161821] border border-white/10 rounded-3xl shadow-2xl flex flex-col justify-center items-center gap-6 z-40 md:hidden"
            >
              {links.map((link, index) => (
                <React.Fragment key={link.name}>
                  {index > 0 && <div className="w-16 h-px bg-white/10 rounded-full" />}
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => 
                      `text-2xl font-bold tracking-tight transition-colors hover:text-indigo-400 ${isActive ? 'text-indigo-400' : 'text-slate-100/50'}`
                    }
                  >
                    {link.name}
                  </NavLink>
                </React.Fragment>
              ))}
              <NavLink 
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-8 py-3 bg-white text-black text-sm font-bold rounded-full uppercase tracking-tighter hover:bg-indigo-100 transition-colors"
              >
                Let's Talk
              </NavLink>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
