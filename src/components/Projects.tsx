import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectModal } from './ProjectModal';

const projects = [
  {
    title: "Autonomous Aerial-Bipedal Robotic System",
    year: "2025",
    desc: "Engineered a 2.8kg bipedal humanoid integrated with a custom hexacopter. Achieved 58% liftoff thrust efficiency with full payload and simulated 16-DOF locomotion via NVIDIA Isaac Gym.",
    longDesc: "Developed a fully functional flying humanoid robot for public safety. Engineered a custom hexacopter flight platform utilizing 6x KV1000 BLDC motors and a Matek F405 controller, successfully lifting a 2.8kg payload at 58% maximum thrust. Designed and 3D-printed a 16-DOF bipedal structure powered by 30KG servos. Integrated OpenAI's Whisper and GPT-4o on a Milk-V Duo microcomputer for local speech recognition and natural language processing. Bipedal locomotion and dynamic Zero Moment Point (ZMP) stability were trained from scratch using Deep Reinforcement Learning (RL) policies within NVIDIA Isaac Gym.",
    images: [
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop"
    ],
    tags: ["Robotics", "NVIDIA Isaac Gym", "LLMs", "Hardware Integration"],
    span: "col-span-2"
  },
  {
    title: "6-DOF Kinesthetic Telepresence System",
    year: "2025",
    desc: "Engineered a high-performance C++ telepresence engine utilizing a 6-DOF Extended Kalman Filter to translate ESP32 smart-glove data into absolute 3D coordinates at 100Hz.",
    longDesc: "A real-time robotic telepresence system designed to capture high-fidelity human kinesthetic data. The hardware edge-node features an ESP32-WROOM interfacing with an MPU9250 IMU, running Mahony sensor fusion, and broadcasting raw UDP telemetry at 100Hz. A native C++ Linux daemon repacks this stream into Protobuf messages over gRPC to a Bazel-managed Central Engine. The core engine utilizes the Eigen library to process kinematics through a custom 6-DOF Extended Kalman Filter (EKF), stripping gravity to calculate highly stable absolute 3D coordinates and velocities for robotic control or visualizers.",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
    ],
    tags: ["C++", "Kalman Filter", "gRPC / Protobuf", "ESP32"],
    span: "col-span-1"
  },
  {
    title: "Workwave",
    year: "2024",
    desc: "Industrial auditory protection system leveraging UWB trilateration and IMUs for real-time warnings.",
    longDesc: "Designed for high-noise industrial environments, Workwave uses Ultra-Wideband (UWB) trilateration and IMU data to track worker positions with sub-1m accuracy. It delivers real-time auditory warnings to prevent workplace accidents.",
    images: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop"
    ],
    tags: ["UWB", "IMU"],
    span: "col-span-1"
  },
  {
    title: "Exoplanet Habitability",
    year: "2024",
    desc: "Processed a 1000+ planetary dataset, achieving 0.8 explained variance classifying habitability.",
    longDesc: "A machine learning pipeline built in Python to classify the habitability of exoplanets. The model processed over 1000 planetary datasets, applying PCA, K-Means clustering, and Decision Trees to achieve a high variance explanation score.",
    images: [
      "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1200&auto=format&fit=crop"
    ],
    tags: ["Machine Learning", "Python"],
    span: "col-span-1"
  },
  {
    title: "Automated Dispensary",
    year: "2024",
    desc: "Mechatronics dosage monitoring and delivery system programmed in C++ for dementia patients.",
    longDesc: "A complete mechatronics solution for healthcare. This automated dispensary monitors dosage timings and securely delivers medication to dementia patients, minimizing human error in care facilities.",
    images: [
      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1200&auto=format&fit=crop"
    ],
    tags: ["Arduino", "Mechatronics"],
    span: "col-span-1"
  },
  {
    title: "SkillSwap",
    year: "2024",
    desc: "React.js and Vite based platform using Supabase for a barter system of skills and courses in the education industry. Full-stack deployment with scalable architecture.",
    longDesc: "SkillSwap is a full-stack platform built with React, Vite, and Supabase. It introduces a modern barter system for the education industry, allowing users to trade skills and courses seamlessly. The architecture is highly scalable, featuring real-time chat and secure authentication.",
    images: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
    ],
    tags: ["React", "Vite", "Supabase"],
    span: "col-span-2"
  }
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section className="section">
      <style>
        {`
          .bento-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          @media (min-width: 768px) {
            .bento-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            .col-span-2 {
              grid-column: span 2;
            }
          }
        `}
      </style>
      <motion.h2 
        className="title-medium"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        style={{ marginBottom: '4rem' }}
      >
        Projects.
      </motion.h2>

      <div className="bento-grid">
        {projects.map((project, index) => (
          <motion.div
            layoutId={`project-${project.title}`}
            key={index}
            className={project.span}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.01, backgroundColor: 'rgba(0, 0, 0, 0.02)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setSelectedProject(project)}
            style={{ 
              display: 'flex', 
              flexDirection: 'column',
              padding: '2.5rem',
              backgroundColor: 'var(--color-bg)',
              borderBottom: '2px solid var(--color-border)',
              cursor: 'pointer'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--color-text)' }}>{project.title}</h3>
              <span style={{ color: 'var(--color-text)', opacity: 0.8, fontSize: '0.9rem', fontWeight: 500 }}>{project.year}</span>
            </div>
            
            <p className="text-muted" style={{ lineHeight: 1.6, flexGrow: 1, marginBottom: '2.5rem', fontSize: '1.1rem', maxWidth: project.span === 'col-span-2' ? '80%' : '100%', color: 'var(--color-muted)' }}>{project.desc}</p>
            
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              {project.tags.map(tag => (
                <span key={tag} style={{ 
                  fontSize: '0.75rem', 
                  padding: '0.4rem 1rem', 
                  border: '1px solid var(--color-text)',
                  borderRadius: '0',
                  color: 'var(--color-text)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};
