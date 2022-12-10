import React from 'react'

const Navbar = () => {
    const items = [
      {name : "Home"},
      {name : "Who Am I"},
      {name : "Skills"},
      {name : "certificate"},
      {name : "Contact Me"},
    ]
  return (
    <div className='hidden md:block'>
      <ul className="flex justify-around p-5">
        {items.map((list, index) => (
          <li key={index} className="pb-2 hover:border-b-2 ">
            <a href="#" className='text-xl'>{list.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar