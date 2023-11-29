import { useState, useEffect } from "react"

function Navbar() {

    const [isOpen, setOpen] = useState(false)
    const [isTop, setIsTop] = useState(true);

    const handleClick = () => {
        setOpen(!isOpen)
        document.querySelector('#menu-btn').classList.toggle('open')
    }

    const checkScrollTop = () => {
        if (!isTop && window.scrollY < 10) {
            setIsTop(true);
        } else if (isTop && window.scrollY >= 10) {
            setIsTop(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, [isTop]);

    return (
        
        <nav className={`w-full ${isTop ? 'md:bg-gray-950' : 'md:bg-transparent'} fixed top-2 transition-all h-20 rounded-3xl`}>
            <div class="float-right md:hidden">
                <button onClick={handleClick} id="menu-btn" type="button" className="z-40 block hamburger focus:outline-none mr-5 mt-5">
                    <span class="hamburger-top"></span>
                    <span class="hamburger-middle"></span>
                    <span class="hamburger-bottom"></span>
                </button>
            </div>
            {isOpen ? <div className="bg-blend-darken z-10 h-full md:hidden">
                <a href="#about"><p className="text-white">ABOUT</p></a>
                <a href="#services"><p className="text-white">SERVICES</p></a>
                <p className="text-white">OUR WORK</p>
                <p className="text-white">COMMENTS</p>
                <p className="text-white">CONTACT</p>
            </div> : null}
            <div className={`font-serif fixed hidden md:flex w-full justify-evenly mt-8 top-0 ${!isTop && 'opacity-50 hover:opacity-100'} transition-opacity duration-300`}>
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