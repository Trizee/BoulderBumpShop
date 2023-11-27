

function Navbar(){
    
    return(
    
    <nav className="w-full bg-gray-900">
        <div className="fixed flex w-full justify-evenly mt-10 top-0">
            <p className="text-gray-200 font-bold text-2xl hover:scale-110 hover:text-red-700 transition-all duration-300 hover:cursor-pointer">ABOUT</p>
            <p className="text-gray-200 font-bold text-2xl hover:scale-110 hover:text-red-700 transition-all duration-300 hover:cursor-pointer">SERVICES</p>
            <p className="text-gray-200 font-bold text-2xl hover:scale-110 hover:text-red-700 transition-all duration-300 hover:cursor-pointer">OUR WORK</p>
            <p className="text-gray-200 font-bold text-2xl hover:scale-110 hover:text-red-700 transition-all duration-300 hover:cursor-pointer">COMMENTS</p>
            <p className="text-gray-200 font-bold text-2xl hover:scale-110 hover:text-red-700 transition-all duration-300 hover:cursor-pointer">CONTACT</p>
        </div>
        <img src="/src/assets/BBS-Logo.png" className="h-full p-0 m-auto" />
    </nav>

        
    )

}

export default Navbar