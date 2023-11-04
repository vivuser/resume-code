'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Home() {

  const router = useRouter()

  return (<>
    <div 
    className='
    h-screen
    flex
    justify-center
    items-center
    bg-gray-300'>
    <Image
    alt="vivek-image"
    className="hidden md:block cursor-pointer p-1 rounded-2xl 
    border border-orange-100 border-t-4
    transition-transform duration-500
    hover:scale-125 transition-transform"
    height="100"
    width="100"
    src="/images/vivek.jpg"
    onClick={() => router.push('/')}
    />
   <h1 className='text-3xl m-6'>Hey! its vivek</h1>
   <button 
   className="bg-cyan-100 m-4 p-2 px-4 border border-pink-50 
   rounded-xl hover:bg-blue-100 hover:scale-105 transition-transform"
   onClick={() => router.push('/about')}>
    About
   </button>
    </div>
    </>)
}
