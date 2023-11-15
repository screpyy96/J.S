// pages/YourComponent.js
import React, { useState, useEffect } from 'react';
import styles from './styles.module.css'; // Adjust the path based on your project structure

const YourComponent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage} style={{ transform: `translateY(-${scrollPosition * 0.5}px)` }}>
        {/* Your fixed background image */}
      </div>
      <div className={styles.overlayText}>
        <p>Your Text</p>
      </div>
    </div>
  );
};

export default YourComponent;
