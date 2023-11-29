// import { IoIosCheckmarkCircleOutline } from "react-icons/io";

function Services() {
    return (
        // <section id='services' >
        //     <div className="container flex flex-col md:flex-row max-w-6xl mx-auto mt-16 mb-8 px-6 text-white bg-gray-700 max-h-[500px]">
        //         <img src="../../assets/jer.jpg" alt="" className="w-1/2 mx-10 mt-10" />
        //         <div className=" ">
        //             <h2
        //                 className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center uppercase ">
        //                 Services
        //             </h2>
        //             <p className="max-w-md text-center my-2">
        //                 From the moment you arrive at the Boulder Bump Shop, our friendly and knowledgeable estimators will assess the damage to your vehicle, and keep you informed as the repair process begins.
        //             </p>
        //             <p className="max-w-md text-center my-2">
        //                 At the Boulder Bump Shop, you, the customer, are the number one priority. We take the time to clearly identify the repairs that are needed to make your vehicle look like the accident never happened. Our experts are available to answer any and all of your questions.
        //             </p>
        //             <p className="max-w-md text-center my-2">
        //                 Our friendly office staff is well trained in the repair process and handling of the necessary paperwork. They work regularly with customers and insurance companies to make sure the process flows smoothly.
        //             </p>
        //             <p className="max-w-md text-center my-2">
        //                 Once the repairs have been completed, we wash your car and inspect it for quality assurance. You can then pick up your vehicle without any worries because "we do the job right."
        //             </p>
        //         </div>
        //     </div>
        //     <div className="flex flex-col max-w-6xl mx-auto text-white">
        //         <h2
        //             className="max-w-lg mt-10 font-sans text-4xl text-center uppercase ">
        //             We Offer
        //         </h2>
        //         <div className="mx-auto pl-40">
        //             <ul className="flex flex-wrap list-disc">
        //                 <li className="m-4"> Servicing Foreign and Domestic Vehicles</li>
        //                 <li className="m-4">Over 40 years Experience</li>
        //                 <li className="m-4">Auto Collision Repair</li>
        //                 <li className="m-4">Waterborene Painte Services</li>
        //                 <li className="m-4">Servicing Foreign and Domestic Vehicles</li>
        //                 <li className="m-4">Servicing Foreign and Domestic Vehicles</li>
        //                 <li className="m-4">Servicing Foreign and Domestic Vehicles</li>
        //                 <li className="m-4">Servicing Foreign and Domestic Vehicles</li>
        //                 <li className="m-4">Servicing Foreign and Domestic Vehicles</li>
        //                 <li className="m-4">Servicing Foreign and Domestic Vehicles</li>
        //                 <li className="m-4">Servicing Foreign and Domestic Vehicles</li>
        //                 <li className="m-4">Servicing Foreign and Domestic Vehicles</li>
        //             </ul>
        //         </div>

        //     </div>
        // </section>
        <section id='services'>
            <div className='w-full bg-gray-950 grid-cols-6 md:grid'>
                <div className='hidden md:block col-span-2 '>
                    <img src="../../assets/jer.jpg" alt="" className="" />
                </div>
                <div className='col-span-2 flex items-center justify-center'>
                    <div className='m-0 md:m-5 lg:m-10'>
                        <h2
                            className="font-bold text-4xl text-center uppercase tracking-wide p-5 text-gray-200">
                            services
                        </h2>
                        <p className="text-center text-gray-200 text-2xl h-full flex items-center pt-5 pb-5">
                        From the moment you arrive at the Boulder Bump Shop, our friendly and knowledgeable estimators will assess the damage to your vehicle, and keep you informed as the repair process begins.
                        At the Boulder Bump Shop, you, the customer, are the number one priority. We take the time to clearly identify the repairs that are needed to make your vehicle look like the accident never happened. Our experts are available to answer any and all of your questions.
                        Our friendly office staff is well trained in the repair process and handling of the necessary paperwork. They work regularly with customers and insurance companies to make sure the process flows smoothly.
                        Once the repairs have been completed, we wash your car and inspect it for quality assurance. You can then pick up your vehicle without any worries because "we do the job right."
                        </p>
                    </div>
                </div>
                <div className='col-span-2 flex items-center justify-center '>
                    <div className='m-0 md:m-5 lg:m-10'>
                    <ul className="text-2xl text-gray-200 list-image-[url(../../assets/checkmark-circle-svgrepo-com.svg)]">
                        <li className="p-2"> Servicing Foreign and Domestic Vehicles</li>
                        <li className="p-2">Over 40 years Experience</li>
                        <li className="p-2">Auto Collision Repair</li>
                        <li className="p-2">Waterborene Painte Services</li>
                        <li className="p-2">Servicing Foreign and Domestic Vehicles</li>
                        <li className="p-2">Servicing Foreign and Domestic Vehicles</li>
                        <li className="p-2">Servicing Foreign and Domestic Vehicles</li>
                        <li className="p-2">Servicing Foreign and Domestic Vehicles</li>
                        <li className="p-2">Servicing Foreign and Domestic Vehicles</li>
                        <li className="p-2">Servicing Foreign and Domestic Vehicles</li>
                        <li className="p-2">Servicing Foreign and Domestic Vehicles</li>
                        <li className="p-2">Servicing Foreign and Domestic Vehicles</li>
                     </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services