import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const MainHeading = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default MainHeading