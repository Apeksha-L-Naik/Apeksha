import React from 'react'
import './Navbar.css'
import img1 from './Images/girl code.jpg'

function Home() {
  return (
    <>
    <div className='name'>
      <p>My name is</p>
      <h2>Apeksha L Naik</h2>  
    </div>
    <div className='im'>
       <img src={img1} alt=''/>
    </div>
    <div className='col'>
      <p className='para1'>"Everyone should know how to program a computer, because it teaches you how to think"</p>
      <p className='par'>-Steve Jobs</p>
    </div>
    </>
  )
}

export default Home