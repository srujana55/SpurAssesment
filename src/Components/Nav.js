import React from 'react'
import {useState} from 'react'
import {NavLink,Link} from 'react-router-dom'
import './Nav.css'

const Nav = () => {

  const [isClicked, setIsClicked]=useState(false)
  
 const handleMenuClick=()=>{
      setIsClicked(!isClicked)
  }

const ele=(<> <div className="smallMenu">
<div className="menuCon">
  <NavLink to='/emotions'>
  <p className="cursor-pointer font-semibold ">Emotions</p>
  </NavLink>
  <NavLink to='/manifesto'>
  <p className="cursor-pointer font-semibold ">Manifesto</p>
  </NavLink>
  <NavLink to='/awareness'>
  <p className="cursor-pointer font-semibold ">
    Self awareness test
  </p>
  </NavLink>

  <NavLink to ='/workwithus'>
  <p className="cursor-pointer font-semibold ">Work with us</p>
  </NavLink>
</div>
</div></>)

  return (
    <>
    <nav className="fixed top-[0] left-[0]  bg-white z-[100]">
    <header className="flex  justify-between h-20 items-center py-3 px-10 w-screen">
      <div className=""><Link to='/'> <img width={50} height={50} alt="" src="/ahead-logo.png" /></Link></div>
      <div className='menu ' onClick={handleMenuClick}>
     <span></span>
     <span></span>
     <span></span>
      </div>
      <div className="linkelements">
        <div className="flex gap-7 items-center">
          <NavLink to='/emotions'>
          <p className="cursor-pointer font-semibold ">Emotions</p>
          </NavLink>
          <NavLink to='/manifesto'>
          <p className="cursor-pointer font-semibold ">Manifesto</p>
          </NavLink>
          <NavLink to='/awareness'>
          <p className="cursor-pointer font-semibold ">
            Self awareness test
          </p>
          </NavLink>

          <NavLink to ='/workwithus'>
          <p className="cursor-pointer font-semibold ">Work with us</p>
          </NavLink>
        </div>
      </div>
      <div className="download">
        <button className="cursor-pointer text-white bg-black rounded-full px-4 py-2 font-semibold">
          Download App
        </button>
      </div>
    </header>
    
  </nav>
   {isClicked?ele:""}
  </>
  )
}

export default Nav
