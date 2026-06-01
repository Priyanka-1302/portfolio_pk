import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Linkedin, Github, Mail, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [senderEmail, setSenderEmail] = useState('');

  const handleConnection = () => {
    const subject = encodeURIComponent("Establishing Connection");
    const body = encodeURIComponent(`Hello Priyanka,\n\nI would like to establish a secure connection.\n\nMy email: ${senderEmail || "[Please enter your email]"}\n\nLet's build something extraordinary together!`);
    window.location.href = `mailto:priyankakpati1326@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleConnection();
    }
  };

  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 mb-8">
            <span className="text-[10px] font-mono tracking-widest text-brand-cyan uppercase">Transmission Terminal</span>
          </div>
          
          <h2 className="text-5xl md:text-8xl font-display font-bold mb-12 tracking-tight">
            Let’s Build Something <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-pink">Extraordinary</span> Together.
          </h2>

          <div className="max-w-2xl mx-auto mb-20">
            <motion.div 
              className="glass p-1 rounded-3xl flex items-center shadow-2xl"
              whileHover={{ scale: 1.02 }}
            >
              <input 
                type="email" 
                placeholder="Secure connection: enter your email..."
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                onKeyDown={handleKeyPress}
                className="bg-transparent border-none focus:ring-0 px-8 py-6 w-full text-white placeholder-slate-500 font-mono text-sm outline-none"
              />
              <button 
                onClick={handleConnection}
                className="bg-brand-cyan text-midnight font-bold rounded-2xl px-10 py-5 flex items-center gap-3 hover:bg-white transition-colors group flex-shrink-0"
              >
                Establish Connection <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SocialLink 
              href="https://www.linkedin.com/in/priyanka-k-27aab427b/"
              label="LinkedIn"
              icon={Linkedin}
              sub="Professional Connection"
            />
            <SocialLink 
              href="https://github.com/Priyanka-1302"
              label="GitHub"
              icon={Github}
              sub="Code Repositories"
            />
            <SocialLink 
              href="mailto:priyankakpati1326@gmail.com"
              label="Email"
              icon={Mail}
              sub="Direct Protocol"
            />
          </div>
        </motion.div>

        <footer className="mt-40 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 text-xs font-mono tracking-[0.3em] uppercase">
          <div>© 2026 Developer’s Universe</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-cyan transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-cyan transition-colors">Terms</a>
            <a href="#" className="hover:text-brand-cyan transition-colors">OS Status</a>
          </div>
          <div>Built by Priyanka</div>
        </footer>
      </div>

      {/* Background Portal Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}

function SocialLink({ href, label, icon: Icon, sub }: any) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -10 }}
      className="group p-10 glass rounded-[40px] flex flex-col items-center text-center relative overflow-hidden"
    >
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowUpRight size={20} className="text-brand-cyan" />
      </div>

      <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center text-white group-hover:text-brand-cyan group-hover:bg-brand-cyan/20 transition-all duration-300 mb-6">
        <Icon size={32} />
      </div>

      <h4 className="text-2xl font-display font-bold text-white mb-2">{label}</h4>
      <p className="text-[10px] uppercase font-mono tracking-widest text-slate-500">{sub}</p>

      {/* Decorative lines */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-cyan scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.a>
  );
}
