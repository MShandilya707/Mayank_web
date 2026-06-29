import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '40+', label: 'Team Members Led' },
  { value: '6+', label: 'Autonomous Projects' },
  { value: '<10ms', label: 'Latency Systems' },
  { value: '#1', label: 'Consulting Case' }
];

export const Stats = () => {
  return (
    <section style={{ padding: '0 10% 4rem' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        padding: '3rem 0'
      }}>
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
          >
            <div style={{ fontSize: '4rem', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--color-text)', fontFamily: 'Anton, sans-serif' }}>
              {stat.value}
            </div>
            <div className="text-muted" style={{ fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
