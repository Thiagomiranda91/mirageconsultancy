import { motion } from 'motion/react';
import { ArrowRight, MoveRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Hero Section */}
      <section className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 md:p-16 flex flex-col justify-center relative overflow-hidden min-h-[65vh]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <span className="inline-block px-3 py-1 bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-[10px] rounded-full uppercase tracking-widest mb-6">Strategic Excellence</span>
          
          <h1 className="text-[40px] font-bold leading-none mb-6 tracking-tight">
            WE SHAPE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400">DIGITAL FUTURES.</span>
          </h1>

          <div className="flex flex-col md:flex-row gap-8 md:items-end justify-between max-w-4xl mt-6">
            <p className="text-lg text-slate-400 max-w-md leading-relaxed">
              Mirage delivers world-class digital solutions for brands that demand distinction. We bridge the gap between vision and reality.
            </p>
            <Link 
              to="/contact"
              className="px-6 py-2 bg-white text-black text-xs font-bold rounded-full uppercase tracking-tighter hover:bg-indigo-100 transition-colors inline-block"
            >
              Start Project
            </Link>
          </div>
        </motion.div>
        
        <div className="absolute right-[-10%] bottom-[-10%] w-96 h-96 border-[0.5px] border-white/10 rounded-full pointer-events-none"></div>
        <div className="absolute right-[-5%] bottom-[-5%] w-64 h-64 border-[0.5px] border-white/20 rounded-full pointer-events-none"></div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: 'Founded', value: '2026', color: 'text-indigo-400' },
          { label: 'Global Clients', value: '150+', color: 'text-purple-400' },
          { label: 'Industry Awards', value: '42', color: 'text-blue-400' },
          { label: 'Team Members', value: '80+', color: 'text-indigo-300' },
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="flex flex-col gap-2 backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all justify-center items-center text-center"
          >
            <span className={`text-4xl md:text-5xl font-bold ${stat.color}`}>{stat.value}</span>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-2">{stat.label}</span>
          </motion.div>
        ))}
      </section>

      {/* Selected Services */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { 
            title: "Strategy", 
            desc: "Brand Architecture & Market Alignment",
            color: "text-indigo-400",
            num: "01."
          },
          { 
            title: "Design", 
            desc: "Immersive UI/UX & Visual Identity",
            color: "text-purple-400",
            num: "02."
          },
          { 
            title: "Technology", 
            desc: "Next-Gen Web Ecosystems & Performance",
            color: "text-blue-400",
            num: "03."
          }
        ].map((service, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="flex flex-col backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 group hover:bg-white/10 transition-all flex-1"
          >
            <h3 className={`text-xs font-bold uppercase tracking-widest ${service.color} mb-4`}>{service.num} {service.title}</h3>
            <p className="text-xl font-medium">{service.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="backdrop-blur-md bg-indigo-500/10 border border-indigo-400/20 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 mt-2">
        <div>
          <h2 className="text-2xl font-semibold mb-1">Let's create.</h2>
          <p className="text-slate-400 text-sm">Located in Dublin, Ireland. Global availability.</p>
        </div>
        <div className="md:text-right flex flex-col md:items-end">
          <a href="mailto:hello@mirage.agency" className="text-xl font-medium hover:text-indigo-400 underline underline-offset-8 block transition-colors">hello@mirage.agency</a>
        </div>
      </section>
    </div>
  );
}
