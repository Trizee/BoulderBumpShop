import React from 'react'

function About() {
    return (
        <section id='about'>
            <div className='w-full bg-gray-900 grid-cols-5 md:grid'>
                <div className='col-span-3 '>
                    <div className='m-0 md:m-5 lg:m-10'>
                        <h2
                            className="font-bold text-4xl text-center uppercase tracking-wide p-5 text-gray-200">
                            About
                        </h2>
                        <p className="text-center text-gray-200 text-2xl h-full flex items-center pt-5 pb-5 tracking-wide">
                            Boulder Bump Shop company was started in 1972 with the philosophy that consumers always deserve quality service at a fair price. The foundation of our success at the Boulder Bump Shop is making sure that every customer is completely satisfied because "we do the job right." With this philosophy in mind, I continue to invest in the latest equipment, materials, and information technology designed to repair your vehicle back the way it was before the accident. I have also invested in our employees at the Boulder Bump Shop with the necessary training to keep up with today's technology and also with the future in mind.
                            What truly distinguishes the Boulder Bump Shop from other body shops is the consistency of our system throughout the entire repair process.
                            Please feel free to call me, or stop by our shop if you need any further assistance.
                        </p>
                    </div>
                </div>
                <div className='col-span-2 h-full flex items-center justify-center'>
                    <img src="/assets/IMG_0355.jpg" alt="" className=""/>
                </div>
            </div>
        </section>
    )
}

export default About



