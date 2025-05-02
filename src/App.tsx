import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Team from './components/Team';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import ScrollToTop from './components/ScrollToTop';

// Import Montserrat font weights
import '@fontsource/montserrat/400.css'; // Regular
import '@fontsource/montserrat/500.css'; // Medium
import '@fontsource/montserrat/600.css'; // Semi-bold
import '@fontsource/montserrat/700.css'; // Bold

function App() {
  // Refs for cursor elements
  const cursorDot = useRef<HTMLDivElement>(null);
  const cursorCircle = useRef<HTMLDivElement>(null);
  const cursorText = useRef<HTMLDivElement>(null);
  
  // Position trackers
  const mousePos = useRef({ x: 0, y: 0 });
  const circlePos = useRef({ x: 0, y: 0 });
  const circleVelocity = useRef({ x: 0, y: 0 });
  const animationFrame = useRef<number>();

  useEffect(() => {
    // Hide default cursor and show custom cursor
    document.body.style.cursor = 'none';
    gsap.set([cursorDot.current, cursorCircle.current], { opacity: 1 });

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      // Position the dot cursor exactly at mouse position
      if (cursorDot.current) {
        gsap.to(cursorDot.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1
        });
      }
    };

    // Animation loop for smooth trailing effect
    const animate = () => {
      // Physics-based smoothing
      const damping = 0.15;
      const diffX = mousePos.current.x - circlePos.current.x;
      const diffY = mousePos.current.y - circlePos.current.y;
      
      circleVelocity.current.x += diffX * damping;
      circleVelocity.current.y += diffY * damping;
      
      // Apply friction
      circleVelocity.current.x *= 0.7;
      circleVelocity.current.y *= 0.7;
      
      // Update position
      circlePos.current.x += circleVelocity.current.x * 0.05;
      circlePos.current.y += circleVelocity.current.y * 0.05;
      
      // Apply to DOM
      if (cursorCircle.current) {
        gsap.set(cursorCircle.current, {
          x: circlePos.current.x,
          y: circlePos.current.y
        });
      }

      animationFrame.current = requestAnimationFrame(animate);
    };

    // Hover effects
    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.onclick !== null ||
        target.classList.contains('cursor-hover');

      if (cursorCircle.current && cursorDot.current) {
        if (interactive) {
          // Hover state
          gsap.to(cursorDot.current, { 
            scale: 0.5,
            opacity: 0.8,
            duration: 0.3
          });
          gsap.to(cursorCircle.current, {
            scale: 1.5,
            backgroundColor: 'rgba(99, 102, 241, 0.5)',
            borderColor: 'rgba(99, 102, 241, 0.8)',
            duration: 0.3
          });
          
          // Show text if element has data-cursor-text attribute
          if (target.dataset.cursorText && cursorText.current) {
            cursorText.current.textContent = target.dataset.cursorText;
            gsap.to(cursorText.current, {
              opacity: 1,
              scale: 1,
              duration: 0.2
            });
          }
        } else {
          // Default state
          gsap.to(cursorDot.current, { 
            scale: 1,
            opacity: 1,
            duration: 0.3
          });
          gsap.to(cursorCircle.current, {
            scale: 1,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderColor: 'rgba(255, 255, 255, 0.3)',
            duration: 0.3
          });
          
          // Hide text
          if (cursorText.current) {
            gsap.to(cursorText.current, {
              opacity: 0,
              scale: 0.8,
              duration: 0.2
            });
          }
        }
      }
    };

    // Start animation and event listeners
    animationFrame.current = requestAnimationFrame(animate);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleHover);

    // Cleanup
    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleHover);
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <div 
      className="relative min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white overflow-hidden font-montserrat"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {/* Main Dot Cursor (precise) */}
      <div
        ref={cursorDot}
        className="fixed w-2 h-2 rounded-full bg-white pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 mix-blend-difference opacity-0 transition-all duration-100 ease-linear"
      />
      
      {/* Trailing Circle (with latency) */}
      <div
        ref={cursorCircle}
        className="fixed w-8 h-8 rounded-full border border-white/30 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-40 opacity-0 transition-all duration-100 ease-out"
      >
        {/* Optional text element */}
        <div
          ref={cursorText}
          className="absolute top-full mt-2 text-xs font-medium text-white opacity-0 scale-80 transform origin-top whitespace-nowrap"
        />
      </div>

      {/* Page content */}
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Events />
          <Team />
          <Resources />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;