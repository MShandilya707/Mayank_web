import React from 'react';
import { motion } from 'framer-motion';

interface ProjectModalProps {
  project: any;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(10px)',
          cursor: 'pointer'
        }}
      />

      {/* Modal Content */}
      <motion.div
        layoutId={`project-${project.title}`}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1000px',
          height: '80vh',
          backgroundColor: 'var(--color-bg)',
          borderRadius: '24px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          border: '2px solid var(--color-border)',
          zIndex: 1
        }}
      >
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'var(--color-text)',
            color: 'var(--color-bg)',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            fontSize: '1.2rem',
            cursor: 'pointer',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          ✕
        </button>

        {/* Carousel / Image Area */}
        <div style={{
          width: '100%',
          height: '50%',
          backgroundColor: '#ddd',
          position: 'relative',
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory'
        }}>
          {project.images.map((img: string, i: number) => (
            <img 
              key={i} 
              src={img} 
              alt={`${project.title} - view ${i + 1}`} 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                flexShrink: 0,
                scrollSnapAlign: 'start'
              }} 
            />
          ))}
          <div style={{ position: 'absolute', bottom: '1rem', right: '1.5rem', background: 'rgba(0,0,0,0.5)', color: '#fff', padding: '0.2rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem' }}>
            Scroll for more images
          </div>
        </div>

        {/* Text Area */}
        <div style={{ padding: '3rem', overflowY: 'auto' }}>
          <h2 style={{ fontSize: '3rem', fontFamily: 'Anton, sans-serif', textTransform: 'uppercase', marginBottom: '1rem' }}>
            {project.title}
          </h2>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {project.tags.map((tag: string) => (
              <span key={tag} style={{ 
                fontSize: '0.8rem', 
                padding: '0.4rem 1rem', 
                border: '1px solid var(--color-text)',
                color: 'var(--color-text)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {tag}
              </span>
            ))}
          </div>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-muted)' }}>
            {project.longDesc || project.desc}
          </p>
        </div>
      </motion.div>
    </div>
  );
};
