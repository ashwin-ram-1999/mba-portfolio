import React from 'react';
import Section from '../components/Section';
import { GraduationCapIcon } from '../components/icons';

const Education = ({ education }) => (
  <Section id="education" title="Education" icon={<GraduationCapIcon />}>
    <div className="space-y-8">
      {education.map((edu) => (
        <div
          key={edu.institute}
          className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-purple-800/20"
        >
          <h3 className="text-2xl font-bold text-purple-400">{edu.degree}</h3>
          <p className="text-lg font-medium">{edu.institute}</p>
          <p className="text-md text-gray-400">{edu.year}</p>
        </div>
      ))}
    </div>
  </Section>
);

export default Education;
