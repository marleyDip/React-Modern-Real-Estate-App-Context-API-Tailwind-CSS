import React, { useState } from "react";
import { useAppContext } from "../context/AppsContext";
import { assets, cities } from "../assets/data";

const AgencyReg = () => {
  const { setShowAgencyReg } = useAppContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  return (
    <>
      <style>{`
          @keyframes rotate {
              100% {
                  transform: rotate(1turn);
              }
          }
      
          .rainbow::before {
              content: '';
              position: absolute;
              z-index: -2;
              left: -50%;
              top: -50%;
              width: 200%;
              height: 200%;
              background-position: 100% 50%;
              background-repeat: no-repeat;
              background-size: 50% 30%;
              filter: blur(6px);
              background-image: linear-gradient(#FF0A7F,#780EFF);
              animation: rotate 4s linear infinite;
          }
      `}</style>

      <div
        onClick={() => setShowAgencyReg(true)}
        className="fixed z-50 top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black/80 backdrop-blur-xs"
      >
        <form
          onClick={(e) => e.stopPropagation()}
          className="relative flexCenter bg-white rounded-xl shadow-md max-w-xl md:max-w-3xl lg:max-w-4xl max-md:mx-2"
        >
          <img
            src={assets.createPrp}
            alt="createPrpImg"
            className="w-1/2 rounded-l-xl hidden md:block"
          />

          <div className="flex flex-col md:w-1/2 p-8 md:p-10">
            <img
              onClick={() => setShowAgencyReg(true)}
              src={assets.close}
              alt="closeIcon"
              className="absolute top-4 right-4 w-6 h-6 p-1 bg-secondary/50 cursor-pointer rounded-full shadow-md"
            />

            <h3 className="h3 mb-6">Register Agency</h3>

            <div className="flex gap-2 xl:gap-3">
              <div>
                <label htmlFor="name" className="medium-14">
                  Agency Name
                </label>

                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Type Here..."
                  className="regular-14 w-full px-3 py-1.5 mt-1 border border-slate-900/10 bg-secondary/10 rounded-lg outline-none focus:border-indigo-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact" className="medium-14">
                  Contact
                </label>

                <input
                  type="text"
                  id="contact"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="Type Here..."
                  className="regular-14 w-full px-3 py-1.5 mt-1 border border-slate-900/10 bg-secondary/10 rounded-lg focus:border-indigo-300 outline-none"
                  required
                />
              </div>
            </div>

            <div className="w-full mt-4">
              <label htmlFor="email" className="medium-14">
                Email
              </label>

              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Type Here..."
                className="regular-14 w-full px-3 py-1.5 mt-1 border border-slate-900/10 bg-secondary/10 rounded-lg focus:border-indigo-300 outline-none"
                required
              />
            </div>

            <div className="w-full mt-4">
              <label htmlFor="address" className="medium-14">
                Address
              </label>

              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Type Here..."
                className="regular-14 w-full px-3 py-1.5 mt-1 border border-slate-900/10 bg-secondary/10 rounded-lg focus:border-indigo-300 outline-none"
                required
              />
            </div>

            <div className="w-full mt-4 max-w-60 mr-auto">
              <label htmlFor="city" className="medium-14">
                City
              </label>

              <select
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Type Here..."
                className="regular-14 w-full px-3 py-2.5 mt-1 border border-slate-900/10 bg-secondary/10 rounded-lg focus:border-indigo-300 outline-none"
                required
              >
                <option value="">Select City</option>

                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* btn */}
            <div className="mt-6 w-[125px] rainbow relative z-0 overflow-hidden p-[3px] flex items-center justify-center rounded-full hover:scale-103 transition duration-300 active:scale-100">
              <button className="px-8 text-sm py-2.5 text-gray-800 rounded-full font-bold bg-secondary">
                Register
              </button>
            </div>
            {/* btn */}
          </div>
        </form>
      </div>
    </>
  );
};

export default AgencyReg;
