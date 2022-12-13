import React from 'react'
import insta from '../images/icons8-instagram.gif'
import linkedIn from '../images/icons8-linkedin-circled.gif'
import twitter from '../images/icons8-twitter.gif'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Conatctme = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div id='contactme'>
            <div className='text-center'>

                <h1 className='text-6xl font-bold' data-aos="fade-right">
                    Contact me
                </h1>
            </div>
            <div className='flex justify-around my-20'>
                <a href="https://www.instagram.com/its._manoj_official/" data-aos="flip-up">
                    <img src={insta} alt="my insta id" className='w-20 md:w-32' />
                </a>
                <a href="https://www.linkedin.com/in/manoj-m-286044243" data-aos="flip-down">
                    <img src={linkedIn} alt="my linkedIn id" className='w-20 md:w-32' />
                </a>
                <a href="https://twitter.com/manoj09460283" data-aos="flip-up">
                    <img src={twitter} alt="my twitter id" className='w-20 md:w-32' />
                </a>
            </div>
        </div>
    )
}

export default Conatctme