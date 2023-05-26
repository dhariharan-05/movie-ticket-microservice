import React, { useState, useEffect } from 'react';
import { Buttonone } from './Buttonone';
import { Link } from 'react-router-dom';
import './Navbar2.css';
// import { findDOMNode } from 'react-dom';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import Button from 'react-bootstrap/Button';
// import Dropdown from 'react-bootstrap/Dropdown';
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
import Select from "react-select";

function Navbar2() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  // this.textInput = React.createRef();
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [open, setOpen] = React.useState(false);
  const [buttonText, setButtonText] = useState('Click');
  const [Menuone, setMenuoneText] = useState('Pondicherry');
  const [Menutwo, setMenutwoText] = useState('Mumbai');
  const handleOpen = () => {
    setButtonText('New text');
    setOpen(!open);
  };
  const options = [
    { value: "Pondicherry", label: "Pondicherry" },
    { value: "Mumbai", label: "Mumbai" },
    { value: "Chennai", label: "Chennai" }
  ];
  const [selectedOption, setSelectedOption] = useState(null);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  const handleMenuOne = (event) => {
    // do something
    setButtonText(event.target.value);
    setOpen(false);
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  return (
    <>
      <nav className='navbar2'>
        <div className='navbar2-container'>
      
          {/* <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <i class='fas fa-solid fa-film'></i>CINEONE   
     </Link> */}
          <div className='menu2-icon' onClick={handleClick}>
        
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav2-menu active' : 'nav2-menu'}>
          {/* <ul className='nav-menu active'> */}
            <li className='nav2-item'>
             <h1 className='nav2-place'>
                Place
            </h1>

            </li>
            
<li className='nav2-item'>
<Select className='dropx'
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
</li>




            {/* <li className='nav2-item'>
              <Link
                to='/movies'
                className='nav2-links'
                onClick={closeMobileMenu}
              >
                Movies
              </Link>
            </li> */}
            {/* <li className='nav2-item'>
              <Link
                to='/experiences'
                className='nav2-links'
                onClick={closeMobileMenu}
              >
                Experiences
              </Link>
            </li>
            <li className='nav2-item'>
              <Link
                to='/products'
                className='nav2-links'
                onClick={closeMobileMenu}
              >
                Promotions
              </Link>
            </li>
            <li className='nav2-item'>
              <Link
                to='/contactus'
                className='nav2-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav2-links-mobile'
                onClick={closeMobileMenu}
              >
               SIGN IN
              </Link>
            </li> */}
 
          </ul>
         
        </div>
      </nav>
    </>
  );
}

export default Navbar2;
