import React from 'react';
import './navbar.scss';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

  function showNav() {
    const nav = document.querySelector('.navbar-collapse')
    nav.classList.toggle('show')
  }

  return (
    <nav className='navbar navbar-expand-lg' id='navbar-style'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='/'>Logo Goes Here</a>
        <button 
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={showNav}
        >
          <span className=''><MenuIcon /></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a className='nav-link active' href='/'>Home</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Book</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Gift Cards</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Products</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Unlimited</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar