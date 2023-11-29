import React from 'react'

function OurWork() {
    return (
        <>
            <section id='ourWork'>
                <div className='w-full bg-gray-900 grid-cols-5 md:grid'>
                    <div className='col-span-3 '>
                        <div className='m-0 md:m-5 lg:m-10'>
                            <h2
                                className="font-bold text-4xl text-center uppercase tracking-wide p-5 text-gray-200">
                                Our Work
                            </h2>
                            <p className="text-center text-gray-200 text-2xl h-full flex items-center pt-5 pb-5">
                                Here at the Boulder bump shop we believe that our work speaks for it self! Please start the video to the right to see before and after pictures of vehicles we have personally serviced. In each case, you can't even tell any work was done at all.
                            </p>
                        </div>
                    </div>
                    <div className='col-span-2 h-full flex md:flex-wrap md:flex-row my-auto'>
                        <div className="m-2 shadow-md shadow-gray-200 h-fit w-1/4 overflow-hidden">
                            <img src="/assets/IMG_0355.jpg" alt="" className="hover:scale-110  h-fit w-fit transition-all duration-300" />
                        </div>
                        <div className="m-2 shadow-md shadow-gray-200 h-fit w-1/4 overflow-hidden">
                            <img src="/assets/IMG_0355.jpg" alt="" className="hover:scale-110  h-fit w-fit transition-all duration-300" />
                        </div>
                        <div className="m-2 shadow-md shadow-gray-200 h-fit w-1/4 overflow-hidden">
                            <img src="/assets/IMG_0355.jpg" alt="" className="hover:scale-110  h-fit w-fit transition-all duration-300" />
                        </div>
                        <div className="m-2 shadow-md shadow-gray-200 h-fit w-1/4 overflow-hidden">
                            <img src="/assets/IMG_0355.jpg" alt="" className="hover:scale-110  h-fit w-fit transition-all duration-300" />
                        </div>
                        <div className="m-2 shadow-md shadow-gray-200 h-fit w-1/4 overflow-hidden">
                            <img src="/assets/IMG_0355.jpg" alt="" className="hover:scale-110  h-fit w-fit transition-all duration-300" />
                        </div>
                        <div className="m-2 shadow-md shadow-gray-200 h-fit w-1/4 overflow-hidden">
                            <img src="/assets/IMG_0355.jpg" alt="" className="hover:scale-110  h-fit w-fit transition-all duration-300" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurWork