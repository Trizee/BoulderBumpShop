import { useState } from "react"

function Navbar() {

    const [isOpen, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!isOpen)
        document.querySelector('#menu-btn').classList.toggle('open')
    }

    return (

        <nav className="w-full bg-gray-950">
            <div class="float-right md:hidden">
                <button onClick={handleClick} id="menu-btn" type="button" className="z-40 block hamburger focus:outline-none mr-2 mt-5">
                    <span class="hamburger-top"></span>
                    <span class="hamburger-middle"></span>
                    <span class="hamburger-bottom"></span>
                </button>
            </div>
            {/* <button
                onClick={handleClick}
                type="button"
                className={`w-8 h-8 flex justify-around flex-col flex-wrap z-10 cursor-pointer float-right m-3 md:hidden`}
            >
                <div
                    className={`bg-gray-200 block w-8 h-[0.25rem] rounded transition-all origin-[1px] ${isOpen ? 'rotate-45' : 'rotate-0'
                        }`}
                />
                <div
                    className={`bg-gray-200 block w-8 h-[0.25rem] rounded transition-all origin-[1px] ${isOpen ? 'hidden' : 'translate-x-0'
                        }`}
                />
                <div
                    className={`bg-gray-200 block w-8 h-[0.25rem] rounded transition-all origin-[1px] ${isOpen ? 'rotate-[-42deg]' : 'rotate-0'
                        }`}
                />
            </button> */}
            {isOpen ? <div className="bg-blend-darken z-10 h-full md:hidden">
                <a href="#about"><p className="text-white">ABOUT</p></a>
                <p className="text-white">SERVICES</p>
                <p className="text-white">OUR WORK</p>
                <p className="text-white">COMMENTS</p>
                <p className="text-white">CONTACT</p>
            </div> : null}
            <div className="fixed hidden md:flex w-full justify-evenly mt-8 top-0 ">
                <a href="#about"><p className="text-gray-200 font-bold text-2xl hover:scale-105 hover:text-red-600 transition-all duration-200 hover:cursor-pointer">ABOUT</p></a>
                <a href=" #services"><p className="text-gray-200 font-bold text-2xl hover:scale-105 hover:text-red-600 transition-all duration-300 hover:cursor-pointer">SERVICES</p></a>
                <p className="text-gray-200 font-bold text-2xl hover:scale-105 hover:text-red-600 transition-all duration-300 hover:cursor-pointer">OUR WORK</p>
                <p className="text-gray-200 font-bold text-2xl hover:scale-105 hover:text-red-600 transition-all duration-300 hover:cursor-pointer">COMMENTS</p>
                <p className="text-gray-200 font-bold text-2xl hover:scale-105 hover:text-red-600 transition-all duration-300 hover:cursor-pointer">CONTACT</p>
            </div>
        </nav>
    )

}

export default Navbar