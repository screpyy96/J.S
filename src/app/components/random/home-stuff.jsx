// pages/index.js
import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';

export default function HomeStuff() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('infoContainer');
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const isVisible = elementPosition < window.innerHeight * 0.7;

        if (isVisible) {
          setIsVisible(isVisible);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.firstContainer}>
      <Head>
        <title>Professional Painting Services in London</title>
        <meta name="description" content="J.S Painting offers professional painting services in London, transforming spaces with precision and elegance." />
        <meta name="keywords" content="painting services, London painters, interior painting, exterior painting, painters and decorators london, painters in london, painters near me" />
        <meta name="author" content="Your Name" />
        <meta property="og:title" content="Professional Painting Services in London" />
        <meta property="og:description" content="J.S Painting offers professional painting services in London, transforming spaces with precision and elegance." />
        <meta property="og:image" content="URL_TO_YOUR_IMAGE" />
        <meta property="og:url" content="URL_TO_YOUR_PAGE" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* Add other meta tags as needed */}
      </Head>

      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`} id="infoContainer">
        <h2 className={styles.heading}>Professional Painting Services in London</h2>
        <h3 className={styles.subheading}>Transforming Spaces with Precision and Elegance</h3>
        <p className={styles.paragraph}>
          At J.S Painting, we take pride in delivering top-notch painting services in the heart of London.
          Our skilled team of painters is dedicated to transforming your space with precision and elegance.
        </p>
        <p className={styles.paragraph}>
          Whether you're looking to refresh the interiors of your home or enhance the curb appeal of your business,
          we bring creativity, attention to detail, and a passion for perfection to every project.
          From meticulous preparation to the final strokes, we ensure a flawless finish that exceeds expectations.
        </p>
        <button className={styles.button}>Discover Our Painting Expertise</button>
      </div>
    </div>
  );
}
