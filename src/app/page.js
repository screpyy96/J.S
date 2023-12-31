"use client";

import Head from "next/head";
import "./global.css";
import HeroComponent from "./components/hero/hero";
import WhatsAppChat from "@/whatsapp";
import ProjectsPage from "./components/cards/cards";
import HomeStuff from "./components/random/home-stuff";
import Altele from "./components/random/alte";
import IconAnimation from "./components/icons/animations";
import { faPaintRoller, faFill, faUser, faSprayCan, faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './components/icons/icons.module.css'
import Navbar from "./components/navbar/navbar";

export default function Home() {
  return (
   <div style={{overflow: "hidden"}}>
      <Head>
        <title>Painting and Decorating London</title>
      </Head>
      <Navbar/>
      <HeroComponent />

      <div>
        <ProjectsPage />
      </div>
      <WhatsAppChat /> 
       

      <HomeStuff />
      <Altele/>
      <div className={styles.container}>
        <IconAnimation icon={faPaintRoller} label="Interior Painting Projects" initialValue={0} finalValue={1500} duration={4000} />
        <IconAnimation icon={faFill} label="Exterior Painting Projects" initialValue={0} finalValue={900} duration={4000} />
        <IconAnimation icon={faSprayCan} label="Cabinets Refinishing" initialValue={0} finalValue={260} duration={4000} />
        <IconAnimation icon={faStar} label="Happy Costumers" initialValue={0} finalValue={2500} duration={4000} />
      </div>

      </div>
  );
}
