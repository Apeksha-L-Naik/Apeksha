import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <div>
        <div className="nav">
    <h2 className="logo">{props.title}</h2>
    <ul>
      <li>Home</li>
      <li to="/about">{props.about}</li>
      <li to="/contact">Contact</li>
    </ul>  
    </div> 
    </div>
  )
}
Navbar.proTypes = {title:PropTypes.string,
                    about:PropTypes.string}