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
        </div>
      </div>
    );
  };

export default HeroComponent;
