import React, { useState, useEffect } from 'react';
import { Buttonone } from './Buttonone';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { ReactSession } from 'react-client-session';
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [usern, setUsern] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const username = ReactSession.get("username");
    setUsern(username);
  }, []);
  const handleLogout = () => {
    ReactSession.set("username", null);
    setUsern(null);
  };
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
//  const usern= ReactSession.get("username");

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <i class='fas fa-solid fa-film'></i>CINEONE   
     </Link>
          <div className='menu-icon' onClick={handleClick}>
        
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {/* <ul className='nav-menu active'> */}
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/movies'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Movies
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link
                to='/experiences'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Experiences
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Promotions
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link
                to='/contactus'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>

            <li>
              {/* <Link
                to='/login'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
               SIGN IN
              </Link> */}
              <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
  {usern ? (
    <div>
      Hello {usern},Log Out?
    
    </div>
  ) : (
    'SIGN IN'
  )}
</Link>

            </li>
          </ul>
          {/* {usern ? (
  <div >
    <span style={{ textTransform: 'capitalize', color: 'lightcoral',marginRight:'10px' }}>Hello {usern}</span>
    <Buttonone buttonStyle="btn--outline">LOG OUT</Buttonone>
  </div>
) : (
  <Buttonone buttonStyle="btn--outline">SIGN IN</Buttonone>
)} */}
<div>
      {usern && windowWidth > 0.5 * window.innerWidth ? (
        <div>
          <span style={{ textTransform: 'capitalize', color: 'lightcoral', marginRight: '10px' }}>
            Hello {usern}
          </span>
          <Buttonone buttonStyle="btn--outline" onClick={handleLogout}>LOG OUT</Buttonone>
        </div>
      ) : (
        // !usern && windowWidth <= 0.5 * window.innerWidth && (
          <Buttonone buttonStyle="btn--outline">SIGN IN</Buttonone>
        )
      }
    </div>

          {/* {button && <Buttonone buttonStyle='btn--outline'>SIGN IN</Buttonone>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
