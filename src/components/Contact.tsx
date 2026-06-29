import React from 'react';
import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <section className="section" style={{ minHeight: '60vh', alignItems: 'center', textAlign: 'center' }}>
      <motion.h2 
        className="title-medium"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
      >
        Let's build something.
      </motion.h2>
      
      <motion.p
        className="text-muted"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{ marginTop: '1.5rem', marginBottom: '3rem', fontSize: '1.1rem' }}
      >
        Interested in autonomous systems or data-driven robotics? Get in touch.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        style={{ display: 'flex', gap: '2rem', justifyContent: 'center', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}
      >
        <a href="mailto:mshandilya707@gmail.com" style={{ color: 'var(--color-text)', textDecoration: 'none', borderBottom: '2px solid var(--color-text)', paddingBottom: '4px' }}>Email</a>
        <a href="#" style={{ color: 'var(--color-text)', textDecoration: 'none', borderBottom: '2px solid var(--color-text)', paddingBottom: '4px' }}>LinkedIn</a>
        <a href="#" style={{ color: 'var(--color-text)', textDecoration: 'none', borderBottom: '2px solid var(--color-text)', paddingBottom: '4px' }}>GitHub</a>
      </motion.div>
    </section>
  );
};
