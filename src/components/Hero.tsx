import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="text-center z-10"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="inline-block px-4 py-1.5 rounded-full glass mb-8 border-brand-cyan/20"
        >
          <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase">
            Systems Initiated :: Ready to Explore
          </span>
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
          Hi, I’m Priyanka <br />
          <span className="text-brand-cyan">Experiments</span> Beyond Screens.
        </h1>

        <p className="max-w-2xl mx-auto text-xl text-slate-400 font-light leading-relaxed mb-12">
          Full Stack Developer | AI Enthusiast | Experience Architect.
          Building the next dimension of digital interactions.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link to="/journey">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-brand-cyan text-midnight font-bold transition-shadow hover:shadow-[0_0_30px_rgba(0,242,255,0.4)]"
            >
              Enter The Universe
            </motion.button>
          </Link>
          
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full glass font-bold hover:bg-white/10 transition-colors"
            >
              View Projects
            </motion.button>
          </Link>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-[10px] uppercase tracking-widest font-mono text-center">Journey awaits below</span>
        <ChevronDown size={20} />
      </motion.div>

      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-purple/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-cyan/20 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
