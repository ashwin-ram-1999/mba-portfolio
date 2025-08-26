import React from 'react';
import TypingEffect from '../components/TypingEffect';

const Home = ({ name, roles }) => (
  <section
    id="home"
    className="min-h-screen flex flex-col justify-center items-center text-center px-4"
  >
    <div className="w-28 h-28 rounded-full bg-purple-500 mb-6 flex items-center justify-center">
      <span className="text-5xl font-bold">A</span>
    </div>
    <h1 className="text-5xl md:text-7xl font-bold mb-4">
      Hi, I'm <span className="text-purple-400">{name}</span>
    </h1>
    <p className="text-2xl md:text-3xl font-light">
      I am an <TypingEffect texts={roles} />
    </p>
  </section>
);

export default Home;
