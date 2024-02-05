import React from 'react';
import './navbar.scss';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {

  function showElement(className) {
    const nav = document.querySelector(className);
    nav.classList.toggle('show');
  }

  return (
    <nav className='navbar navbar-expand-lg' id='navbar-style'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='/'>
          <img src="https://zappys-washes-s3-bucket.s3.amazonaws.com/Main%20Logo_Zappy%27s%5BBlack%5D.png?AWSAccessKeyId=AKIA6OF7CZDJM3CZH36B&Expires=1707152924&Signature=Wv0WoIJjeFyWpcHWqmTYvX608Gg%3D" alt="Zappy's Washes" className='logo-img rounded' />
        </a>
        <button 
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => showElement('.navbar-collapse')}
        >
          <span className='navTogglerIcon'><MenuIcon /></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <div className='me-auto ms-auto '>
            <ul className='navbar-nav mb-2 mb-lg-0'>
              <li className='nav-item p-2'>
                <a className='nav-link rounded hoverEffect' href='/'>Home</a>
              </li>
              <li className='nav-item p-2'>
                <a className='nav-link rounded hoverEffect' href='#'>Book</a>
              </li>
              <li className='nav-item p-2'>
                <a className='nav-link rounded hoverEffect' href='#'>Gift Cards</a>
              </li>
              <li className='nav-item p-2'>
                <a className='nav-link rounded hoverEffect' href='#'>Products</a>
              </li>
              <li className='nav-item p-2'>
                <a className='nav-link rounded hoverEffect' href='#'>Unlimited</a>
              </li>
            </ul>
          </div>
          <div className='endNav'>
            <ul className='navbar-nav mb-2 mb-lg-0'>
              <li className='nav-item p-2'> 
                <div className='dropdown'>
                  <button className='buttonStyle dropdown' type='button' id='dropdownMenuButton1' data-bs-toggle='dropdown' aria-expanded='false' onClick={() => showElement('.dropdown-menu')}>
                    <AccountCircleIcon className='navIcon' />
                  </button>
                  <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
                    <li><a className='dropdown-item' href='#'>Login</a></li>
                    <li><a className='dropdown-item' href='#'>Register</a></li>
                  </ul>
                </div>
              </li>
              <li className='nav-item p-2'>
                <a className='nav-link' href='#'><ShoppingCartIcon className='navIcon' /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;