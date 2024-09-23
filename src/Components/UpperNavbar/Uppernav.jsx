import React from 'react'
import './Uppernav.css'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import youtube_icon from '../../assets/youtube.png'
import fb_icon from '../../assets/facebook.png'
import insta_icon from '../../assets/instagram.png'


const Uppernav = () => {
  return (
    <div>
    <nav className="navbar " data-bs-theme="dark">
        <div className="left">
        <img src={mail_icon}/><p className="fs-6">art@gmail.com</p>
         <img src={call_icon}/><p className="fs-6">+91 9650927491</p>
        </div>
        <div className="right">
            <img src={youtube_icon} alt="wh"/>
            <img src={fb_icon} alt="in"/>
            <img src={insta_icon} alt="pin"/>
        </div>
    </nav>
</div>
  )
}

export default Uppernav
