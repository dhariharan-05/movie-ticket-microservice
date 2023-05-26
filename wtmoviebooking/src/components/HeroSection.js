import React from 'react';
import '../App.css';
import { Buttonone } from './Buttonone';
import './HeroSection.css';
import Navbar from './Navbar2';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      
  <h2 class="heading2">Book movie tickets all from one place</h2>
      
      <div className='hero-btns'>

        <Buttonone
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          BOOK NOW
        </Buttonone>
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
