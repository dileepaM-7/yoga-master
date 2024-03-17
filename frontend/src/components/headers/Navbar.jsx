import React from 'react'

const navLinks = [
    {name: 'Home', route: '/'},
    {name: 'Instructors', route: '/instructors'},
    {name: 'Classes', route: '/classes'},
]
const Navbar = () => {
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
                <div>
                    
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
