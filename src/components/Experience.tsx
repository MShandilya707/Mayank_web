import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Mechatronics Engineering Intern",
    company: "Griffin Labs (Lionsbot International)",
    date: "Jan 2026 - May 2026",
    description: [
      "Owned end-to-end mechatronics engineering—spanning parametric CAD, fluid dynamics, structural fabrication, and embedded C++ programming—delivering 3 commercial robotic cleaning units for international deployment at InterClean Amsterdam.",
      "Redesigned the T1 EV3 fluid-handling subsystem, reducing platform width by 40mm and increasing waste tank capacity by 20%, while engineering a custom silicone drip pan and quick-disconnect nozzle assembly.",
      "Engineered embedded C++ control logic to synchronously modulate dual 24V pumps, serial telemetry, and complex solenoid valve sequences, successfully mitigating severe inductive EMI through optimized flyback diode integration.",
      "Built dual 5-DoF robotic arms and specialized sensory test rigs, implementing a distributed CAN bus network and soldering 10+ STM32 ESCs to command BLDC motors through a 9:1 cycloidal gear transmission."
    ]
  },
  {
    role: "Team Lead",
    company: "Archimedes Autonomous Vehicles",
    date: "Sep 2024 - Present",
    description: [
      "Leading a cross-functional engineering team of 40 members to architect and deploy a fully autonomous multi-vehicle system (USV & UAV) for the ROBOTX 2026 international competition.",
      "Spearheading the systems engineering lifecycle, coordinating agile timelines, and bridging the gap between hardware, software, and mechanical sub-teams.",
      "Architected a robust C++ ROS 2 network infrastructure achieving sub-10ms latency for critical inter-system communication over lossy RF links."
    ]
  },
  {
    role: "Digital, Cloud and Data Intern",
    company: "PricewaterhouseCoopers",
    date: "May 2025 - Jul 2025",
    description: [
      "Engineered enterprise-scale ETL pipelines in Databricks using PySpark and SQL to migrate legacy infrastructure into a decentralized Medallion Data Architecture (Bronze/Silver/Gold).",
      "Conducted comprehensive quantitative market research analyzing key metrics and emerging tech trends within the insurance sector to support strategic client initiatives.",
      "Developed and delivered strategic data governance presentations to senior stakeholders, translating complex data models into actionable business insights."
    ]
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
              <ul className="text-muted" style={{ lineHeight: 1.6, paddingLeft: '1.2rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
