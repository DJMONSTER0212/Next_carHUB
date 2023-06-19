"use client";
import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
  const handleScroll = ()=>{

  }
  return (
    <div className='hero '>
      <div className='row padding-x'>
      <div className='flex-1 pt-36  col-lg-6 col-md-6'>
        <h1 className='hero__title'>Find, Book, or Rent a Car -- quickly and easily!</h1>
        <p className='hero__subtitle'>Streamline your car rental experience with our effortless booking process.</p>

        <CustomButton
          title="Explore Cars"
          containerStyles = "bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className='hero__image-container col-lg-6 col-md-6'>
        <div className='hero__image'>
          <Image src="/hero.png" alt='hero ' fill className='object-contain'/>
        </div>
          <div className='hero__image-overlay'/>
      </div>
    </div>
    </div>
  )
}

export default Hero
