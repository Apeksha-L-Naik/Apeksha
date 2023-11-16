import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    <header>
        <h1 className='logo'>LOGO</h1>
        <div className='btn'>
            <input className='btn1' type='search' placeholder='Search here'></input>
            <button className='btn2'>Search</button>
        </div>
        <nav>
            <ul>
                <li>
                 <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                <NavLink to='/about'>About</NavLink>
                </li>
                <li>
                <NavLink to='/contact'>Contact</NavLink>
                </li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Navbar
