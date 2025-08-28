import { assets, cities } from "../assets/data";

const Hero = () => {
  return (
    <section className="h-screen w-screen bg-[url('/src/assets/bg.png')] bg-cover bg-center bg-no-repeat">
      <div className="max-padd-container h-screen w-screen">
        {/* overlay */}
        <div className="absolute inset-0 bg-black/10 z-0" />
        {/* overlay */}

        {/* container */}
        <div className="relative h-full flex flex-col justify-end mx-auto gap-4 py-6 sm:pt-18 z-10">
          {/* content */}
          <div className="flex flex-col mt-12 text-white">
            <button className="group max-w-80 sm:max-w-[330px] flex items-center space-x-3 border border-white medium-13 rounded-full px-4 py-1 pr-0.5 cursor-pointer">
              <span className="">Explore how we simplify stays and spaces</span>
              <span className="flexCenter size-6 sm:size-8 p-1 rounded-full bg-white">
                <img
                  src={assets.right}
                  alt="rightIcon"
                  width={20}
                  className="transform group-hover:rotate-[360deg] group-hover:translate-x-1 transition-transform duration-200  ease-out"
                />
              </span>
            </button>

            <h2 className="text-2xl sm:text-3xl md:text-4xl capitalize leading-tight mt-3 my-2 font-medium">
              Explore{" "}
              <span className="bg-gradient-to-r from-secondary to-white bg-clip-text text-transparent">
                exceptional properties
              </span>{" "}
              located in stunning surroundings.
            </h2>
          </div>
          {/* content */}

          {/* search / booking form */}
          <form className="flex flex-col lg:flex-row bg-white text-gray-500 rounded-lg shadow-lg px-6 py-4 gap-4 font-semibold lg:gap-x-8 max-w-md  lg:max-w-full ring-1 ring-slate-900/50 relative">
            <div className="flex flex-col w-full">
              <div className="flex items-center gap-2">
                <img src={assets.pin} alt="pinIcon" width={20} />
                <label htmlFor="destinationInput">Destination</label>
              </div>

              <input
                type="text"
                id="destinationInput"
                list="destination"
                placeholder="Type here..."
                className="rounded shadow-md border border-gray-200 px-3 py-1.5 mt-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />

              <datalist id="destination">
                {cities.map((city, index) => (
                  <option value={city} key={index}></option>
                ))}
              </datalist>
            </div>

            <div className="flex flex-col w-full">
              <div className="flex items-center gap-2">
                <img src={assets.calendar} alt="calenderIcon" width={20} />
                <label htmlFor="checkIn">Check In</label>
              </div>

              <input
                type="date"
                id="checkIn"
                className="rounded shadow-md border border-gray-200 px-3 py-1.5 mt-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div className="flex flex-col w-full">
              <div className="flex items-center gap-2">
                <img src={assets.calendar} alt="calenderIcon" width={20} />
                <label htmlFor="checkOut">Check Out</label>
              </div>

              <input
                type="date"
                id="checkOut"
                className="rounded shadow-md border border-gray-200 px-3 py-1.5 mt-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div className="flex flex-col w-full">
              <div className="flex items-center gap-2">
                <img src={assets.user} alt="userIcon" width={20} />
                <label htmlFor="guests">Guests</label>
              </div>

              <input
                type="number"
                id="guests"
                min={1}
                max={5}
                placeholder="0"
                className="rounded shadow-md border border-gray-200 px-3 py-1.5 mt-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-1 rounded-md shadow-md px-6 py-3 bg-gradient-to-tr from-purple-500 to-pink-500 hover:bg-gradient-to-br text-white my-auto max-md:w-full max-md:py-1 lg:hover:translate-y-1.5 duration-200 ease-in cursor-pointer"
            >
              <img
                src={assets.search}
                alt="searchIcon"
                width={20}
                className="invert"
              />
              <span>Search</span>
            </button>
          </form>
          {/* search / booking form */}
        </div>
        {/* container */}
      </div>
    </section>
  );
};

export default Hero;
