import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { Home, Compass, FlaskConical, Stars, Terminal, MessageSquare } from 'lucide-react';

const NAV_ITEMS = [
  { path: '/', label: 'Universe', icon: Home },
  { path: '/journey', label: 'Journey', icon: Compass },
  { path: '/projects', label: 'Lab', icon: FlaskConical },
  { path: '/skills', label: 'Constellation', icon: Stars },
  { path: '/experience', label: 'Control', icon: Terminal },
  { path: '/contact', label: 'Signal', icon: MessageSquare },
];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] px-4 md:px-0">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass border-white/10 rounded-full px-4 py-3 flex items-center gap-1 md:gap-4 shadow-2xl backdrop-blur-2xl"
      >
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link 
              key={item.path} 
              to={item.path}
              className="relative group"
            >
              <div 
                className={cn(
                  "p-3 rounded-full transition-all duration-300 flex items-center gap-2",
                  isActive ? "bg-brand-cyan/20 text-brand-cyan" : "text-slate-400 hover:text-white"
                )}
              >
                <item.icon size={20} />
                <span className={cn(
                  "text-[10px] uppercase tracking-widest font-mono hidden md:block",
                  isActive ? "block" : "hidden group-hover:block"
                )}>
                  {item.label}
                </span>
              </div>
              {isActive && (
                <motion.div 
                  layoutId="nav-active"
                  className="absolute inset-0 bg-brand-cyan/10 rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          );
        })}
      </motion.div>
    </nav>
  );
}
