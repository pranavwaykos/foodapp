import React from 'react'
import css from '../styles/Footer.module.css'
import {UilFacebook,UilGithub,UilInstagram} from '@iconscout/react-unicons'
const Footer = () => {
  return (
    <div className={css.container}>
      <span>ALL RIGHT RESERVED</span>
        <div className={css.social}>
          <UilFacebook/>
          <UilGithub/>
          <UilInstagram/>
        </div>
    </div>
  )
}

export default Footer
