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
      <style>
        {`
          .modal-container {
            position: relative;
            width: 100%;
            max-width: 1200px;
            height: 85vh;
            background-color: var(--color-bg);
            border-radius: 24px;
            overflow: hidden;
            border: 2px solid var(--color-border);
            z-index: 1;
          }
          .modal-content-wrapper {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
          }
          .modal-image-area {
            width: 100%;
            height: 40%;
            background-color: #ddd;
            position: relative;
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
          }
          .modal-text-area {
            width: 100%;
            height: 60%;
            padding: 2rem;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
          }
          @media (min-width: 768px) {
            .modal-content-wrapper {
              flex-direction: row;
            }
            .modal-image-area {
              width: 55%;
              height: 100%;
            }
            .modal-text-area {
              width: 45%;
              height: 100%;
              padding: 3.5rem;
            }
          }
        `}
      </style>

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
        className="modal-container"
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

        <div className="modal-content-wrapper">
          {/* Carousel / Image Area */}
          <div className="modal-image-area">
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
            {project.images.length > 1 && (
              <div style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem', background: 'rgba(0,0,0,0.6)', color: '#fff', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.85rem', backdropFilter: 'blur(4px)' }}>
                Scroll for more images →
              </div>
            )}
          </div>

          {/* Text Area */}
          <div className="modal-text-area">
            <h2 style={{ fontSize: '3rem', fontFamily: 'Anton, sans-serif', textTransform: 'uppercase', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              {project.title}
            </h2>
            
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
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
            
            <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'var(--color-muted)' }}>
              {project.longDesc || project.desc}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
