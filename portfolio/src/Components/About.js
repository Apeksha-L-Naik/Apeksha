import React from 'react'
import img2 from './Images/girl face.jpg'
import { NavLink } from 'react-router-dom'

function About() {
  return (
    <>
    <div className='im1'>
       <img src={img2} alt=''/>
    </div>
    <div className='para2'>An passionate and entusiastic person with a dream to achieve my goals.
    I am continually seeking ways to grow and learn, embracing every opportunity for personal and professional development.I'm excited about the future and the possibilities it holds. Whether it's pursuing new opportunities, meeting new people, or delving deeper into my passions, I approach each day with enthusiasm and a commitment to making a positive impact.As I navigate this temporary human experience, I am committed to injecting a dose of cosmic curiosity, creativity, and kindness into the world. So, fellow Earth dwellers, let's make this cosmic rendezvous memorable and leave an indelible mark on the tapestry of existence!
    </div>
    <NavLink to='/edu' className='educate'>Education</NavLink>
    </>
    
  )
}

export default About