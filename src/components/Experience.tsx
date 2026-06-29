import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Team Lead",
    company: "Archimedes Autonomous Vehicles",
    date: "Sep 2024 - Present",
    description: "Leading a 40-member team to create a fully autonomous sea and air vehicle for ROBOTX 2026. Designed sub-10ms latency inter-system communication."
  },
  {
    role: "Digital, Cloud and Data Intern",
    company: "PricewaterhouseCoopers",
    date: "May 2025 - Jul 2025",
    description: "Supported ETL pipeline development using PySpark and SQL in Databricks. Conducted market research and created strategic data governance presentations."
  },
  {
    role: "Mechatronics Intern",
    company: "Griffin Labs / Lionsbot",
    date: "6 Months",
    description: "Contributed to mechatronics engineering and development within a leading robotics automation company."
  }
];

export const Experience = () => {
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
        Experience.
      </motion.h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ x: 10 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 3fr', 
              gap: '2rem',
              borderTop: '1px solid var(--color-border)',
              paddingTop: '2rem',
              cursor: 'default'
            }}
          >
            <div className="text-muted" style={{ fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.05em' }}>
              {exp.date}
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 600 }}>{exp.role}</h3>
              <h4 className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '1rem', fontWeight: 400 }}>{exp.company}</h4>
              <p className="text-muted" style={{ lineHeight: 1.6 }}>{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
