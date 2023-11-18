import React from 'react'
import Whatsapp from '@mui/icons-material/WhatsApp'
import Telegram from '@mui/icons-material/Telegram'
import Email from '@mui/icons-material/Email'
const Contact = () => {
  return (
    <div id='contact' className='contact'>
        <h1 className='contactus'>Contact us to get your IPTV</h1>
        <div className="contactflex">
            <div className='contactinfo'> 
                <i><Email style={{fontSize: '5rem', color: 'orange'}}/></i>
                <h1>Contact us on Gmail at:</h1>
                <p>example@gmail.com</p>
            </div>
            <div className='contactinfo'>
                <i><Whatsapp style={{fontSize: '5rem', color: 'orange'}}/></i>
                <h1>Contact us on Whatsapp at :</h1>
                <p>+212613413443</p>
            </div>
            <div className='contactinfo'>
                <i><Telegram style={{fontSize: '5rem', color: 'orange'}}/></i>
                <h1>Contact us on Telegram at :</h1>
                <p>askljflashfals</p>
            </div>
        </div>
    </div>
  )
}

export default Contact