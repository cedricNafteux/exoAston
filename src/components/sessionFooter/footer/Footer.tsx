import React from 'react'
import Discord from '../discord/Discord'
import Vercel from '../vercel/Vercel'
import './Footer.css'

const Footer = () => {
  return (
    <div className='containerFooter'>
      <Discord />
      <Vercel />
    </div>
  )
}

export default Footer