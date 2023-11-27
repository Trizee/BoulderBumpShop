import { useState } from "react"

function Navbar(){

    const [isOpen,setOpen] = useState(false)
    const handleClick = () =>{
        setOpen(!isOpen)
    }
    
    return(
    
    <nav className="w-full bg-gray-950">
        <button
            onClick={handleClick}
            type="button"
            className={`w-8 h-8 flex justify-around flex-col flex-wrap z-10 cursor-pointer float-right m-3 md:hidden`}
        >
            <div
                className={`bg-gray-200 block w-8 h-[0.25rem] rounded transition-all origin-[1px] ${
                    isOpen ? 'rotate-[45deg] w-9' : 'rotate-0'
                }`}
            />
            <div
                className={`bg-gray-200 block w-8 h-[0.25rem] rounded transition-all origin-[1px] ${
                    isOpen ? 'translate-x-full opacity-0' : 'translate-x-0'
                }`}
            />
            <div
                className={`bg-gray-200 block w-8 h-[0.25rem] rounded transition-all origin-[1px] ${
                    isOpen ? 'rotate-[-45deg] w-9' : 'rotate-0'
                }`}
            />
        </button>
        {isOpen? <div className="bg-blend-darken z-10 h-full">
            <p className="text-white">ABOUT</p>
            <p className="text-white">SERVICES</p>
            <p className="text-white">OUR WORK</p>
            <p className="text-white">COMMENTS</p>
            <p className="text-white">CONTACT</p>
        </div>: null}
        <div className="fixed hidden md:flex w-full justify-evenly mt-8 top-0 ">
            <p className="text-gray-200 font-bold text-2xl hover:scale-105 hover:text-red-600 transition-all duration-200 hover:cursor-pointer">ABOUT</p>
            <p className="text-gray-200 font-bold text-2xl hover:scale-105 hover:text-red-600 transition-all duration-300 hover:cursor-pointer">SERVICES</p>
            <p className="text-gray-200 font-bold text-2xl hover:scale-105 hover:text-red-600 transition-all duration-300 hover:cursor-pointer">OUR WORK</p>
            <p className="text-gray-200 font-bold text-2xl hover:scale-105 hover:text-red-600 transition-all duration-300 hover:cursor-pointer">COMMENTS</p>
            <p className="text-gray-200 font-bold text-2xl hover:scale-105 hover:text-red-600 transition-all duration-300 hover:cursor-pointer">CONTACT</p>
        </div>
        <img src="/src/assets/BBS-Logo.png" className="p-0 m-auto lg:scale-1105" />
    </nav>

    )

}

export default Navbar