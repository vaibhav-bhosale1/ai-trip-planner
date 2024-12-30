import React from 'react'
import { Button } from '../ui/button'
const Hero = () => {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h1 className='font-extrabold text-[60px] text-center mt-16'>
        <span className='text-[#797912]'>DISCOVER YOUR ADVENTURE WITH AI</span>
        </h1>
        <p className='text-gray-400 font-semibold'>Your personal trip planner,Don't wait plan instantly</p>
        <Button>Get Started,Its free</Button>
    </div>
  )
}

export default Hero
