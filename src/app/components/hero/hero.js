import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";


const HeroComponent = () => {
  return (
    <div className={styles.heroImageContainer}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/painters.jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
        />
        <div className={styles.heroTextContainer}>
          <h1 className={styles.heroText}>Creating a Unique and Fresh Look</h1>
          <h3 className={styles.quoteText}>Free Quotes </h3>
          <div>
            <a href="tel:+7930097259" className={styles.contactButton}>Call Joseph</a>
            <button className={styles.contactButton}>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
