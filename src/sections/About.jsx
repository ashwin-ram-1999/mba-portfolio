import React from 'react';
import Section from '../components/Section';
import { UserIcon } from '../components/icons';

const About = ({ summary, skills }) => (
  <Section id="about" title="About Me" icon={<UserIcon />}>
    <div className="grid md:grid-cols-5 gap-10 items-center">
      <div className="md:col-span-2 flex justify-center">
        <div className="w-48 h-48 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 p-1">
          <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
            <span className="text-6xl font-bold text-white">A</span>
          </div>
        </div>
      </div>
      <div className="md:col-span-3 text-lg text-gray-300">
        <p className="mb-6">{summary}</p>
        <h3 className="text-2xl font-semibold text-purple-400 mb-4">
          Key Skills
        </h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-gray-800 text-purple-300 px-4 py-2 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

export default About;
