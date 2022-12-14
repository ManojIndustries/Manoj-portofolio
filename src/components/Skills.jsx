import React from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import Share from '../images/download-removebg-preview.svg'
import HTML from '../images/HTML.svg'
import CSS from '../images/CSS.svg'
import JS from '../images/JS.svg'
import Reactjs from '../images/reactjs.svg'
import bootstrap from '../images/bootstrap.svg'
import tailwind from '../images/tailwind.svg'
import python from '../images/python.svg'

const Skills = () => {

    useEffect(() => {
        Aos.init();
    }, [])

    const items = [
        {
            skillname: "HTML",
            description: "HTML stands for Hyper Text Markup Language HTML is the standard markup language for creating Web pages HTML describes the structure of a Web page HTML consists of a series of elements HTML elements tell the browser how to display the content",
            symbol: <p className='absolute top-6 right-6'>
                <img src={HTML} alt="" className='w-10 ' />
            </p>
        },
        {
            skillname: "CSS",
            description: "CSS stands for Cascading Style Sheets CSS describes how HTML elements are to be displayed on screen, paper, or in other media CSS saves a lot of work. It can control the layout of multiple web pages all at once",
            symbol: <p className='absolute top-6 right-6'>
                <img src={CSS} alt="" srcset="" className='w-10' />
            </p>
        },
        {
            skillname: "Javascript",
            description: "Javascript is used by programmers across the world to create dynamic and interactive web content like applications and browsers. JavaScript is so popular that it's the most used programming language in the world, used as a client-side programming language by 97.0% of all websites.",
            symbol: <p className='absolute top-6 right-6'>
                <img src={JS} alt="" />
            </p>
        },
        {
            skillname: "React JS",
            description: "The React. js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.",
            symbol: <p className='absolute top-6 right-6'>
                <img src={Reactjs} alt="" />
            </p>
        },
        {
            skillname: "Bootstrap",
            description: "Bootstrap is a free, open source front-end development framework for the creation of websites and web apps. Designed to enable responsive development of mobile-first websites, Bootstrap provides a collection of syntax for template designs.",
            symbol: <p className='absolute top-6 right-6'>
                <svg width="256px" height="256px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" className='w-10 h-10' preserveAspectRatio="xMidYMid">
                    <g>
                        <path d="M0,222.991225 C0,241.223474 14.7785318,256 33.0087747,256 L222.991225,256 C241.223474,256 256,241.221468 256,222.991225 L256,33.0087747 C256,14.7765263 241.221468,0 222.991225,0 L33.0087747,0 C14.7765263,0 0,14.7785318 0,33.0087747 L0,222.991225 Z" fill="#563D7C"></path>
                        <path d="M106.157563,113.238095 L106.157563,76.9845938 L138.069328,76.9845938 C141.108559,76.9845938 144.039202,77.2378593 146.861345,77.7443978 C149.683488,78.2509362 152.179961,79.1554557 154.35084,80.4579832 C156.52172,81.7605107 158.258397,83.5695496 159.560924,85.8851541 C160.863452,88.2007585 161.514706,91.1675823 161.514706,94.7857143 C161.514706,101.298352 159.560944,106.001853 155.653361,108.896359 C151.745779,111.790864 146.752832,113.238095 140.67437,113.238095 L106.157563,113.238095 L106.157563,113.238095 Z M72.07493,50.5 L72.07493,205.5 L147.186975,205.5 C154.133788,205.5 160.899594,204.631661 167.484594,202.894958 C174.069594,201.158255 179.93088,198.480877 185.068627,194.862745 C190.206375,191.244613 194.294803,186.577293 197.334034,180.860644 C200.373264,175.143996 201.892857,168.37819 201.892857,160.563025 C201.892857,150.866431 199.541107,142.581033 194.837535,135.706583 C190.133963,128.832132 183.00635,124.020088 173.454482,121.270308 C180.401295,117.941627 185.647508,113.672295 189.193277,108.462185 C192.739047,103.252075 194.511905,96.7395349 194.511905,88.9243697 C194.511905,81.6881057 193.317939,75.6097352 190.929972,70.6890756 C188.542005,65.7684161 185.177193,61.8247114 180.835434,58.8578431 C176.493676,55.8909749 171.283644,53.756309 165.205182,52.4537815 C159.12672,51.151254 152.397096,50.5 145.016106,50.5 L72.07493,50.5 L72.07493,50.5 Z M106.157563,179.015406 L106.157563,136.466387 L143.279412,136.466387 C150.660401,136.466387 156.594049,138.166883 161.080532,141.567927 C165.567016,144.968971 167.810224,150.649353 167.810224,158.609244 C167.810224,162.661552 167.122789,165.990183 165.747899,168.595238 C164.373009,171.200293 162.527789,173.262597 160.212185,174.782213 C157.89658,176.301828 155.219203,177.387252 152.179972,178.038515 C149.140741,178.689779 145.956833,179.015406 142.628151,179.015406 L106.157563,179.015406 L106.157563,179.015406 Z" fill="#FFFFFF"></path>
                    </g>
                </svg>
            </p>
        },
        {
            skillname: "Tailwind CSS",
            description: "Tailwind CSS makes it quicker to write and maintain the code of your application. By using this utility-first framework, you don't have to write custom CSS to style your application. Instead, you can use utility classes to control the padding, margin, color, font, shadow, and more of your application.",
            symbol: <p className='absolute top-6 right-6'>
                <svg width="256px" height="256px" viewBox="0 -51 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" className='w-10 h-10' preserveAspectRatio="xMidYMid">
                    <defs>
                        <linearGradient x1="-2.77777778%" y1="32%" x2="100%" y2="67.5555556%" id="linearGradient-1">
                            <stop stop-color="#2298BD" offset="0%"></stop>
                            <stop stop-color="#0ED7B5" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <g>
                        <path d="M128,-1.0658141e-14 C93.8666667,-1.0658141e-14 72.5333333,17.0666667 64,51.2 C76.8,34.1333333 91.7333333,27.7333333 108.8,32 C118.537481,34.4343704 125.497363,41.4985481 133.201067,49.3184 C145.750756,62.0567704 160.275437,76.8 192,76.8 C226.133333,76.8 247.466667,59.7333333 256,25.6 C243.2,42.6666667 228.266667,49.0666667 211.2,44.8 C201.462519,42.3656296 194.502637,35.3014519 186.798933,27.4816 C174.249244,14.7432296 159.724563,-1.0658141e-14 128,-1.0658141e-14 Z M64,76.8 C29.8666667,76.8 8.53333333,93.8666667 0,128 C12.8,110.933333 27.7333333,104.533333 44.8,108.8 C54.5374815,111.23437 61.497363,118.298548 69.2010667,126.1184 C81.7507556,138.85677 96.275437,153.6 128,153.6 C162.133333,153.6 183.466667,136.533333 192,102.4 C179.2,119.466667 164.266667,125.866667 147.2,121.6 C137.462519,119.16563 130.502637,112.101452 122.798933,104.2816 C110.249244,91.5432296 95.724563,76.8 64,76.8 Z" fill="url(#linearGradient-1)"></path>
                    </g>
                </svg>

            </p>
        },
        {
            skillname: "Python",
            description: "Python is an interpreted, object-oriented, high-level programming language with dynamic semantics developed by Guido van Rossum.Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically-typed and garbage-collected.",
            symbol: <p className='absolute top-6 right-6'>
                <svg width="256px" height="256px" viewBox="0 -0.5 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" className='w-10 h-10' preserveAspectRatio="xMidYMid">
                    <defs>
                        <linearGradient x1="12.9593594%" y1="12.0393928%" x2="79.6388325%" y2="78.2008538%" id="linearGradient-1">
                            <stop stop-color="#387EB8" offset="0%"></stop>
                            <stop stop-color="#366994" offset="100%"></stop>
                        </linearGradient>
                        <linearGradient x1="19.127525%" y1="20.5791813%" x2="90.7415328%" y2="88.4290372%" id="linearGradient-2">
                            <stop stop-color="#FFE052" offset="0%"></stop>
                            <stop stop-color="#FFC331" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <g>
                        <path d="M126.915866,0.0722755491 C62.0835831,0.0722801733 66.1321288,28.1874648 66.1321288,28.1874648 L66.2044043,57.3145115 L128.072276,57.3145115 L128.072276,66.0598532 L41.6307171,66.0598532 C41.6307171,66.0598532 0.144551098,61.3549438 0.144551098,126.771315 C0.144546474,192.187673 36.3546019,189.867871 36.3546019,189.867871 L57.9649915,189.867871 L57.9649915,159.51214 C57.9649915,159.51214 56.8001363,123.302089 93.5968379,123.302089 L154.95878,123.302089 C154.95878,123.302089 189.434218,123.859386 189.434218,89.9830604 L189.434218,33.9695088 C189.434218,33.9695041 194.668541,0.0722755491 126.915866,0.0722755491 L126.915866,0.0722755491 L126.915866,0.0722755491 Z M92.8018069,19.6589497 C98.9572068,19.6589452 103.932242,24.6339846 103.932242,30.7893845 C103.932246,36.9447844 98.9572068,41.9198193 92.8018069,41.9198193 C86.646407,41.9198239 81.6713721,36.9447844 81.6713721,30.7893845 C81.6713674,24.6339846 86.646407,19.6589497 92.8018069,19.6589497 L92.8018069,19.6589497 L92.8018069,19.6589497 Z" fill="url(#linearGradient-1)"></path>
                        <path d="M128.757101,254.126271 C193.589403,254.126271 189.540839,226.011081 189.540839,226.011081 L189.468564,196.884035 L127.600692,196.884035 L127.600692,188.138693 L214.042251,188.138693 C214.042251,188.138693 255.528417,192.843589 255.528417,127.427208 C255.52844,62.0108566 219.318366,64.3306589 219.318366,64.3306589 L197.707976,64.3306589 L197.707976,94.6863832 C197.707976,94.6863832 198.87285,130.896434 162.07613,130.896434 L100.714182,130.896434 C100.714182,130.896434 66.238745,130.339138 66.238745,164.215486 L66.238745,220.229038 C66.238745,220.229038 61.0044225,254.126271 128.757101,254.126271 L128.757101,254.126271 L128.757101,254.126271 Z M162.87116,234.539597 C156.715759,234.539597 151.740726,229.564564 151.740726,223.409162 C151.740726,217.253759 156.715759,212.278727 162.87116,212.278727 C169.026563,212.278727 174.001595,217.253759 174.001595,223.409162 C174.001618,229.564564 169.026563,234.539597 162.87116,234.539597 L162.87116,234.539597 L162.87116,234.539597 Z" fill="url(#linearGradient-2)"></path>
                    </g>
                </svg>
            </p>
        },
        {
            skillname: "Sharemarket",
            description: "A share market is where shares are either issued or traded in. A stock market is similar to a share market. The key difference is that a stock market helps you trade financial instruments like bonds, mutual funds, derivatives as well as shares of companies. I have experince in sharemarket as a trader.",
            symbol: <p className='absolute top-6 right-6'>

                <img src={Share} className='w-16 h-16' />
            </p>
        }
    ]

    return (
        <>
            <section className='head-bg' id='skills'>

                <div>
                    <h1 className='text-center text-6xl font-bold py-5'>Skills</h1>
                </div>
                <div className='grid md:grid-cols-2 gap-3 py-10 gap-y-16 relative'>
                    {items.map((item) => (
                        <div className='mx-5 md:mx-20 px-10 py-10 bg-white rounded-xl bg-shadow' data-aos="flip-right">
                            <h1 className='text-lg font-bold mb-3 font-extrabold'>{item.skillname}</h1>
                            <p className='text-gray-500 font-bold text-lg'>{item.description}</p>
                            <p >{item.symbol}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Skills