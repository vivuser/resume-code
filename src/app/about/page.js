'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const About = () => {
    const router = useRouter()

  return (
    <div className='
    h-screen
    flex
    flex-col
    justify-center
    items-center
    bg-cyan-50'>
     <h1 className='
     text-center
     text-3xl'>
        A professional developer with enthusiastic mindset and killer attitude!
        <br/>
        I live by code
    </h1> 
    <p className='
    text-center
    mt-4'>Days and nights figting with challenges helped me to carve great
      programming skills <br/> And I continue to learn it because I enjoy it 
      like no one else. <br/> Catch me on my social handle and we can have 
      a growth plan.
    </p>
    <button className='
    bg-orange-300
    text-white
    text-xl
    rounded-md
    p-2
    m-6
    border-t-2
    hover:bg-orange-400
    hover:scale-105 transition-transform
    '
    onClick={() => router.push('/')}>
        Connect
    </button>
    </div>
  )
}

export default About;
