import React from 'react'
import wallpaper from '../assets/wallpaper.jpg'
const Hero = () => {
  return (
    <div className='overlay'>
        <img className='wallpaper' src={wallpaper} alt="" />
        <h1 className='herotext'>Experience The Best All-In-One IPTV Service</h1>
        <ul className='herosmalltext'>
          <li>Watch from your Tv, laptop, tablet or phone.</li>
          <li>Thousands of movies, Tv Shows, Sports, and many more...</li>
          <li>Endless entertainment with Disney+, Netflix and more...</li>
        </ul>
    </div>
  )
}

export default Hero