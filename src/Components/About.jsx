import React from 'react'

function About() {
    return (
        <section id='about' >
            <div className="container flex max-w-6xl max-h-[500px] mx-auto mb-10 px-6 text-white bg-gray-700">
                <div className="">
                    <h2
                        className="max-w-lg mt-10 mb-6 font-bold text-4xl text-center uppercase ">
                        About
                    </h2>
                    <p className="max-w-md text-center">
                        Boulder Bump Shop company was started in 1972 with the philosophy that consumers always deserve quality service at a fair price. The foundation of our success at the Boulder Bump Shop is making sure that every customer is completely satisfied because "we do the job right." With this philosophy in mind, I continue to invest in the latest equipment, materials, and information technology designed to repair your vehicle back the way it was before the accident. I have also invested in our employees at the Boulder Bump Shop with the necessary training to keep up with today's technology and also with the future in mind.
                        What truly distinguishes the Boulder Bump Shop from other body shops is the consistency of our system throughout the entire repair process.
                        Please feel free to call me, or stop by our shop if you need any further assistance.
                    </p>
                </div>
                <img src="/assets/sam.jpg" alt="" className="w-1/2 mx-10 mt-10"/>
            </div>
        </section>
    )
}

export default About