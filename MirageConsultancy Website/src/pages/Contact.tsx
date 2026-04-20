import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, ArrowDownRight } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <div className="flex flex-col gap-6 w-full min-h-[85vh]">
      <section className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-[10px] rounded-full uppercase tracking-widest mb-6">Get in Touch</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">LET'S TALK.</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 pt-8 border-t border-white/10">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col gap-12"
          >
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-500 mb-6">New Business</h3>
              <a href="mailto:hello@mirage.agency" className="text-2xl hover:text-indigo-400 transition-colors font-light relative group inline-block text-slate-300">
                hello@mirage.agency
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white/10"></span>
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-500 mb-6">Global Headquarters</h3>
              <address className="not-italic text-lg text-slate-400 font-light leading-relaxed">
                Dublin, Ireland
              </address>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-500 mb-6">Socials</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-indigo-400 transition-colors text-slate-400">LinkedIn</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors text-slate-400">Instagram</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors text-slate-400">Facebook</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors text-slate-400">WhatsApp</a></li>
              </ul>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7 lg:col-start-6"
          >
            {formState === 'success' ? (
              <div className="backdrop-blur-md bg-white/5 border border-white/10 p-12 rounded-3xl h-full flex flex-col justify-center items-center text-center">
                <div className="w-20 h-20 bg-indigo-500/20 text-indigo-400 rounded-full flex items-center justify-center mb-6">
                  <Send size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Message Received</h3>
                <p className="text-slate-400 font-light max-w-md">
                  Thank you for reaching out. One of our partners will get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="mt-8 text-xs uppercase tracking-widest text-indigo-400 hover:text-indigo-300 transition-colors pb-1 border-b border-indigo-500/30 hover:border-indigo-400"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="flex flex-col gap-3">
                    <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="bg-transparent border-b border-white/10 pb-4 text-lg focus:outline-none focus:border-indigo-400 transition-colors text-slate-200 placeholder:text-slate-600"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="bg-transparent border-b border-white/10 pb-4 text-lg focus:outline-none focus:border-indigo-400 transition-colors text-slate-200 placeholder:text-slate-600"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <label htmlFor="company" className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Company / Organization</label>
                  <input 
                    type="text" 
                    id="company" 
                    className="bg-transparent border-b border-white/10 pb-4 text-lg focus:outline-none focus:border-indigo-400 transition-colors text-slate-200 placeholder:text-slate-600"
                    placeholder="Acme Corp"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Project Details</label>
                  <textarea 
                    id="message" 
                    required
                    rows={4}
                    className="bg-transparent border-b border-white/10 pb-4 text-lg focus:outline-none focus:border-indigo-400 transition-colors resize-none text-slate-200 placeholder:text-slate-600"
                    placeholder="Tell us about your goals..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="bg-white text-black py-4 px-8 rounded-full font-bold uppercase tracking-tighter text-xs self-start hover:bg-indigo-100 transition-colors disabled:opacity-50 flex items-center gap-2"
                >
                  {formState === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
                  <ArrowDownRight size={16} className="text-black/50" />
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </section>
    </div>
  );
}
