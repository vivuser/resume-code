'use client'

import Logo from "./logo"

const Navbar = () => {
  return (
    <div className="fixed w-full bg-pink-100 z-10 shadow-sm">
      <div className="
      flex">
      <Logo/>
      <h1 className="flex justify-center p-4">
      This is going to be my navbar where I can navigate to different sections from here
      </h1>
      </div>
    </div>
  )
}

export default Navbar
