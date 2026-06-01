import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { 
  X, 
  ExternalLink, 
  Code2, 
  Globe, 
  Cpu, 
  Layout, 
  Boxes, 
  Terminal, 
  Bot, 
  Sparkles 
} from 'lucide-react';

const SKILLS_DATA = [
  {
    name: 'React',
    icon: Layout,
    color: '#00f2ff',
    orbitRadius: 160,
    angle: 0,
    speed: 40,
    experience: 'Leveraged to engineer high-fidelity interactive interfaces, dynamic admin panels, and client portals. Built the complete modular UI templates for the LitAmor internship and the KGSS web presence.',
    projects: [
      { name: 'LitAmor Responsive Web UI', url: '' },
      { name: 'KGSS Website Templates', url: 'https://github.com/eshaa2005/KGSS_Website' },
      { name: 'Interactive Portfolio OS', url: '' }
    ],
    level: 'Lvl. 95 Specialist',
    stats: { mastery: '95%', efficiency: 'Responsive' }
  },
  {
    name: 'TypeScript',
    icon: Code2,
    color: '#3178C6',
    orbitRadius: 160,
    angle: 180,
    speed: 40,
    experience: 'Applied to introduce robust structural safety, state validation, and interface schemas across complex frontends. Implemented bulletproof prop verification for LitAmor and this interactive web platform.',
    projects: [
      { name: 'Portfolio Space OS', url: '' },
      { name: 'LitAmor', url: '' },
      { name: 'UI Component Kits', url: '' }
    ],
    level: 'Lvl. 92 Engineer',
    stats: { mastery: '92%', efficiency: 'Type Safe' }
  },
  {
    name: 'Node.js',
    icon: Globe,
    color: '#a855f7',
    orbitRadius: 260,
    angle: 0,
    speed: 50,
    experience: 'Utilized to develop modular backend architectures, coordinate high-concurrency connection loops, and resolve server communication ports. Powered server-side data integrations for LitAmor.',
    projects: [
      { name: 'LitAmor', url: '' },
      { name: 'Cindral', url: '' },
      { name: 'KGSS Back-End Services', url: 'https://github.com/eshaa2005/KGSS_Website' }
    ],
    level: 'Lvl. 90 Architect',
    stats: { mastery: '90%', efficiency: 'Scalable' }
  },
  {
    name: 'C Language',
    icon: Terminal,
    color: '#47A248',
    orbitRadius: 260,
    angle: 120,
    speed: 50,
    experience: 'Used to write hardware-level firmware and serial coordination scripts for Arduino microcontrollers. Engineered coordinates transmission firmware for the Women Safety Companion hardware.',
    projects: [
      { name: 'Women Safety Companion', url: 'https://drive.google.com/drive/folders/1dm5K_8qQrcw5cGVewQeFbOESNEpRPIOT?usp=sharing' },
      { name: 'Arduino Controller Boards', url: 'https://drive.google.com/drive/folders/1dm5K_8qQrcw5cGVewQeFbOESNEpRPIOT?usp=sharing' },
      { name: 'Taser Interface Logic', url: 'https://drive.google.com/drive/folders/1dm5K_8qQrcw5cGVewQeFbOESNEpRPIOT?usp=sharing' }
    ],
    level: 'Lvl. 88 Embedded Developer',
    stats: { mastery: '88%', efficiency: 'Lower Level' }
  },
  {
    name: 'Agentic AI',
    icon: Bot,
    color: '#ff5733',
    orbitRadius: 260,
    angle: 240,
    speed: 50,
    experience: 'Engineered multi-agent cooperative clusters that coordinate query management, fact-checking consensus protocols, and self-correcting response analysis pipelines dynamically.',
    projects: [
      { name: 'TruthGuardAI Agent Cluster', url: 'https://github.com/Priyanka-1302/TruthBeTold' },
      { name: 'Smart Decision Routing', url: 'https://github.com/Priyanka-1302/TruthBeTold' },
      { name: 'Autonomous Prompt Assistants', url: 'https://github.com/Priyanka-1302/TruthBeTold' }
    ],
    level: 'Lvl. 92 Architect',
    stats: { mastery: '92%', efficiency: 'Autonomous' }
  },
  {
    name: 'Python',
    icon: Cpu,
    color: '#ffdd00',
    orbitRadius: 360,
    angle: 0,
    speed: 60,
    experience: 'Programmed high-frequency analysis subroutines, neural inference models, and server pipeline workers. Developed YOLOv8 custom traffic analytics and NLP pipelines for validation.',
    projects: [
      { name: 'SmartRoadAI modeling', url: 'https://github.com/Priyanka-1302/roadVision' },
      { name: 'TruthGuardAI agent', url: 'https://github.com/Priyanka-1302/TruthBeTold' },
      { name: 'Voice AI-Assistant', url: 'https://github.com/Preeti3024/ai_assistant' }
    ],
    level: 'Lvl. 96 Specialist',
    stats: { mastery: '96%', efficiency: 'AI Powered' }
  },
  {
    name: 'Machine Learning',
    icon: Boxes,
    color: '#ff00c8',
    orbitRadius: 360,
    angle: 120,
    speed: 60,
    experience: 'Built deep training and validation datasets, orchestrated custom testing runs, and optimized object tracking anchors. Executed high-precision image annotation and model pipeline serving.',
    projects: [
      { name: 'YOLOv8 Traffic Object Detection', url: 'https://github.com/Priyanka-1302/roadVision' },
      { name: 'Cindral ML Integrations', url: '' },
      { name: 'NLP Fact Verification System', url: 'https://github.com/Priyanka-1302/TruthBeTold' }
    ],
    level: 'Lvl. 90 Specialist',
    stats: { mastery: '90%', efficiency: 'Optimized' }
  },
  {
    name: 'NLP',
    icon: Sparkles,
    color: '#00ff87',
    orbitRadius: 360,
    angle: 240,
    speed: 60,
    experience: 'Orchestrated custom NLP classifiers, claim extraction heuristics, and audio voice activation nodes. Used to parse contextual content and assess accuracy limits on interactive models.',
    projects: [
      { name: 'TruthGuardAI Parsing Core', url: 'https://github.com/Priyanka-1302/TruthBeTold' },
      { name: 'AI-Assistant Voice Translation', url: 'https://github.com/Preeti3024/ai_assistant' },
      { name: 'Semantic Sentiment Analyser', url: 'https://github.com/Priyanka-1302/TruthBeTold' }
    ],
    level: 'Lvl. 94 Specialist',
    stats: { mastery: '94%', efficiency: 'Semantic' }
  }
];

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<typeof SKILLS_DATA[0] | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scanTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleSelect = (skill: typeof SKILLS_DATA[0]) => {
    if (scanTimerRef.current) {
      clearTimeout(scanTimerRef.current);
    }
    
    setIsScanning(true);
    setSelectedSkill(skill);

    // Promptly scroll content layout to top on select to prevent scroll-retention clip
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }

    scanTimerRef.current = setTimeout(() => {
      setIsScanning(false);
      // Double check scroll position is perfectly resets
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }
    }, 450);
  };

  return (
    <section className="relative min-h-screen py-32 px-6 bg-[#020205] overflow-hidden flex flex-col items-center justify-center animate-fadeIn">
      {/* Header */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 text-center z-10 w-full px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="text-[10px] uppercase tracking-[0.4em] font-mono text-brand-cyan mb-4"
        >
          03 // TECH CONSTELLATION
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
          The <span className="text-brand-cyan italic">Universe</span> of My Craft.
        </h2>
        <p className="text-slate-500 max-w-xl mx-auto text-sm font-light">
          Click on a star (technology) to scan the archive for experience and projects.
        </p>
      </div>

      {/* Orbital Visualization Container */}
      <div className="relative w-full max-w-[1000px] h-[600px] md:h-[800px] flex items-center justify-center scale-75 md:scale-95 lg:scale-100">
        {/* The Core */}
        <div className="relative z-20">
          <motion.div 
            animate={selectedSkill ? {
              scale: 0.8,
              opacity: 0.5,
              rotate: 180
            } : { 
              scale: [1, 1.08, 1],
              opacity: 1,
              rotate: 0
            }}
            transition={{ repeat: selectedSkill ? 0 : Infinity, duration: 4 }}
            className="w-24 h-24 md:w-32 md:h-32 rounded-full glass border-brand-cyan/20 flex items-center justify-center flex-col gap-1 backdrop-blur-3xl"
          >
             <div className="absolute inset-0 rounded-full bg-brand-cyan/5 -z-10" />
            <span className="text-[10px] font-mono tracking-widest text-brand-cyan uppercase">OS Core</span>
            <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse shadow-[0_0_10px_#00f2ff]" />
          </motion.div>
        </div>

        {/* Orbits Visual */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
          <div className="w-[320px] h-[320px] border border-white/20 rounded-full" />
          <div className="w-[520px] h-[520px] border border-white/20 rounded-full" />
          <div className="w-[720px] h-[720px] border border-white/20 rounded-full" />
        </div>

        {/* Skill Planets */}
        {SKILLS_DATA.map((skill, index) => (
          <SkillPlanet 
            key={skill.name} 
            skill={skill} 
            index={index} 
            onSelect={() => handleSelect(skill)}
          />
        ))}
      </div>

      {/* Detail Panel - Holographic Interface */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0, x: 100, filter: 'blur(20px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: 100, filter: 'blur(20px)' }}
            className="fixed inset-y-0 right-0 w-full md:w-[500px] z-[200] p-4 md:p-6 flex items-center"
          >
            <div className="w-full h-[85vh] glass border-white/10 rounded-[2.5rem] p-6 md:p-8 relative overflow-hidden backdrop-blur-[80px] shadow-2xl flex flex-col justify-between">
              {/* Internal Glow Gradient */}
              <div 
                className="absolute -top-32 -right-32 w-80 h-80 blur-[120px] opacity-30 pointer-events-none"
                style={{ backgroundColor: selectedSkill.color }}
              />

              <button 
                onClick={() => setSelectedSkill(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-all transform hover:rotate-90 z-20"
              >
                <X size={20} />
              </button>

              <div className="mb-6 relative flex flex-col select-none">
                <motion.div 
                  initial={{ scale: 0.8, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-2xl relative"
                  style={{ backgroundColor: `${selectedSkill.color}15`, border: `1px solid ${selectedSkill.color}45` }}
                >
                  <selectedSkill.icon size={28} style={{ color: selectedSkill.color }} />
                  {/* Glowing background ring */}
                  <div className="absolute inset-0 rounded-2xl blur-2xl opacity-20" style={{ backgroundColor: selectedSkill.color }} />
                </motion.div>
                
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-2 leading-tight tracking-tight">
                  {selectedSkill.name}
                </h3>
                
                <div className="flex flex-wrap items-center gap-4 mt-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
                    <span className="text-[9px] uppercase tracking-[0.25em] font-mono text-brand-cyan">{selectedSkill.level}</span>
                  </div>
                  <div className="h-3 w-px bg-white/15" />
                  <span className="text-[9px] uppercase tracking-[0.25em] font-mono text-slate-400">Mastery: {selectedSkill.stats.mastery}</span>
                </div>
              </div>

              {/* Scrolling Content Area */}
              <div 
                ref={scrollContainerRef}
                className="flex-1 overflow-y-auto pr-2 custom-scrollbar max-h-[45vh]"
              >
                <AnimatePresence mode="wait">
                  {isScanning ? (
                    <motion.div 
                      key="scanning"
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      exit={{ opacity: 0 }}
                      className="space-y-4 pt-6 animate-pulse"
                    >
                      <div className="h-3 bg-white/5 rounded-full w-full" />
                      <div className="h-3 bg-white/5 rounded-full w-3/4" />
                      <div className="h-16 bg-white/5 rounded-xl w-full" />
                      <div className="text-center text-[9px] font-mono text-brand-cyan/40 mt-12">INITIALIZING DECRYPTION...</div>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="content"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6 pt-2"
                    >
                      <section>
                        <h4 className="text-[9px] uppercase tracking-[0.2em] text-slate-500 font-mono mb-3 flex items-center gap-3">
                          Application Context <div className="flex-1 h-px bg-white/10" />
                        </h4>
                        <p className="text-slate-300 leading-relaxed text-sm font-light font-display">
                          {selectedSkill.experience}
                        </p>
                      </section>

                      <section>
                        <h4 className="text-[9px] uppercase tracking-[0.2em] text-slate-500 font-mono mb-4 flex items-center gap-3">
                          Project Log <div className="flex-1 h-px bg-white/10" />
                        </h4>
                        <div className="grid gap-3">
                          {selectedSkill.projects.map((proj, i) => {
                            const isLink = !!proj.url;
                            const Component = isLink ? 'a' : 'div';
                            const extraProps = isLink ? { href: proj.url, target: '_blank', rel: 'noopener noreferrer' } : {};

                            return (
                              <motion.div 
                                key={proj.name}
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.08 }}
                                className="block"
                              >
                                <Component
                                  {...(extraProps as any)}
                                  className={cn(
                                    "p-4 rounded-xl border border-white/5 flex items-center gap-3 group transition-all bg-white/[0.01]",
                                    isLink ? "hover:scale-[1.02] hover:bg-white/5 hover:border-brand-cyan/20 cursor-pointer" : ""
                                  )}
                                >
                                  <div className={cn(
                                    "w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-500 transition-all",
                                    isLink ? "group-hover:text-brand-cyan group-hover:bg-brand-cyan/15 group-hover:scale-110" : "opacity-40"
                                  )}>
                                    <ExternalLink size={14} />
                                  </div>
                                  <div className="flex flex-col">
                                    <span className={cn(
                                      "text-xs font-semibold text-slate-300 transition-colors",
                                      isLink ? "group-hover:text-brand-cyan" : ""
                                    )}>
                                      {proj.name}
                                    </span>
                                    <span className="text-[8px] uppercase font-mono text-slate-650 tracking-wider">
                                      {isLink ? "Decrypted Repository" : "Internal Academy Archive"}
                                    </span>
                                  </div>
                                </Component>
                              </motion.div>
                            );
                          })}
                        </div>
                      </section>

                      <div className="pt-4">
                         <div className="text-[8px] font-mono text-slate-550 mb-1.5 uppercase tracking-widest">Efficiency integrity</div>
                         <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }} 
                              animate={{ width: selectedSkill.stats.mastery }} 
                              className="h-full bg-brand-cyan" 
                            />
                         </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => setSelectedSkill(null)}
                className="mt-6 w-full py-4 rounded-xl bg-white text-black font-bold uppercase text-[10px] tracking-[0.2em] shadow-xl hover:shadow-brand-cyan/20 transition-all flex items-center justify-center gap-2 flex-shrink-0"
              >
                Close Station
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* Portal Blur Overlay */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSkill(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[150] cursor-pointer"
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function SkillPlanet({ skill, index, onSelect }: any) {
  const startAngle = skill.angle || 0;

  return (
    <motion.div
      animate={{
        rotate: [startAngle, 360 + startAngle],
      }}
      transition={{
        duration: skill.speed,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        width: skill.orbitRadius * 2,
        height: skill.orbitRadius * 2,
        position: 'absolute',
      }}
      className="flex items-center justify-center pointer-events-none"
    >
      <div
        className="absolute pointer-events-auto"
        style={{ 
          top: -40, 
          left: '50%', 
          transform: 'translateX(-50%)',
        }}
      >
        <motion.button
          onClick={onSelect}
          animate={{ rotate: [-startAngle, -360 - startAngle] }} // Constantly counter-rotate perfectly upright
          transition={{
            duration: skill.speed,
            repeat: Infinity,
            ease: "linear",
          }}
          whileHover={{ scale: 1.2, zIndex: 100, border: `1px solid ${skill.color}75` }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 md:w-20 md:h-20 rounded-2xl glass border-white/10 flex flex-col items-center justify-center p-2.5 group interactive transition-all backdrop-blur-2xl shadow-xl relative"
        >
          {/* Active indicator */}
          <div 
            className="absolute -top-1 -right-1 w-2 h-2 rounded-full shadow-[0_0_10px_currentColor] animate-pulse"
            style={{ backgroundColor: skill.color, color: skill.color }}
          />

          <skill.icon size={24} style={{ color: skill.color }} className="mb-1.5 group-hover:drop-shadow-[0_0_8px_currentColor] transition-all" />
          <span className="text-[7px] md:text-[8px] font-mono text-slate-400 group-hover:text-white uppercase tracking-tighter transition-colors">
            {skill.name}
          </span>
          
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity" style={{ backgroundColor: skill.color }} />
        </motion.button>
      </div>
    </motion.div>
  );
}
