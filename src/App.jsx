import React from 'react';

// Layout
import Header from './layout/Header';
import Footer from './layout/Footer';

// Background
import ParticleBackground from './components/ParticleBackground';

// Sections
import Home from './sections/Home';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';

// Data
import { portfolioData } from './data/portfolioData';

export default function App() {
  return (
    <div className="bg-gray-900 text-white font-sans selection:bg-purple-500 selection:text-white min-h-screen">
      <ParticleBackground />
      <Header />
      <main className="relative z-10">
        <Home name={portfolioData.name} roles={portfolioData.roles} />
        <About summary={portfolioData.profileSummary} skills={portfolioData.skills} />
        <Experience experience={portfolioData.experience} />
        <Projects projects={portfolioData.projects} />
        <Education education={portfolioData.education} />
      </main>
      <Footer name={portfolioData.name} />
    </div>
  );
}
