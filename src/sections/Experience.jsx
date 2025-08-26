import React from 'react';
import Section from '../components/Section';
import { BriefcaseIcon } from '../components/icons';

const Experience = ({ experience }) => (
  <Section
    id="experience"
    title="Professional Experience"
    icon={<BriefcaseIcon />}
  >
    <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-purple-800/20">
      <h3 className="text-3xl font-bold text-purple-400">{experience.role}</h3>
      <p className="text-xl font-medium mb-1">{experience.company}</p>
      <p className="text-md text-gray-400 mb-6">{experience.duration}</p>
      <ul className="space-y-3 list-disc list-inside text-gray-300">
        {experience.points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  </Section>
);

export default Experience;
