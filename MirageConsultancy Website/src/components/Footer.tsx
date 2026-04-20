import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src="/mirageconsultancylogo.png" alt="Mirage Consultancy Logo" className="h-10 object-contain opacity-80" />
            </div>
            <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
              A premium consultancy agency building digital experiences that define tomorrow. We turn complex challenges into elegant solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-6 font-semibold">Navigation</h4>
            <ul className="space-y-4">
              <li><NavLink to="/" className="text-slate-400 hover:text-indigo-400 hover:opacity-100 transition-colors text-sm">Home</NavLink></li>
              <li><NavLink to="/about" className="text-slate-400 hover:text-indigo-400 hover:opacity-100 transition-colors text-sm">About</NavLink></li>
              <li><NavLink to="/services" className="text-slate-400 hover:text-indigo-400 hover:opacity-100 transition-colors text-sm">Services</NavLink></li>
              <li><NavLink to="/contact" className="text-slate-400 hover:text-indigo-400 hover:opacity-100 transition-colors text-sm">Contact</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-6 font-semibold">Connect</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 hover:opacity-100 transition-colors text-sm">LinkedIn</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 hover:opacity-100 transition-colors text-sm">Instagram</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 hover:opacity-100 transition-colors text-sm">Facebook</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 hover:opacity-100 transition-colors text-sm">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <p className="text-slate-500 text-xs mb-4 md:mb-0 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Mirage Consultancy Group
          </p>
          <div className="flex gap-6">
            <NavLink to="/privacy-policy" className="text-slate-500 hover:text-indigo-400 text-xs uppercase tracking-widest transition-colors">Privacy Policy</NavLink>
            <NavLink to="/terms-of-service" className="text-slate-500 hover:text-indigo-400 text-xs uppercase tracking-widest transition-colors">Terms of Service</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
