import React from 'react';
import { motion } from 'framer-motion';

export const Achievements = () => {
  return (
    <section className="section">
      <motion.h2 
        className="title-medium"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        style={{ marginBottom: '4rem' }}
      >
        Achievements.
      </motion.h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0 }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-border)', paddingBottom: '1.5rem' }}
        >
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.2rem' }}>PwC Southeast Asia Consulting Case Competition</h3>
            <p className="text-muted">#1 out of 126 Teams, Singapore</p>
          </div>
          <span style={{ color: 'var(--color-muted)' }}>Mar 2025</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-border)', paddingBottom: '1.5rem' }}
        >
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.2rem' }}>Maritime ROBOTX Challenge 2024</h3>
            <p className="text-muted">Overall #5, Wild Card #2, Florida, USA</p>
          </div>
          <span style={{ color: 'var(--color-muted)' }}>Nov 2024</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-border)', paddingBottom: '1.5rem' }}
        >
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.2rem' }}>Port 63 Challenge 2024</h3>
            <p className="text-muted">Semi Finalist (Public Safety and Security), Singapore</p>
          </div>
          <span style={{ color: 'var(--color-muted)' }}>Oct 2024</span>
        </motion.div>
      </div>
    </section>
  );
};
