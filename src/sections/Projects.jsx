import React from 'react';
import Section from '../components/Section';
import { CodeIcon } from '../components/icons';

const Projects = ({ projects }) => (
  <Section id="projects" title="My Projects" icon={<CodeIcon />}>
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <div
          key={project.title}
          className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-purple-800/20 transform hover:-translate-y-2 transition-transform duration-300"
        >
          <h3 className="text-2xl font-bold text-purple-400 mb-3">
            {project.title}
          </h3>
          <p className="text-gray-300">{project.description}</p>
        </div>
      ))}
    </div>
  </Section>
);

export default Projects;
