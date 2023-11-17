import React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from './Footer'


const Home = () => {

 
  return (
    <>
    <section>
     <h1 className='head'>Web <span>Development</span></h1>
    <p className='para'>Web development is the work involved in developing a website for the Internet or an intranet.Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. A more comprehensive list of tasks to which Web development commonly refers, may include Web engineering, Web design, Web content development, client liaison, client-side/server-side scripting, Web server and network security configuration, and e-commerce development.
    </p>
    <NavLink to='signin' className="btn3"  >Join Course</NavLink>
    </section>
    <Footer/>
    </>
  )
}

export default Home