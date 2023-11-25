import React from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <>
      <header>
        <div className='logo'>
            <p>Naikzz</p>
        </div>
        
            <ul>
              <li>
                <NavLink to='/'className='active'>HOME</NavLink>
              </li>
              <li>
                <NavLink to='/about' className='active'>ABOUT</NavLink>
              </li>
              <li>
                <NavLink to='/project' className='active'>PROJECTS</NavLink>
              </li>
              <li>
                <NavLink to='/contact' className='active'>CONTACT</NavLink>
              </li>
            </ul>
        
      </header>
    </>
  )
}

export default Navbar