import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './icons.module.css';

const IconAnimation = ({ icon, label, initialValue, finalValue, duration }) => {
  const [currentValue, setCurrentValue] = useState(initialValue);
  const containerRef = useRef();

  useEffect(() => {
    let animationStart;

    const updateNumber = (timestamp) => {
      if (!animationStart) {
        animationStart = timestamp;
      }

      const elapsedTime = timestamp - animationStart;
      const progress = Math.min(1, elapsedTime / duration);
      const newValue = initialValue + progress * (finalValue - initialValue);

      setCurrentValue(newValue);

      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      }
    };

    const observer = new IntersectionObserver((entries) => {
      const isVisible = entries[0].isIntersecting;
      if (isVisible) {
        requestAnimationFrame(updateNumber);
      }
    });

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [initialValue, finalValue, duration]);

  return (
    <div ref={containerRef} className={styles.iconContainer}>
      <FontAwesomeIcon icon={icon} className={styles.icon} />
      <span className={styles.iconNumber}>{Math.round(currentValue)}</span>
      <span className={styles.iconLabel}>{label}</span>
    </div>
  );
};

export default IconAnimation;
