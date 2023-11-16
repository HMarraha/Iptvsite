import React from 'react'
import logo from '../assets/04-1024x341.png'
const Navbar = () => {
  return (
    <>
        <div className='navbar'>
            <img className='logo' src={logo} alt="" />
            <div className="nav-items">
                <ul className='nav-list'>
                    <li>About</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar