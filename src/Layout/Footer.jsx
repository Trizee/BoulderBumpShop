function Footer() {
  return (
    <div className="flex flex-col md:flex-row w-full bg-gray-800">
      <div className="flex flex-col w-full md:w-2/3">
        <form className="max-w-md mx-auto text-white">
          <div className="mb-4">
            <label className="block font-bold text-2xl mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold text-2xl mb-2" htmlFor="comments">
              Comments
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="comments"
              placeholder="Your comments"
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-col w-full md:w-1/3">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-white">Information</h2>
          <div className="mb-4">
            <h2 className="text-xl font-bold text-white">Address</h2>
            <p
              className="text-white
            "
            >
              Boulder Bump Shop
            </p>
            <p className="text-white">2480 49th Street, Unit A</p>
            <p className="text-white">Boulder, CO</p>
            <p className="text-white">80301</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-bold text-white">Phone</h2>
            <p className="text-white">(303) 444-2344</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-bold text-white">Hours of Operation</h2>
            <p className="text-white">Monday-Friday: 8am-5pm</p>
            <p className="text-white">Saturday & Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
