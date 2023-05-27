import React from 'react';
import '../../App.css';

import Footer from '../Footer';
import Moviemain from '../Moviemain';
import Navbar from '../Navbar';
function Movies() {
  return (
    <>
    <Navbar />
      <Moviemain />
      <Footer />
    </>
  );
}

export default Movies;
