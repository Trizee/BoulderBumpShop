

function Navbar() {

    return (

        <nav className="w-full">
            <div className="fixed flex w-full justify-evenly mt-5 top-0 ">
                <a href="#about"><p className="text-gray-200 font-bold text-2xl hover:scale-110 hover:text-red-700 transition-all duration-300 bg-gray-500 rounded-lg w-28 text-center hover:cursor-pointer">ABOUT</p></a>
                <a href="#services"><p className="text-gray-200 font-bold text-2xl hover:scale-110 hover:text-red-700 transition-all duration-300 bg-gray-500 rounded-lg w-40 text-center hover:cursor-pointer">SERVICES</p></a>
                <a href="#ourwork">
                    <p className="text-gray-200 font-bold text-2xl hover:scale-110 hover:text-red-700 transition-all duration-300 bg-gray-500 rounded-lg w-[200px] text-center hover:cursor-pointer">OUR WORK</p>

                </a>
                <a href="#comments">
                    <p className="text-gray-200 font-bold text-2xl hover:scale-110 hover:text-red-700 transition-all duration-300 bg-gray-500 rounded-lg w-40 text-center hover:cursor-pointer">COMMENTS</p>

                </a>
                <a href="#contact">
                    <p className="text-gray-200 font-bold text-2xl hover:scale-110 hover:text-red-700 transition-all duration-300 bg-gray-500 rounded-lg w-40 text-center hover:cursor-pointer">CONTACT</p>

                </a>
            </div>
        </nav>


    )

}

export default Navbar