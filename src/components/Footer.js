import React from 'react'
import { BsLinkedin, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
    <div className='homePage-socials'>
      <h1>Get In <span>Touch</span></h1>
      <div className='socialList'>
        <Link to="https://www.linkedin.com/in/gfg-amity-university-noida-8a4665255/"><BsLinkedin></BsLinkedin></Link>
        <Link to="https://www.instagram.com/gfg.amity/?r=nametag"><BsInstagram></BsInstagram></Link>
        <Link to="https://chat.whatsapp.com/La1ap7lSEY1JZoBsiLaR2b"><BsWhatsapp></BsWhatsapp></Link>
      </div>
    </div>
    <div className="homePage-footer">
    Copyright 2023 | Geeks For Geeks | Amity University Noida | All Rights
    Reserved
  </div></>
  )
}
