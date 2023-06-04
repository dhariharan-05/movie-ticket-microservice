import React, { useState, useEffect } from 'react';
import { Buttonone } from './Buttonone';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaCoins } from 'react-icons/fa';
// import { faCoinVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { ReactSession } from 'react-client-session';
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [usern, setUsern] = useState();
  const [coin, setCoin] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const username = ReactSession.get("username");
    const coin = ReactSession.get("coins");
    setCoin(coin);
    setUsern(username);
  });
  const handleLogout = () => {
    ReactSession.set("username", null);
    ReactSession.set("coins",null);
    ReactSession.set("discountedValue",null);
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
  const pStyle = {
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '14vh',
  };
  const iconStyle = {
    marginRight: '0.5em', // Adjust the margin as needed
  };

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
            {/* <li className='nav-item'>
              <Link
                to='/contactus'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
              
            </li> */}
            <li className='nav-item'>
  {usern !== null? (
    // <Link
    //   to='/coininformation'
    //   className='nav-links'
    //   onClick={closeMobileMenu}
    // >
    <div style={pStyle}>
      {/* <FontAwesomeIcon icon={faCoins} style={iconStyle} /> */}
      <FontAwesomeIcon icon={faCoins} className="coin-icon" style={iconStyle} beat />
      {/* <FaCoins className="nav-icon" style={iconStyle} /> */}
      <span>Coins:{coin}</span>
    </div>
    // </Link>
  ) : (
    <p style={pStyle}>No Coin Information</p>
  )}
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
