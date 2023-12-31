function Footer() {
    return (
        <div className="flex flex-col md:flex-row w-full bg-gray-800 pt-10 pb-20">
            <div className="flex flex-col w-full md:w-2/3">
                <div className="max-w-md mx-auto text-gray-200 font-bold text-4xl pb-4">
                    <p>Contact Us!</p>
                </div>
                <form className="max-w-md mx-auto text-gray-200 flex md:flex-row">
                    <div className="flex flex-col mr-10">
                        <div className="mb-4">
                            <label className="block font-bold text-2xl mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Your name"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-bold text-2xl mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Your email"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="mb-4">
                            <label className="block font-bold text-2xl mb-2" htmlFor="comments">
                                Comments
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-black"
                                placeholder="Your comments"

                            ></textarea>
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-gray-200 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                Send
                            </button>
                        </div>
                    </div>

                </form>
            </div>
            <div className="flex flex-col w-full md:w-1/3">
                <div className="mb-4">
                    <h2 className="text-4xl font-bold text-gray-200 mb-2">Information</h2>
                    <div className="mb-4">
                        <h2 className="text-xl font-bold text-gray-200">Address</h2>
                        <p className="text-gray-200">
                            Boulder Bump Shop
                        </p>
                        <p className="text-gray-200">2480 49th Street, Unit A</p>
                        <p className="text-gray-200">Boulder, CO</p>
                        <p className="text-gray-200">80301</p>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-xl font-bold text-gray-200">Phone</h2>
                        <p className="text-gray-200">(303) 444-2344</p>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-xl font-bold text-gray-200">Hours of Operation</h2>
                        <p className="text-gray-200">Monday-Friday: 8am-5pm</p>
                        <p className="text-gray-200">Saturday & Sunday: Closed</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
