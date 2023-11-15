// pages/index.js
import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from './style.module.css';

export default function Altele() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('infoContainer');
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const isVisible = elementPosition < window.innerHeight * 0.4;

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
  
        <title>Professional Painting Services in London</title>
        <Head>
  <title>J.S Painting & Decorating | Professional Painters in London</title>
  <meta name="description" content="J.S Painting & Decorating provides exceptional painting and decorating services in London, transforming spaces with creativity, precision, and elegance." />
  <meta name="keywords" content="painting and decorating, London painters, interior painting, exterior painting, residential painting, commercial painting, painters and decorators, professional painters, London, home improvement" />
  <meta name="author" content="J.S Painting & Decorating" />
  <meta property="og:title" content="J.S Painting & Decorating | Professional Painters in London" />
  <meta property="og:description" content="Discover top-notch painting and decorating services in London with J.S Painting & Decorating. Transform your space with our creative, precise, and elegant approach to painting." />
 <meta property="og:title" content="Professional Painting Services in London" />
        <meta property="og:description" content="J.S Painting offers professional painting services in London, transforming spaces with precision and elegance." />
        <meta property="og:image" content="URL_TO_YOUR_IMAGE" />
        <meta property="og:url" content="URL_TO_YOUR_PAGE" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* Add other meta tags as needed */}
      </Head>
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`} id="infoContainer">
  <h2 className={styles.heading}>Not Your Average Painting Service</h2>
  <h3 className={styles.subheading}>Elevate Your Space with J.S Painting & Decorating</h3>
  <p className={styles.paragraph}>
    Welcome to J.S Painting & Decorating, where we redefine the ordinary and transform your space into a work of art. Based in the vibrant heart of London, our team takes immense pride in delivering exceptional painting and decorating services that go beyond expectations.
  </p>
  <p className={styles.paragraph}>
    Dreaming of a home or business space that reflects your style and personality? Look no further. Our skilled team of painters and decorators is dedicated to enhancing your environment with precision and elegance. Whether it's revitalizing the interiors of your home or giving your business a fresh, inviting appeal, we bring a unique blend of creativity, meticulous attention to detail, and an unwavering passion for perfection to every project.
  </p>
</div>

    </div>
  );
}
