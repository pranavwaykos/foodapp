import css from "../styles/Hero.module.css"
import Cherry from '../assets/Cherry.png'
import React from 'react'
import Image from "next/image"
import HeroImage from "../assets/HeroImage.png"
import {UilPhone} from '@iconscout/react-unicons'
import Pizza1 from '../assets/p1.jpg'

const Hero = () => {
  return (
    <div className={css.container}>
        <div className={css.left}>
        <div className={css.chery}>
            <span>More than faster</span>
            <Image src={Cherry} alt="" width={40} height={25}/>
            </div>
        
        <div className={css.heroText}>
            <span>Be The Fastest</span>
            <span>In Delivering</span>
            <span>
                Your<span style={{color:"var(--themeRed)"}}>Pizza</span>
            </span>
        </div>
        <span className={css.minitext}>
            Our mission is to filling your tummy Our mission is to filling your tummy Our mission is to filling your tummy
        </span>
        <button className={`btn ${css.btn}`}>
            Get Started
        </button>
        </div>
        
        <div className={css.rightSide}>
            <div className={css.imageContainer}>
                <Image src={HeroImage} alt="" layout="intrinsic"></Image>
            </div>
            <div className={css.contactUs}>
                <span>Contact Us</span>
                <div>
                    <UilPhone color="white"/>
                </div>
            </div>

            <div className={css.pizza}>
                <div>
                    <Image src={Pizza1} alt="" objectFit="cover" layout="intrinsic"/>
                </div>
                <div className={css.detail}>
                    <span>Italian Pizza</span>
                    <span>$7.49</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero