import React from 'react'
import wallpaper from '../assets/wallpaper.jpg'
import p1 from '../assets/p1.jpg'
import p4 from '../assets/quickdocmeet.png'

const Projects = () => {
        return (
                <div name="𝙿𝚛𝚘𝚓𝚎𝚌𝚝𝚜" className='pb-24 md:pt-3 md:pb-28 bg-gradient-to-b from-black to-gray-800 w-full text-white'>
                        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                                <div className='pb-20'>
                                        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>My Projects:</p>
                                </div>

                                <div className='flex flex-col md:flex-row gap-16 px-12'>
                                        <div className='md:w-1/2'>
                                                <img src={p1} alt="" />
                                        </div>
                                        <div>
                                                <p className='text-3xl'><span className='text-cyan-500 font-bold'>Title: </span>Personal Portfolio Website</p>
                                                <p className='text-xl mt-2'><span className='text-cyan-500 font-bold'>Technologies/Tools Used: </span>Html, css, javascript, react.js, tailwind css, figma, github, netlify</p>
                                                <div className='mt-2 flex ml-8 md:ml-16 gap-16'>
                                                        <a href="https://github.com/pranavsoni27/react-portfolio.git" target='_blank'><button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 flex items-center rounded-md hover:scale-110 duration-300'>My Code</button></a>
                                                        <a href="https://pranavsoni.netlify.app" target='_blank'><button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 flex items-center rounded-md hover:scale-110 duration-300'>Live Demo</button></a>
                                                        
                                                </div>
                                        </div>  
                                </div>

                                <hr className='bg-white mb-9'/>

                                <div className='flex flex-col md:flex-row gap-16 px-12'>
                                        <div className='md:w-1/2'>
                                                <img src={p1} alt="" />
                                        </div>
                                        <div>
                                                <p className='text-3xl'><span className='text-cyan-500 font-bold'>Title: </span>Personal Portfolio Website</p>
                                                <p className='text-xl mt-2'><span className='text-cyan-500 font-bold'>Technologies/Tools Used: </span>Html, css, javascript, react,js, tailwind css, figma, github, netlify</p>
                                                <div className='mt-2 flex ml-8 md:ml-16 gap-16'>
                                                        <a href="" target='_blank'><button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 flex items-center rounded-md hover:scale-110 duration-300'>My Code</button></a>
                                                        <a href="" target='_blank'><button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 flex items-center rounded-md hover:scale-110 duration-300'>Live Demo</button></a>
                                                </div>
                                        </div>  
                                </div>

                                <hr className='bg-white mb-9'/>

                                <div className='flex flex-col md:flex-row gap-16 px-12'>
                                        <div className='md:w-1/2'>
                                                <img src={p4} alt="" />
                                        </div>
                                        <div>
                                                <p className='text-3xl'><span className='text-cyan-500 font-bold'>Title: </span>Personal Portfolio Website</p>
                                                <p className='text-xl mt-2'><span className='text-cyan-500 font-bold'>Technologies/Tools Used: </span>Html, css, javascript, react.js, tailwind css, figma, github, netlify</p>
                                                <div className='mt-2 flex ml-8 md:ml-16 gap-16'>
                                                <a href="" target='_blank'><button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 flex items-center rounded-md hover:scale-110 duration-300'>My Code</button></a>
                                                <a href="" target='_blank'><button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 flex items-center rounded-md hover:scale-110 duration-300'>Live Demo</button></a>
                                                </div>
                                        </div>  
                                </div>

                                <hr className='bg-white mb-9'/>

                                <div className='flex flex-col md:flex-row gap-16 px-12'>
                                        <div className='md:w-1/2'>
                                                <img src={p4} alt="" />
                                        </div>
                                        <div>
                                                <p className='text-3xl'><span className='text-cyan-500 font-bold'>Title: </span>QuickDocMeet</p>
                                                <p className='text-xl mt-2'><span className='text-cyan-500 font-bold'>Technologies/Tools Used: </span>Html, css, javascript, react.js, tailwind css, figma, github, netlify</p>
                                                <div className='mt-2 flex ml-8 md:ml-16 gap-16'>
                                                <a href="https://github.com/pranavsoni27/QuickDocMeet.git" target='_blank'><button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 flex items-center rounded-md hover:scale-110 duration-300'>My Code</button></a>
                                                <a href="https://quickdocmeet.netlify.app" target='_blank'><button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 flex items-center rounded-md hover:scale-110 duration-300'>Live Demo</button></a>
                                                </div>
                                        </div>  
                                </div>


                                

                        </div>
                </div>
        )
}

export default Projects