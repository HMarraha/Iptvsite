import React from 'react'
import Bein from '../assets/Bein.png'
import Disney from '../assets/Disney.png'
import Nba from '../assets/Nba.png'
import Netflix from '../assets/Netflix.png'
import Skysports from '../assets/Skysports.png'
import Hbo from '../assets/Hbo.png'
const Streamingservices = () => {
    const streamingServices = [
        {
            id: 1,
            imagePath: '/src/assets/Bein.png',
        },
        {
            id: 2,
            imagePath: '/src/assets/Disney.png',
        },
        {
            id: 3,
            imagePath: '/src/assets/Nba.png',
        },
        {
            id: 4,
            imagePath: '/src/assets/Netflix.png',
        },
        {
            id: 5,
            imagePath: '/src/assets/Skysports.png',
        },
        {
            id: 6,
            imagePath: '/src/assets/Hbo.png',
        },
    ]
    console.log(streamingServices)
  return (
    <div className='streamingservices'>
        {streamingServices?.map((item)=> (
            <img className='streamingserviceimage' key={item.id} src={item.imagePath} alt="" />
        ))}
        <h1>We Provide Entertainment From Many Streaming Services</h1>
    </div>
  )
}

export default Streamingservices