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
import { useNavigate } from "react-router-dom";

function Theatre() {
//     const TheatreComponent = () => {
  const location = useLocation();
  const passedProps = location.state;
  const[movies,setMovies]=useState(false);
  const navigate = useNavigate();

console.log(passedProps);
ReactSession.set("original_title", passedProps.title);
ReactSession.set("popularity",passedProps.popularity);
ReactSession.set("original_language",passedProps.adult);
//   // Access the passed props here and use them as needed
// };
// if (passedProps.adult === "false") {
//   console.log(passedProps.adult);
// navigate("/theatre");
// } else {
//   navigate("/verify");
// }
// const handleRedirect = () => {
//   if (passedProps.adult === "false") {
//     navigate("/theatre");
//   } else {
//     navigate("/verify");
//   }
// }
  return (
    <div> 
      <Navbar />
   <Theatremain />
   {/* <button onClick={handleRedirect}>Redirect</button> */}

   <Footer/>
    </div>
  )
}

export default Theatre
