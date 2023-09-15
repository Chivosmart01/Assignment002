import React from 'react'
import facebook from "../Assets/icons8-facebook.svg";
import instagram from "../Assets/icons8-instagram.svg";
import twitter from "../Assets/icons8-twitter.svg";
import youtube from "../Assets/icons8-youtube.svg";
function Footer() {
  return (
    <footer className='footer-container'>
    <div className='footericon-container'>
      <img src={facebook} className='footer-icon' alt="" />
      <img src={instagram} className='footer-icon' alt="" />
      <img src={twitter} className='footer-icon' alt="" />
      <img src={youtube} className='footer-icon' alt="" />
    </div>
    <div className='footer-policy'>
    <p>condition of use</p>
  &nbsp;&nbsp;&nbsp;
  <p>privacy & policy</p>
  &nbsp;&nbsp;&nbsp;
  <p>Press Room</p>
    </div>
    <div style={{margin:'25px 0'}}>
    &copy; 2021 MovieBox by Adriana Eka Prayudha
    </div>
    </footer>
  )
}

export default Footer