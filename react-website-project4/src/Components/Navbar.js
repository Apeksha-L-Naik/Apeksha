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
                 <NavLink className="active" to='/'>Home</NavLink>
                </li>
                <li>
                <NavLink className="active" to='/about'>About</NavLink>
                </li>
                <li>
                <NavLink className="active" to='/contact'>Contact</NavLink>
                </li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Navbar
