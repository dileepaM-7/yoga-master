import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'

const navLinks = [
    {name: 'Home', route: '/'},
    {name: 'Instructors', route: '/instructors'},
    {name: 'Classes', route: '/classes'},
]
const Navbar = () => {
    const [navBg, setNavBg] = useState('bg-[#15151580');
  return (
    <nav>
        <div className='lg:w-[95%] mx-auto sm:px-6 lg:px-6'>
            <div className='px-4 py-4 flex items-center justify-center'>
                {/* Logo */}
                <div>
                    <h1 className= 'text-2x1 inline-flex gap-3 items-center font-bold'>YogaMaster <img src='/yoga-logo.png' className='w-11 h-11'></img></h1>
                    <p className='font-bold text-[13px] tracking-[8px]'>Quick Explore</p>
                </div>

                {/* Mobile navbar */}
                {/* navigations links navbar */}
                <div className='hidden md:block text-black dark:text-white'>
                    <div className='flex'>
                        <ul className='ml-10 flex items-center space-x-4 pr-4'>
                            {navLinks.map((link) =>(
                                <li key={link.route}>
                                    <NavLink 
                                    to={link.route} 
                                    className={({ isActive }) => 
                                    `font-bold ${isActive ? 'text-secondary' : `${navBg.includes('bg-transparent') ? 
                                    'text-white' : 'text-black dark:text-white'}`} hover:text-secondary duration-300`
                                }
                                >
                                    {link.name}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
