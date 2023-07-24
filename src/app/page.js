"use client"

import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme'; 
import './global.css'
import HeroComponent from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import WhatsAppChat from '@/whatsapp';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Painting and Decorating London</title>
      </Head>
      <div>
        <Navbar />
        <HeroComponent />
      </div>
      <div>
        <WhatsAppChat/>
      </div>
    </ThemeProvider>
  );
}
