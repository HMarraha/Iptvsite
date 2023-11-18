import React from 'react'
import Copyright from '@mui/icons-material/Copyright'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='policies'>         
            <p>Terms of use</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
        </div>
        <div className='copyright'>
            <p>All rights reserved 2023. </p>
            <Copyright/>
        </div>
    </div>
  )
}

export default Footer