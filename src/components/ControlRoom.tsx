import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, 
  Activity, 
  Server, 
  Cpu, 
  Compass, 
  FlaskConical, 
  Stars, 
  ExternalLink, 
  Github, 
  Calendar, 
  ChevronRight,
  Database,
  Search
} from 'lucide-react';
import { cn } from '../lib/utils';

export default function ControlRoom() {
  const [typedText, setTypedText] = useState('');
  const [activeTab, setActiveTab] = useState<'journey' | 'lab' | 'skills'>('journey');

  const fullText = `> priyanka init --portfolio-os\n` +
    `> Systems check: PASS [100%]\n` +
    `> Mapping Historic Archive... verified LitAmor, Cindral, SIES GST\n` +
    `> Booting Experimental Lab... 5 active project nodes linked\n` +
    `> Loading Technical Starfield... core frameworks integrated\n\n` +
    `> [SYSTEM LOGS]\n` +
    `> [01] SmartRoadAI: YOLOv8 computer vision model ready (96.5% recall)\n` +
    `> [02] TruthGuardAI: NLP source verification pipeline online\n` +
    `> [03] Women Safety Tracker: Core hardware module handshake OK\n` +
    `> [04] KGSS: Server nodes, routing, and UI templates configured\n` +
    `> [05] AI Assistant: Speech synthesis / vocal decryption loaded\n\n` +
    `> ALL SUB-SYSTEMS SYNCHRONIZED ON PORT 3000 // STATUS: STANDBY`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i += 2; // Accelerated for better cockpit experience
      if (i > fullText.length) clearInterval(interval);
    }, 15);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 px-6 bg-[#020205] min-h-screen relative overflow-hidden flex items-center">
      {/* Visual background details */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(0,242,255,0.05),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          
          {/* Section A: Control Panel Configurator */}
          <div className="lg:w-1/2 flex flex-col justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.4em] font-mono text-brand-cyan mb-3">
                05 // PORTFOLIO COCKPIT
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-medium text-white mb-6">
                System <span className="text-brand-cyan italic">Control</span>
              </h2>
              <p className="text-slate-400 mb-8 max-w-lg leading-relaxed text-sm font-light">
                This is the central orchestration hub of Priyanka's ecosystem. Interconnect and redirect system logs, project assets, and historic career records on the fly.
              </p>

              {/* Holographic Tabs */}
              <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4 mb-8 select-none">
                <button
                  onClick={() => setActiveTab('journey')}
                  className={cn(
                    "px-4 py-2 rounded-xl border text-[10px] uppercase tracking-wider font-mono transition-all duration-300 flex items-center gap-2",
                    activeTab === 'journey'
                      ? "bg-brand-cyan/15 border-brand-cyan text-brand-cyan shadow-[0_0_15px_rgba(0,242,255,0.1)]"
                      : "bg-transparent border-white/5 text-slate-400 hover:text-white hover:border-white/25"
                  )}
                >
                  <Compass size={12} />
                  Journey Module
                </button>
                <button
                  onClick={() => setActiveTab('lab')}
                  className={cn(
                    "px-4 py-2 rounded-xl border text-[10px] uppercase tracking-wider font-mono transition-all duration-300 flex items-center gap-2",
                    activeTab === 'lab'
                      ? "bg-brand-cyan/15 border-brand-cyan text-brand-cyan shadow-[0_0_15px_rgba(0,242,255,0.1)]"
                      : "bg-transparent border-white/5 text-slate-400 hover:text-white hover:border-white/25"
                  )}
                >
                  <FlaskConical size={12} />
                  Lab Deployments
                </button>
                <button
                  onClick={() => setActiveTab('skills')}
                  className={cn(
                    "px-4 py-2 rounded-xl border text-[10px] uppercase tracking-wider font-mono transition-all duration-300 flex items-center gap-2",
                    activeTab === 'skills'
                      ? "bg-brand-cyan/15 border-brand-cyan text-brand-cyan shadow-[0_0_15px_rgba(0,242,255,0.1)]"
                      : "bg-transparent border-white/5 text-slate-400 hover:text-white hover:border-white/25"
                  )}
                >
                  <Stars size={12} />
                  Tech Constellation
                </button>
              </div>
            </div>

            {/* Dynamic Content Display based on selected Tab */}
            <div className="flex-1 min-h-[350px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {activeTab === 'journey' && (
                  <motion.div
                    key="journey"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="space-y-4"
                  >
                    <div className="text-[10px] uppercase tracking-[0.2em] font-mono text-slate-500 flex items-center gap-2">
                      <Database size={12} /> Real Career Milestones
                    </div>
                    
                    <ExperienceItem 
                      title="LitAmor (Full Stack Intern)"
                      company="Dating & Personal Growth Platform"
                      date="July '25 - Sept '25"
                      description="Led a team of 5 developers. Architected robust, responsive frontends and connected backend APIs to ensure full verification structures."
                      url="/journey"
                      redirectLabel="Inspect in Journey Timeline"
                    />
                    <ExperienceItem 
                      title="Cindral (Full Stack Intern)"
                      company="Tech & ML Integrations Group"
                      date="Nov '25 - Feb '26"
                      description="Specialized in core preprocessing pipelines, web/mobile UI modifications, and structured REST API integrations in a winter workspace environment."
                      url="/journey"
                      redirectLabel="Inspect in Journey Timeline"
                    />

                    <div className="pt-2">
                      <Link 
                        to="/journey"
                        className="inline-flex items-center gap-2 text-[10px] uppercase font-mono text-brand-cyan hover:text-white tracking-[0.2em] transition-all group"
                      >
                        Launch Interactive Journey Deck <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'lab' && (
                  <motion.div
                    key="lab"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="space-y-3"
                  >
                    <div className="text-[10px] uppercase tracking-[0.2em] font-mono text-slate-500 mb-2 flex items-center gap-2">
                      <Search size={12} /> Live Repository Redirects
                    </div>

                    <div className="grid gap-2 max-h-[320px] overflow-y-auto pr-2 custom-scrollbar">
                      <LabRedirectItem 
                        title="SmartRoadAI" 
                        badge="YOLOv8 Detection" 
                        url="https://github.com/Priyanka-1302/roadVision" 
                      />
                      <LabRedirectItem 
                        title="TruthGuardAI" 
                        badge="NLP / Multi-Agent" 
                        url="https://github.com/Priyanka-1302/TruthBeTold" 
                      />
                      <LabRedirectItem 
                        title="Women Safety Companion" 
                        badge="Arduino C / GSM Hardware" 
                        url="https://drive.google.com/drive/folders/1dm5K_8qQrcw5cGVewQeFbOESNEpRPIOT?usp=sharing" 
                      />
                      <LabRedirectItem 
                        title="KGSS Website" 
                        badge="React & Node Services" 
                        url="https://github.com/eshaa2005/KGSS_Website" 
                      />
                      <LabRedirectItem 
                        title="AI-Assistant Voice Tool" 
                        badge="Python GUI Speech" 
                        url="https://github.com/Preeti3024/ai_assistant" 
                      />
                    </div>

                    <div className="pt-4">
                      <Link 
                        to="/projects"
                        className="inline-flex items-center gap-2 text-[10px] uppercase font-mono text-brand-cyan hover:text-white tracking-[0.2em] transition-all group"
                      >
                        Enter Experimental Lab Interface <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'skills' && (
                  <motion.div
                    key="skills"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="space-y-4"
                  >
                    <div className="text-[10px] uppercase tracking-[0.2em] font-mono text-slate-500 flex items-center gap-2">
                      <Stars size={12} /> Tech Constellation Stack
                    </div>

                    <div className="grid grid-cols-2 gap-3 pb-2">
                       <SkillCockpitItem name="Agentic AI" level="92% Core Node" />
                       <SkillCockpitItem name="React.js" level="95% High Fidelity" />
                       <SkillCockpitItem name="Python / ML" level="96% Inference" />
                       <SkillCockpitItem name="TypeScript" level="92% Strict Type" />
                       <SkillCockpitItem name="Node.js" level="90% Backend APIs" />
                       <SkillCockpitItem name="C / Arduino" level="88% Firmware" />
                    </div>

                    <p className="text-slate-500 text-xs font-light">
                      All systems are validated via automated telemetry, ensuring maximum engineering efficiency.
                    </p>

                    <div className="pt-2">
                      <Link 
                        to="/skills"
                        className="inline-flex items-center gap-2 text-[10px] uppercase font-mono text-brand-cyan hover:text-white tracking-[0.2em] transition-all group"
                      >
                        Align Constellation Starfield <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Section B: The Holographic Diagnostics Console */}
          <div className="lg:w-1/2 w-full flex flex-col justify-center">
            <div className="glass rounded-[2rem] overflow-hidden border-white/5 shadow-2xl relative flex flex-col h-full justify-between">
              
              {/* Terminal Header */}
              <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
                <div className="flex gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-500/20 border border-red-500/40 animate-pulse" />
                  <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/20 border border-yellow-500/40 animate-pulse" />
                  <div className="w-3.5 h-3.5 rounded-full bg-green-500/20 border border-green-500/40 animate-pulse" />
                </div>
                <div className="flex items-center gap-2 text-slate-550 text-[10px] font-mono tracking-widest uppercase">
                  <Terminal size={12} className="text-brand-cyan" /> root@priyanka:cockpit
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-8 h-80 md:h-[400px] font-mono text-xs md:text-sm leading-relaxed overflow-y-auto bg-[#04040a]/80 select-text custom-scrollbar">
                <pre className="text-brand-cyan whitespace-pre-wrap">{typedText}</pre>
                <motion.div
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="w-2 h-4 bg-brand-cyan inline-block translate-y-0.5 ml-1"
                />
              </div>

              {/* Status Bar */}
              <div className="px-6 py-5 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/[0.02] select-none">
                <StatusCard icon={Activity} label="COCKPIT LINK" val="NORMAL" />
                <StatusCard icon={Cpu} label="YOLO PIPELINE" val="96.5% ACC" />
                <StatusCard icon={Server} label="ACTIVE NODES" val="5 ONLINE" />
                <StatusCard icon={Terminal} label="ENVIRONMENT" val="STABLE" />
              </div>

              {/* Holographic cyan flare */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-cyan/15 rounded-full blur-[80px] pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ title, company, date, description, url, redirectLabel }: {
  title: string;
  company: string;
  date: string;
  description: string;
  url: string;
  redirectLabel: string;
}) {
  return (
    <div className="p-5 rounded-2xl glass border-white/5 group transition-all duration-300 relative">
      <div className="flex justify-between items-start mb-1.5 flex-wrap gap-2">
        <h4 className="text-base font-bold text-white group-hover:text-brand-cyan transition-colors">{title}</h4>
        <span className="text-[9px] font-mono text-brand-cyan uppercase tracking-widest px-2.5 py-0.5 bg-brand-cyan/10 rounded-lg">{date}</span>
      </div>
      <div className="text-slate-400 text-xs mb-3 font-semibold font-mono uppercase tracking-wider">{company}</div>
      <p className="text-slate-450 text-xs leading-relaxed mb-4 font-light">{description}</p>
      
      <Link 
        to={url}
        className="inline-flex items-center gap-1 text-[9px] uppercase tracking-widest font-mono text-slate-400 hover:text-white transition-opacity pt-1"
      >
        <Compass size={11} className="text-brand-cyan" /> {redirectLabel}
      </Link>
    </div>
  );
}

function LabRedirectItem({ title, badge, url }: {
  title: string;
  badge: string;
  url: string;
}) {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3.5 rounded-xl border border-white/5 bg-white/[0.01] hover:mt-0.5 hover:bg-white/[0.04] hover:border-brand-cyan/25 flex items-center justify-between transition-all group cursor-pointer"
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 border border-brand-cyan/15 flex items-center justify-center text-brand-cyan group-hover:scale-110 transition-transform">
          <Github size={14} />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">{title}</span>
          <span className="text-[8px] uppercase font-mono text-slate-550 group-hover:text-brand-cyan transition-colors tracking-widest font-medium mt-0.5">{badge}</span>
        </div>
      </div>
      <div className="text-slate-500 group-hover:text-brand-cyan group-hover:translate-x-0.5 transition-all">
        <ExternalLink size={12} />
      </div>
    </a>
  );
}

function SkillCockpitItem({ name, level }: { name: string; level: string }) {
  return (
    <div className="p-3 rounded-xl border border-white/5 bg-white/[0.01] flex flex-col justify-center">
      <span className="text-xs font-bold text-slate-250 mb-0.5">{name}</span>
      <span className="text-[8px] uppercase font-mono text-brand-cyan/80 tracking-wider">{level}</span>
    </div>
  );
}

function StatusCard({ icon: Icon, label, val }: any) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 border border-white/5">
        <Icon size={14} className="text-brand-cyan/70" />
      </div>
      <div>
        <div className="text-[8px] uppercase tracking-wider text-slate-500 font-mono font-medium leading-none mb-1">{label}</div>
        <div className="text-[10px] font-bold text-white font-mono leading-none tracking-widest">{val}</div>
      </div>
    </div>
  );
}
