import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Calendar, CheckSquare, X, Info } from 'lucide-react';
import { cn } from '../lib/utils';

// AI Generated Space/Tech Images matching the cyber constellation theme
import smartRoadAiImg from '../assets/images/smart_road_ai_1780330040358.png';
import truthGuardAiImg from '../assets/images/truth_guard_ai_1780330065334.png';
import womenSafetyTrackerImg from '../assets/images/women_safety_tracker_1780330085508.png';
import kgssWebsiteImg from '../assets/images/kgss_website_1780330108121.png';
import aiAssistantImg from '../assets/images/ai_assistant_1780330134405.png';

const PROJECTS = [
  {
    title: 'SmartRoadAI',
    type: 'AI, ML & Computer Vision',
    image: smartRoadAiImg,
    tech: ['Python', 'YOLO v8', 'Roboflow', 'OpenCV'],
    period: "March'26 - April'26",
    details: [
      'An AI-powered smart traffic and road safety project using machine learning and computer vision.',
      'Involved labeling and annotating real-world image datasets for object detection model training.',
      'Aimed to enhance road monitoring, traffic management, and accident prevention through intelligent automation and real-time analysis.'
    ],
    stats: { primary: '96.5% YOLOv8 MAP', secondary: '0.015s Inference Latency' },
    gradient: 'from-cyan-500 to-blue-500',
    github: 'https://github.com/Priyanka-1302/roadVision',
  },
  {
    title: 'TruthGuardAI',
    type: 'Python, NLP & Multi-Agent Systems',
    image: truthGuardAiImg,
    tech: ['Python', 'NLP', 'Multi-Agent', 'LLMs'],
    period: "Nov'25 - Dec'25",
    details: [
      'An AI-powered misinformation detection system for real-time crisis response, leveraging NLP and multi-agent systems.',
      'Integrated real-time fact-checking pipeline using NLP-based claim extraction, automated source verification, and confidence scoring.',
      'Supports crisis management teams by reducing misinformation spread and public panic through automated alerts.'
    ],
    stats: { primary: '94.8% Fact Precision', secondary: 'Multi-Agent Pipeline' },
    gradient: 'from-purple-500 to-pink-500',
    github: 'https://github.com/Priyanka-1302/TruthBeTold',
  },
  {
    title: 'Women Safety Companion',
    type: 'IoT & Microcontrollers',
    image: womenSafetyTrackerImg,
    tech: ['Arduino UNO', 'C Language', 'GPS/GSM', 'IOT'],
    period: "Sept'24 - Nov'24",
    details: [
      'Includes a defensive taser linked directly to a mobile device to transmit real-time coordinate logs.',
      'Developed the lightweight transmission logic interface between the taser and the mobile using C language.',
      'Utilized microcontrollers, sensors, and GPS components to coordinate immediate location broadcast.'
    ],
    stats: { primary: '99.1% Channel Integrity', secondary: '< 2.5s Emergency Broadcast' },
    gradient: 'from-red-500 to-rose-600',
    github: 'https://drive.google.com/drive/folders/1dm5K_8qQrcw5cGVewQeFbOESNEpRPIOT?usp=sharing',
  },
  {
    title: 'KGSS Website',
    type: 'Web Development',
    image: kgssWebsiteImg,
    tech: ['React.js', 'TailwindCSS', 'Node.js', 'UI/UX'],
    period: "Oct'25 - Nov'25",
    details: [
      'A responsive web development project providing an interactive and user-friendly digital platform.',
      'Focuses on clean UI/UX design, structured navigation, and modern frontend technologies to deliver information efficiently.',
      'Engineered with full cross-device accessibility and performance-critical asset serving pipelines.'
    ],
    stats: { primary: '100% Lighthouse SEO', secondary: '99.9% Fluid Score' },
    gradient: 'from-emerald-500 to-teal-500',
    github: 'https://github.com/eshaa2005/KGSS_Website',
  },
  {
    title: 'AI-Assistant',
    type: 'Python Automation',
    image: aiAssistantImg,
    tech: ['Python', 'Speech API', 'Tkinter', 'Automation'],
    period: "March'25 - April'25",
    details: [
      'Developed a GUI-based AI Assistant in Python with speech recognition and text-to-speech functionality.',
      'Created structured labeled datasets for voice command training to trigger precise offline tasks.',
      'Integrated active third-party weather APIs and custom automation routines to enhance interactive experiences.'
    ],
    stats: { primary: '94.6% Recognition Accuracy', secondary: '< 320ms Sync Processing' },
    gradient: 'from-orange-500 to-amber-500',
    github: 'https://github.com/Preeti3024/ai_assistant',
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  return (
    <section className="py-32 px-6 bg-black relative min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <motion.div 
             initial={{ opacity: 0, y: -20 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="text-[10px] uppercase tracking-[0.4em] font-mono text-brand-cyan mb-4"
          >
            04 // EXPERIMENTAL LAB
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6 text-white"
          >
            My Digital <span className="text-brand-cyan italic">Lab</span>
          </motion.h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm font-light">
            An archive of deep technical experiments, automated tools, and smart interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={i} 
              onOpenDetails={() => setSelectedProject(project)} 
            />
          ))}
        </div>
      </div>

      {/* Holographic Project Detail Dialog */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          >
            {/* Backdrop */}
            <motion.div 
              initial={{ backdropFilter: 'blur(0px)', opacity: 0 }}
              animate={{ backdropFilter: 'blur(16px)', opacity: 1 }}
              exit={{ backdropFilter: 'blur(0px)', opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 cursor-pointer"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-xl glass border-white/10 rounded-[2.5rem] p-8 md:p-12 overflow-hidden shadow-2xl z-10 mx-auto"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 p-3 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-all transform hover:rotate-90 z-20"
              >
                <X size={20} />
              </button>

              {/* Glowing background accent */}
              <div 
                className="absolute -top-32 -right-32 w-80 h-80 blur-[120px] opacity-25 pointer-events-none rounded-full"
                style={{ backgroundImage: `radial-gradient(circle, #00f2ff, transparent)` }}
              />

              <div className="relative mb-8">
                <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-brand-cyan block mb-2">
                  {selectedProject.type}
                </span>
                <h3 className="text-3xl md:text-4xl font-display font-medium text-white mb-2 tracking-tight">
                  {selectedProject.title}
                </h3>
                <div className="flex items-center gap-2 text-slate-400 text-xs font-mono mt-4">
                  <Calendar size={12} className="text-brand-cyan" />
                  <span>{selectedProject.period}</span>
                </div>
              </div>

              {/* Decrypted Description area */}
              <div className="relative mb-8 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-mono mb-4 flex items-center gap-4">
                  Decrypted Description <div className="flex-1 h-px bg-white/10" />
                </h4>
                <ul className="space-y-4">
                  {selectedProject.details.map((detail, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-3 items-start text-slate-300 text-sm md:text-base leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full mt-2 bg-brand-cyan flex-shrink-0" />
                      <span>{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Stats Grid inside the Modal */}
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/5 my-6 select-none bg-white/[0.01] px-4 rounded-2xl">
                <div>
                  <div className="text-[9px] uppercase tracking-wider font-mono text-slate-500 mb-0.5">Reliability Protocol</div>
                  <div className="text-brand-cyan text-xs font-mono">{selectedProject.stats.primary}</div>
                </div>
                <div>
                  <div className="text-[9px] uppercase tracking-wider font-mono text-slate-500 mb-0.5">Metrics Integrity</div>
                  <div className="text-slate-300 text-xs font-mono">{selectedProject.stats.secondary}</div>
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedProject(null)}
                className="w-full py-4 rounded-xl bg-white text-black font-bold uppercase text-[10px] tracking-[0.2em] shadow-xl hover:shadow-brand-cyan/20 transition-all"
              >
                Close Lab Entry
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({ project, index, onOpenDetails }: { 
  project: typeof PROJECTS[0], 
  index: number,
  onOpenDetails: () => void
}) {
  const isDriveLink = project.github.includes('drive.google.com');

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative h-[480px] rounded-[2.5rem] overflow-hidden glass border-white/5 flex flex-col justify-between"
    >
      {/* Background Image Header with Gradient Overlay */}
      <div 
        onClick={onOpenDetails}
        className="relative h-[200px] w-full overflow-hidden flex-shrink-0 cursor-pointer group/banner"
      >
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover/banner:scale-110 opacity-75"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
        
        {/* Floating Stamp / Date Label */}
        <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full glass border-white/10 flex items-center gap-1.5 backdrop-blur-md">
          <Calendar size={11} className="text-brand-cyan" />
          <span className="text-[9px] font-mono tracking-wider text-slate-200">{project.period}</span>
        </div>

        {/* Dynamic Decrypt Hint Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/banner:opacity-100 transition-opacity flex items-center justify-center">
          <span className="px-3 py-1.5 rounded-lg bg-black/80 border border-brand-cyan/40 text-brand-cyan text-[10px] font-mono tracking-widest uppercase backdrop-blur-md flex items-center gap-2">
            <Info size={12} /> Click to View Details
          </span>
        </div>
      </div>

      {/* Primary Content Container */}
      <div className="flex-1 p-6 flex flex-col justify-between select-none">
        <div>
          {/* Tag & Title */}
          <div className="mb-4">
            <span className="text-[9px] uppercase tracking-[0.25em] font-mono text-brand-cyan block mb-1.5 font-semibold">
              {project.type}
            </span>
            <h3 className="text-2xl font-display font-medium text-white mb-1 tracking-tight group-hover:text-brand-cyan transition-colors">
              {project.title}
            </h3>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.map(t => (
              <span key={t} className="px-2.5 py-1 rounded-lg text-[9px] font-mono bg-white/[0.03] text-slate-400 border border-white/5 uppercase select-none">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Stats & Actions Section */}
        <div>
          {/* Mini Performance report */}
          <div className="grid grid-cols-2 gap-4 py-3 border-t border-white/5 mb-4 select-none bg-white/[0.01] rounded-2xl px-4">
            <div>
              <div className="text-[9px] uppercase tracking-wider font-mono text-slate-500 mb-0.5">Reliability Protocol</div>
              <div className="text-brand-cyan text-xs font-mono">{project.stats.primary}</div>
            </div>
            <div>
              <div className="text-[9px] uppercase tracking-wider font-mono text-slate-500 mb-0.5">Metrics Integrity</div>
              <div className="text-slate-300 text-xs font-mono">{project.stats.secondary}</div>
            </div>
          </div>

          {/* Action Button Row */}
          <div className="flex items-center gap-3">
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 rounded-2xl bg-white text-black font-bold uppercase text-[10px] tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-brand-cyan hover:shadow-[0_0_20px_rgba(0,242,255,0.2)] transition-all cursor-pointer"
            >
              <ExternalLink size={14} /> Live View
            </a>
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-2xl glass border border-white/15 flex items-center justify-center text-slate-300 hover:text-brand-cyan hover:border-brand-cyan/40 transition-all cursor-pointer hover:bg-white/5"
              title={isDriveLink ? "Open Google Drive Source Folder" : "Open GitHub Code Repository"}
            >
              {isDriveLink ? (
                <ExternalLink size={18} />
              ) : (
                <Github size={18} />
              )}
            </a>
          </div>
        </div>
      </div>

      {/* Cybernetic Grid / Scanning Effect Backdrop */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/5 to-transparent" />
      </div>
    </motion.div>
  );
}
