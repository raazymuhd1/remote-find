import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='w-full sticky bg-(--white) p-[15px] border-[1px] border-( --border-col) top-0 h-[100px]'>
        <Navbar />
    </header>
  )
}

export default Header