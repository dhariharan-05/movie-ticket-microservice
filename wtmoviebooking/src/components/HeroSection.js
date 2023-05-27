import React from 'react';
import '../App.css';
import { Buttonmov } from './Buttonmov';
import './HeroSection.css';
import { Link } from "react-router-dom";
import ScrollButton from 'react-scroll-button';
function HeroSection() {
  return (
    <div className='hero-container'>
    
      <video id="vid" src='/videos/video-3.mp4' autoPlay loop muted />
      {/* <ScrollButton
      behavior="smooth"
      buttonBackgroundColor="red"
      iconType="arrowUp"
      style={{ fontSize: '24px' }}
      targetId="vid"
    /> */}
  <h2 class="heading2">Book movie tickets all from one place</h2>
      
      <div className='hero-btns'>

        <Buttonmov
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          BOOK NOW
        </Buttonmov>
       
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
