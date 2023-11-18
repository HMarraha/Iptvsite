import React from 'react'
import Tv from '@mui/icons-material/Tv'
import Movie from '@mui/icons-material/Movie'
import SportsFootball from '@mui/icons-material/SportsFootball'
const Iptvinfo = () => {
  return (
    <div className='offers'>
        <div>
            <i><Movie style={{fontSize: '5rem', color: 'orange'}}/></i>
            <h1>Movies</h1>
            <p>We have nearly 20,000 movies and all the new releases. We have almost all popular movies.</p>
        </div>
        <div>
            <i><SportsFootball style={{fontSize: '5rem', color: 'orange'}}/></i>
            <h1>Live Sports</h1>
            <p>We serve over 15,000 TV channels. And the number of running TV channels is increasing day by day.</p>
        </div>
        <div>
            <i><Tv style={{fontSize: '5rem', color: 'orange'}}/></i>
            <h1>TV Shows</h1>
            <p>We also have a large number (200K+) of TV series in our VOD section.</p>
        </div>
    </div>
  )
}

export default Iptvinfo