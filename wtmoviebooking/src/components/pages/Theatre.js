import React from 'react';
import Footer from '../Footer';
import Moviemain from '../Moviemain';
import Loginmain from '../Loginmain'
import Theatremain from '../Theatremain'
import Logincontroller from '../Logincontroller';
import { useLocation } from "react-router-dom";
import { ReactSession } from 'react-client-session';
import Navbar from '../Navbar';
import { Apicalls } from '../Apicalls'
import { useState } from "react";

function Theatre() {
//     const TheatreComponent = () => {
  const location = useLocation();
  const passedProps = location.state;
  const[movies,setMovies]=useState(false);
console.log(passedProps);
ReactSession.set("original_title", passedProps.title);
ReactSession.set("popularity",passedProps.popularity);
ReactSession.set("original_language",passedProps.original_language);
//   // Access the passed props here and use them as needed
// };

  return (
    <div> 
      <Navbar />
   <Theatremain />
   <Footer/>
    </div>
  )
}

export default Theatre
