import React from 'react'
import avatar from '../images/profile_pic-removebg-preview.png'
import '../App.css'
import Navbar from './Navbar'

const Header = () => {
  return (
    <>
      <div>

        <header className='head-bg'>
          <div>
            <Navbar />
          </div>
          <div className='flex flex-col justify-around p-10 md:flex-row'>
            <div className='my-auto px-auto'>
              <h1 className='text-left text-8xl '>Hey Guys, <br /> I am <span className='text-white'>Manoj</span></h1>
            </div>
            <div>
              <img src={avatar} alt="" className='border-black border-solid border-2 rounded-lg bg-white mt-20 w-full ' />
            </div>
          </div>
        </header>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L48,122.7C96,117,192,107,288,90.7C384,75,480,53,576,74.7C672,96,768,160,864,165.3C960,171,1056,117,1152,101.3C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      </div>
    </>
  )
}

export default Header