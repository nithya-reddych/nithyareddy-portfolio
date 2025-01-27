import React from 'react';
import { Scene } from './components/Scene';
import { Controls } from './components/Controls';
import { Navigation } from './components/Navigation';
import { AboutSection } from './components/sections/AboutSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { useStore } from './store/useStore';


export default function App() {
  const { activeSection } = useStore();

  return (
    <div className="w-full h-screen bg-cream relative">
      <Scene />
      <Navigation />
      {activeSection === 'about' && <AboutSection />}
      {activeSection === 'projects' && <ProjectsSection />}
      {activeSection === 'skills' && <SkillsSection />}
      <Controls />
    </div>
  );
}