import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // The text will move down as the user scrolls down, creating a parallax effect
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="section" style={{ 
      position: 'relative', 
      overflow: 'hidden',
      backgroundColor: 'var(--color-accent)',
      padding: '0',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Editorial Tags */}
      <div style={{ position: 'absolute', top: '6rem', left: '5%', color: '#fff', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
        Creative<br/>Developer
      </div>
      <div style={{ position: 'absolute', top: '6rem', right: '5%', color: '#fff', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', textAlign: 'right' }}>
        Since 2024<br/>Product Designer
      </div>
      
      {/* Massive Background Text with Parallax */}
      <motion.div style={{ 
        position: 'absolute', 
        width: '100%',
        textAlign: 'center',
        zIndex: 1,
        y,
        userSelect: 'none',
        pointerEvents: 'none'
      }}>
        <motion.h1 
          className="title-large"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ letterSpacing: '-0.02em', color: 'var(--color-bg)' }}
        >
          Mayank
        </motion.h1>
      </motion.div>
      
      {/* Subtitle / Intro Text */}
      <div style={{ position: 'absolute', bottom: '2rem', left: '5%', right: '5%', zIndex: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          style={{ maxWidth: '400px', fontSize: '0.9rem', lineHeight: 1.6, color: '#fff', fontWeight: 500 }}
        >
          Creating autonomous systems and leveraging data to build the future of robotics. 
          Exploring the intersection of hardware, software, and artificial intelligence.
        </motion.p>
        <div style={{ padding: '1rem', border: '2px solid #fff', color: '#fff', fontWeight: 'bold' }}>
          QR CODE
        </div>
      </div>
    </section>
  );
};

