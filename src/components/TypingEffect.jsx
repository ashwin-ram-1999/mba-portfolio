import React, { useState, useEffect } from 'react';

const TypingEffect = ({ texts, speed = 150, delay = 1000 }) => {
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!texts || texts.length === 0) return;

    const currentString = texts[textIndex] ?? '';
    const handleTyping = () => {
      if (isDeleting) {
        setCurrentText(currentString.substring(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      } else {
        setCurrentText(currentString.substring(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }

      if (!isDeleting && charIndex === currentString.length) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const t = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [charIndex, isDeleting, textIndex, texts, speed, delay]);

  return <span className="text-purple-400 border-r-4 border-purple-400 pr-1">{currentText}</span>;
};

export default TypingEffect;
