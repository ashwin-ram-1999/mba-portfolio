import React from 'react';

const Section = ({ id, title, icon, children }) => (
  <section id={id} className="min-h-screen flex flex-col justify-center items-center py-20 px-4 md:px-10">
    <div className="w-full max-w-5xl">
      <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center">
        <span className="mr-2">{icon}</span> {title}
      </h2>
      {children}
    </div>
  </section>
);

export default Section;
