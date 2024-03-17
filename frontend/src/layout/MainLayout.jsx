import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/headers/Navbar'

const MainLayout = () => {
  return (
    <div className="dark:bg-black overflow-hidden">
        <Navbar/>
        <Outlet/>
        <footer>Footer</footer>
    </div>
  )
}

export default MainLayout
