import React, { useEffect } from 'react';

const ParticleBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    const makeParticle = (x, y, dirX, dirY, size, color) => ({ x, y, dirX, dirY, size, color });

    const init = () => {
      particles = [];
      const numberOfParticles = (canvas.height * canvas.width) / 9000;
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 2 + 1;
        const x = Math.random() * (window.innerWidth - size * 4) + size * 2;
        const y = Math.random() * (window.innerHeight - size * 4) + size * 2;
        const dirX = Math.random() * 0.4 - 0.2;
        const dirY = Math.random() * 0.4 - 0.2;
        const color = 'rgba(192, 132, 252, 0.8)'; // purple-400
        particles.push(makeParticle(x, y, dirX, dirY, size, color));
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (const p of particles) {
        p.x += p.dirX;
        p.y += p.dirY;
        if (p.x > canvas.width || p.x < 0) p.dirX = -p.dirX;
        if (p.y > canvas.height || p.y < 0) p.dirY = -p.dirY;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2, false);
        ctx.fillStyle = p.color;
        ctx.fill();
      }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas id="particle-canvas" className="fixed top-0 left-0 w-full h-full -z-10"></canvas>;
};

export default ParticleBackground;
