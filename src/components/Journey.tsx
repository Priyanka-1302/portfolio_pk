import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { X, Calendar, Briefcase, Eye, ChevronRight } from 'lucide-react';

const JOURNEY_STATIONS = [
  {
    year: '2024',
    title: 'Volunteer (Social Media Team)',
    status: 'Student Council Position',
    color: '#3b82f6', // blue-500
    colorClass: 'from-blue-500',
    summary: 'Contributed to the creative outreach and public brand strategies of the SIES GST Student Council.',
    period: "Aug'24 - Aug'25",
    details: [
      'Active member of the Social Media Team for the SIES GST Student Council.',
      'Designed engaging visual content and coordinated outreach protocols for major student events.',
      'Collaborated on digital PR campaigns, boosting overall engagement across student portals.'
    ]
  },
  {
    year: '2025',
    title: 'LitAmor (Full Stack Developer)',
    status: 'Full Stack Internship',
    color: '#a855f7', // purple-500
    colorClass: 'from-purple-500',
    summary: 'Lead development of a platform combining conscious dating with personal growth to promote meaningful human connections.',
    period: "July'25 - Sept'25",
    details: [
      'A platform designed to promote meaningful human connections by combining conscious dating with personal growth.',
      'Lead a team of 5 members to deliver end-to-end features under strict timelines.',
      'Developed a responsive UI, worked on backend APIs and database integration, and ensured seamless end-to-end functionality by integrating the frontend and backend.'
    ]
  },
  {
    year: '2025',
    title: 'Cindral (Full Stack Developer)',
    status: 'Full Stack Internship',
    color: '#00f2ff', // brand-cyan
    colorClass: 'from-brand-cyan',
    summary: 'Contributed to web, mobile, and machine learning integration projects during a 4-month winter internship.',
    period: "Nov'25 - Feb'26",
    details: [
      'Completed a 4-month Winter Internship at Cindral, a service-based organisation, contributing to Machine Learning integration, data preprocessing, web and mobile application development projects.',
      'Designed and developed 3 projects encompassing responsive web interfaces and cross-platform app features with ML integration, maintaining high attention to detail and following client requirements and service delivery standards.',
      'Collaborated with the development team to implement UI/UX improvements, integrate REST APIs, and ensure timely project delivery within a professional service-based environment.'
    ]
  },
  {
    year: 'Present',
    title: 'Sr. Game Developer (Technical Team)',
    status: 'Student Council Position',
    color: '#ff00c8', // brand-pink
    colorClass: 'from-brand-pink',
    summary: 'Serving as technical lead and coordinator for major gaming and hackathon events as part of the student council.',
    period: "Aug'24 - Present",
    details: [
      'Active leadership position in the Technical Team of SIES GST Student Council (Ongoing).',
      'Hosted 2 game jams as a Technical coordinator and head, managing team resources and challenge structures.',
      'Hosted Bytecamp as a Technical Coordinator to promote developer collaboration and technical excellence.'
    ]
  }
];

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedStation, setSelectedStation] = useState<typeof JOURNEY_STATIONS[0] | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div ref={containerRef} className="relative h-[350vh] px-6">
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center overflow-hidden">
        {/* Section Header */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 text-center z-10">
          <span className="text-[10px] uppercase tracking-[0.4em] font-mono text-brand-cyan">02 // HISTORIC ARCHIVE</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-1">The Interactive Journey</h2>
        </div>

        {/* The "Metro Line" */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2" />
        
        {/* Growing Progress Line */}
        <motion.div
          className="absolute left-1/2 top-0 w-[4px] bg-brand-cyan origin-top -translate-x-1/2 blur-[2px]"
          style={{ height: useTransform(smoothProgress, [0, 1], ['0%', '100%']) }}
        />

        <div className="relative w-full max-w-5xl">
          {JOURNEY_STATIONS.map((station, index) => (
            <Station 
              key={station.title} 
              station={station} 
              index={index} 
              progress={smoothProgress}
              total={JOURNEY_STATIONS.length}
              onOpen={() => setSelectedStation(station)}
            />
          ))}
        </div>

        {/* Backdrop visual */}
        <motion.div 
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(112,0,255,0.05),transparent_50%)]"
          style={{ 
            scale: useTransform(smoothProgress, [0, 1], [1, 1.3]),
            opacity: useTransform(smoothProgress, [0, 0.5, 1], [0.3, 0.8, 0.3])
          }}
        />
      </div>

      {/* Holographic Detail Drawer */}
      <AnimatePresence>
        {selectedStation && (
          <motion.div
            initial={{ opacity: 0, x: 100, filter: 'blur(20px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: 100, filter: 'blur(20px)' }}
            className="fixed inset-y-0 right-0 w-full md:w-[550px] z-[200] p-4 md:p-8 flex items-center"
          >
            <div className="w-full h-[90vh] glass border-white/10 rounded-[3rem] p-8 md:p-12 relative overflow-hidden backdrop-blur-[80px] shadow-2xl flex flex-col justify-between">
              {/* Internal Glow Gradient */}
              <div 
                className="absolute -top-32 -right-32 w-80 h-80 blur-[120px] opacity-30 pointer-events-none"
                style={{ backgroundColor: selectedStation.color }}
              />

              <button 
                onClick={() => setSelectedStation(null)}
                className="absolute top-8 right-8 p-3 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-all transform hover:rotate-90 z-20"
              >
                <X size={24} />
              </button>

              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl md:text-5xl font-display font-bold text-white tracking-widest">{selectedStation.year}</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-2 leading-tight">
                  {selectedStation.title}
                </h3>
                
                <div className="flex flex-wrap items-center gap-4 text-slate-400 text-xs font-mono mb-8">
                  <div className="flex items-center gap-1.5">
                    <Briefcase size={12} className="text-brand-cyan" />
                    <span>{selectedStation.status}</span>
                  </div>
                  <div className="h-3 w-px bg-white/10" />
                  <div className="flex items-center gap-1.5">
                    <Calendar size={12} className="text-brand-cyan" />
                    <span>{selectedStation.period}</span>
                  </div>
                </div>
              </div>

              {/* Bullet Points Container */}
              <div className="flex-1 overflow-y-auto pr-2 mb-8 custom-scrollbar">
                <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-mono mb-4 flex items-center gap-4">
                  Decrypted Log <div className="flex-1 h-px bg-white/10" />
                </h4>
                <ul className="space-y-6">
                  {selectedStation.details.map((detail, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-4 items-start text-slate-300 text-sm md:text-base leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0" style={{ backgroundColor: selectedStation.color }} />
                      <span>{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedStation(null)}
                className="w-full py-5 rounded-2xl bg-white text-black font-bold uppercase text-[10px] tracking-[0.2em] shadow-xl hover:shadow-brand-cyan/20 transition-all"
              >
                Return to Orbit
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop Portal Blur Overlay */}
      <AnimatePresence>
        {selectedStation && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStation(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[150] cursor-pointer"
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function Station({ station, index, progress, total, onOpen }: { 
  station: typeof JOURNEY_STATIONS[0], 
  index: number, 
  progress: any,
  total: number,
  onOpen: () => void
}) {
  const start = index / total;
  const end = (index + 0.8) / total;
  
  const opacity = useTransform(progress, [start - 0.1, start, end, end + 0.1], [0, 1, 1, 0]);
  const scale = useTransform(progress, [start - 0.1, start, end, end + 0.1], [0.8, 1, 1, 0.8]);
  const x = useTransform(progress, [start, end], [index % 2 === 0 ? -50 : 50, index % 2 === 0 ? -20 : 20]);
  const pointerEvents = useTransform(opacity, (v) => (v > 0.15 ? "auto" : "none"));
  const zIndex = useTransform(opacity, (v) => (v > 0.15 ? 40 : 10));

  return (
    <motion.div
      style={{ 
        opacity, 
        scale, 
        x: useTransform(x, (v) => `${v}%`),
        pointerEvents,
        zIndex
      }}
      className={cn(
        "absolute top-1/2 -translate-y-1/2 w-full max-w-md p-8 glass rounded-2xl border-l-4 cursor-pointer hover:bg-white/[0.08] transition-all group",
        index % 2 === 0 ? "left-0" : "right-0 text-right"
      )}
      onClick={onOpen}
      animate={{ 
        borderLeftColor: station.color 
      }}
      whileHover={{ y: -10 }}
    >
      <div className={cn("flex items-center gap-4 mb-4", index % 2 === 0 ? "flex-row" : "flex-row-reverse")}>
        <span className="text-4xl font-display font-bold text-white tracking-widest">{station.year}</span>
        <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
      </div>

      <h3 className="text-2xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
        {station.title}
      </h3>

      <div className={cn("flex items-center justify-between", index % 2 === 0 ? "flex-row" : "flex-row-reverse")}>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: station.color }} />
          <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-slate-400 group-hover:text-brand-cyan transition-colors">
            {station.status}
          </span>
        </div>

        <span className="text-[10px] uppercase tracking-widest font-mono text-brand-cyan/80 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          Scan Station <ChevronRight size={12} />
        </span>
      </div>
    </motion.div>
  );
}
