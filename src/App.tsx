import React from 'react';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Stats } from './components/Stats';

function App() {
  return (
    <>
      <nav style={{ 
        position: 'fixed', 
        top: 0, 
        width: '100%', 
        padding: '2rem 5%', 
        display: 'flex', 
        justifyContent: 'space-between',
        zIndex: 50,
        mixBlendMode: 'difference'
      }}>
        <div style={{ fontWeight: 800, letterSpacing: '-0.02em', fontSize: '1.2rem' }}>MS.</div>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: 500 }}>
          <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Resume</a>
        </div>
      </nav>

      <main>
        <Hero />
        <Stats />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}

export default App;
