import React from 'react'
import logo from '../assets/04-1024x341.png'
const Navbar = () => {
  return (
    <>
        <div className='navbar'>
            <img className='logo' src={logo} alt="" />
            <div className="nav-items">
                <ul className='nav-list'>
                    <li><a href='#moviesslidercontainer'>About</a></li>
                    <li><a href="#plans">Pricing</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar