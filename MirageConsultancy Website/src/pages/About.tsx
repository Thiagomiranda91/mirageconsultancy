import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Header */}
      <section className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 md:p-16 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl relative z-10"
        >
          <span className="inline-block px-3 py-1 bg-purple-500/20 border border-purple-400/30 text-purple-300 text-[10px] rounded-full uppercase tracking-widest mb-6">Our Philosophy</span>
          <h1 className="text-[40px] font-bold tracking-tight mb-8 leading-none">
            BEYOND THE<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">EXPECTED.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl leading-relaxed">
            We are an independent consultancy combining visionary strategy with world-class execution. Since 2026, we've been helping visionary leaders build the brands of tomorrow.
          </p>
        </motion.div>
      </section>

      {/* Image / Manifesto */}
      <section className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-3xl"
          >
            <img 
              src="https://picsum.photos/seed/abstract_charts_data/800/1000" 
              alt="Abstract Charts and Graphs" 
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-12"
          >
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-indigo-400 mb-4">Our Methodology</h3>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">We don't just write reports. We build realities.</h2>
              <p className="text-slate-400 font-light leading-relaxed mb-6">
                Most consultancies leave you with a presentation deck. We leave you with functional prototypes, fully realized brands, and production-ready code. Our hybrid model integrates strategy, design, and engineering into a single fluid process.
              </p>
              <p className="text-slate-400 font-light leading-relaxed">
                By bridging the gap between business objectives and technical implementation, we remove friction, reduce time-to-market, and ensure that the final product actually matches the initial vision.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div>
                <span className="block text-4xl font-bold mb-2">15+</span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Countries</span>
              </div>
              <div>
                <span className="block text-4xl font-bold mb-2">$2B+</span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Client Revenue Impact</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
        <div className="max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-8">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">Leadership</h2>
            <p className="text-slate-400 max-w-sm font-light">Industry veterans who've led transformations at the world's most innovative organizations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
            {[
              { name: "Thiago Gimenes", role: "Founding Partner & CEO", image: "/Gimenes.png" },
              { name: "Thiago Miranda", role: "Founding Partner & CTO", image: "/Thiago.png" },
            ].map((leader, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-square overflow-hidden rounded-3xl mb-6 relative border border-white/10">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="object-cover w-full h-full grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
                  {leader.name} 
                  <ArrowUpRight size={16} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-indigo-400" />
                </h3>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
