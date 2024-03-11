import React, { useEffect, useState } from 'react';
import '../dist/Splash.css';
import { initAnimation, wrapLetters } from '../animation/Animate';
import anime from 'animejs/lib/anime.es.js';

const Splash = () => {
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    wrapLetters();
    initAnimation();

    return () => {
      // Clean up animation when component unmounts
      anime.remove('.ml9 .letter');
      anime.remove('.ml9');
    };
  }, []);

  useEffect(() => {
    if (redirect) {
      window.location.href = '/home';
    }
  }, [redirect]);

  const handleInteraction = () => {
    setRedirect(true);
  };

  useEffect(() => {
    document.addEventListener('click', handleInteraction);
    document.addEventListener('drag', handleInteraction);
    document.addEventListener('keydown', handleInteraction);

    return () => {
      // Clean up event listeners
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('drag', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };
  }, []);

  return (
    <div  className="splash">
    <div className="ml9">
      <span className="text-wrapper">
        <span className="letters">Good Morning</span>
      </span>
    </div>
    </div>
  );
};

export default Splash;
