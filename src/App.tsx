/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import SmoothScroll from './components/SmoothScroll';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';

// Background is lazy-loaded to prioritize UI interactivity
const Background3D = lazy(() => import('./components/Background3D'));

// Components
import Hero from './components/Hero';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ControlRoom from './components/ControlRoom';
import Contact from './components/Contact';

function App() {
  const location = useLocation();

  return (
    <main className="relative selection:bg-brand-cyan selection:text-midnight min-h-screen">
      <SmoothScroll />
      <Cursor />
      <Navbar />
      
      {/* Immersive Background Layer */}
      <Suspense fallback={<div className="fixed inset-0 bg-[#020205]" />}>
        <Background3D />
      </Suspense>

      {/* Routed Pages with Cinematic Transitions */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Hero /></PageWrapper>} />
          <Route path="/journey" element={<PageWrapper><Journey /></PageWrapper>} />
          <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
          <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} />
          <Route path="/experience" element={<PageWrapper><ControlRoom /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
    </main>
  );
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
      animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 w-full"
    >
      {children}
    </motion.div>
  );
}

export default App;
