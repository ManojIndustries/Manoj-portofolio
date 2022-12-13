import React from 'react'
import { useState } from 'react'
import openburger from '../images/open-burger.svg'
import close from '../images/close.svg'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const items = [
    {
      name: "Home",
      link: "#home"
    },
    {
      name: "Who Am I",
      link: "#whoamI"
    },
    {
      name: "Skills",
      link: "#skills"
    },
    {
      name: "Contact Me",
      link: "#contactme"
    },
  ]
  return (
    <nav>


      <img src={!open
        ? openburger : close} alt="" className='fixed z-20 w-14 right-5 top-5 bg-white rounded-full p-2 md:hidden duration-500' onClick={() => setOpen(!open)} />

      <ul className={`flex  flex-col md:flex-row md:justify-around pt-2 
       bg-white md:bg-transparent  w-full text-center rounded-b-xl md:static fixed z-10 duration-500 ${!open ? 'top-[-100%]' : 'top-0'}`}>
        {items.map((list, index) => (
          <li key={index} className="pb-2 hover:border-b-2 my-10 ">
            <a href={list.link} className='text-2xl font-bold md:text-xl'>{list.name}</a>
          </li>
        ))}
      </ul>
    </nav>

  )
}

export default Navbar