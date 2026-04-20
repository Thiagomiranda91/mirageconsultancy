import { motion } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: "01",
    title: "Digital Strategy",
    description: "We define precise roadmaps for digital transformation, identifying new revenue streams and operational efficiencies. Our strategic frameworks bridge the gap between abstract business goals and actionable technical implementation.",
    features: ["Market Positioning", "Platform Strategy", "Data Infrastructure", "Innovation Workshops"]
  },
  {
    id: "02",
    title: "Experience Design",
    description: "Creating digital products that define categories. We blend aesthetic excellence with deep behavioral psychology to craft interfaces that are both beautiful and fiercely intuitive.",
    features: ["UI/UX Navigation", "Design Systems", "Prototyping", "User Research & Testing"]
  },
  {
    id: "03",
    title: "Platform Engineering",
    description: "Robust, scalable, and secure architectures. From complex enterprise systems to rapid MVPs, our engineering teams build software that performs flawlessly under pressure.",
    features: ["Full-Stack Development", "Cloud Architecture", "API Design", "Performance Optimization"]
  }
];

export default function Services() {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Header */}
      <section className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 md:p-16 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="inline-block px-3 py-1 bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-[10px] rounded-full uppercase tracking-widest mb-6">Expertise</span>
          <h1 className="text-[40px] font-bold tracking-tight mb-8 leading-none">
            END-TO-END <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400">EXCELLENCE.</span>
          </h1>
        </motion.div>
      </section>

      {/* Services List - Split Layout */}
      <section className="flex flex-col gap-6">
        {services.map((service, i) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 hover:bg-white/10 transition-all group"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4">
              <div className="md:col-span-2">
                <span className="text-2xl font-bold text-slate-500 group-hover:text-indigo-400 transition-colors">{service.id}.</span>
              </div>
              <div className="md:col-span-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{service.title}</h2>
                <ArrowDownRight size={24} className="text-indigo-400 hidden md:block opacity-50 group-hover:opacity-100 transition-opacity group-hover:translate-x-2 group-hover:translate-y-2" />
              </div>
              <div className="md:col-span-6 flex flex-col gap-8">
                <p className="text-lg text-slate-400 font-light leading-relaxed max-w-2xl">
                  {service.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {service.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/50 block"></span>
                      <span className="text-xs uppercase tracking-widest text-slate-300 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
      
      {/* Footer Banner */}
      <section className="backdrop-blur-md bg-indigo-500/10 border border-indigo-400/20 rounded-3xl p-12 text-center">
         <h2 className="text-3xl md:text-4xl font-bold mb-8">Not sure what you need?</h2>
         <Link to="/contact" className="inline-block px-8 py-3 bg-white text-black text-xs font-bold rounded-full uppercase tracking-tighter hover:bg-indigo-100 transition-colors">
           Request an Audit
         </Link>
      </section>
    </div>
  );
}
