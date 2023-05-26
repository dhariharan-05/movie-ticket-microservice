import React from 'react';
import '../../App.css';

import HeroSection from '../HeroSection';
import Footer from '../Footer';
import { Route,Routes } from 'react-router-dom';

import Moviemain from '../Moviemain';

function Home() {
  return (
    <>
      <HeroSection />
      <Moviemain />
      <Footer />
    </>
  );
}

export default Home;
