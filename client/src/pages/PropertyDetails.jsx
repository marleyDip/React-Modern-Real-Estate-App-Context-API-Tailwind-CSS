import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppsContext";
import { useParams } from "react-router-dom";
import PropertyImages from "../Components/PropertyImages";
import { assets } from "../assets/data";

const PropertyDetails = () => {
  const [property, setProperty] = useState(null);

  const { currency, properties } = useAppContext();
  const { id } = useParams();

  useEffect(() => {
    const property = properties.find((property) => property._id === id);
    property && setProperty(property);
  }, [properties, id]);

  return (
    property && (
      <div className="bg-gradient-to-r from-[#fffbee] to-white py-28">
        <div className="max-padd-container">
          {/* image */}
          <PropertyImages property={property} />
          {/* image */}

          {/* container */}
          <div className="flex flex-col xl:flex-row gap-8 mt-6">
            {/* left side */}
            <div className="p-4 flex-2 rounded-xl border border-slate-900/10 h-full">
              <p className="flexStart gap-x-2 font-semibold">
                <img src={assets.pin} alt="pinImage" width={20} />
                <span>{property.address}</span>
              </p>

              <div className="flex flex-col justify-between sm:flex-row sm:items-end mt-3">
                <h3 className="h3">{property.title}</h3>
                <div className="bold-18">
                  {currency}
                  {property.price.sale} | {currency}
                  {property.price.rent}.00/night
                </div>
              </div>

              <div className="flex items-start justify-between my-2">
                <h4 className="text-base font-bold px-2 py-1 rounded-xl shadow-md bg-gray-200 text-neutral-600">
                  {property.propertyType}
                </h4>

                <div className="flex items-baseline gap-2 relative top-1.5">
                  <h4 className="bold-18 relative bottom-0.5">5.0</h4>

                  <img src={assets.star} alt="starIcon" width={18} />
                  <img src={assets.star} alt="starIcon" width={18} />
                  <img src={assets.star} alt="starIcon" width={18} />
                  <img src={assets.star} alt="starIcon" width={18} />
                  <img src={assets.star} alt="starIcon" width={18} />
                </div>
              </div>

              <div className="flex gap-x-4 mt-4 font-bold">
                <p className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-medium">
                  <img src={assets.bed} alt="" width={19} />
                  {property.facilities.bedrooms}
                </p>

                <p className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-medium">
                  <img src={assets.bath} alt="" width={19} />
                  {property.facilities.bathrooms}
                </p>

                <p className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-medium">
                  <img src={assets.car} alt="" width={19} />
                  {property.facilities.garages}
                </p>

                <p className="flexCenter gap-x-2 font-medium">
                  <img src={assets.ruler} alt="" width={19} />
                  {property.area}
                </p>
              </div>

              <div className="mt-6">
                <h4 className="h4 mt-4 mb-1">Property Details</h4>
                <p className="text-justify font-medium mb-4">
                  {property.description}
                </p>
              </div>

              <h4 className="h4 mt-6 mb-2">Amenities</h4>
              <div className="flex gap-3">
                {property.amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="p-3 py-1 rounded-lg bg-secondary/10 ring-1 ring-slate-900/10 text-sm font-semibold shadow-sm"
                  >
                    {amenity}
                  </div>
                ))}
              </div>
              {/* form | check availability */}
              <form className="flex flex-col lg:flex-row text-gray-500 bg-secondary/10 rounded-lg shadow-sm mt-10 px-6 py-4 gap-4 font-semibold max-w-md lg:max-w-full ring-1 ring-slate-900/5 relative">
                <div className="flex flex-col w-full">
                  <div className="flex items-center gap-2">
                    <img src={assets.calendar} alt="calenderIcon" width={20} />
                    <label htmlFor="checkInDate">Check In</label>
                  </div>

                  <input
                    type="date"
                    id="checkInDate"
                    className="rounded bg-secondary/10 border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                    required
                  />
                </div>

                <div className="flex flex-col w-full">
                  <div className="flex items-center gap-2">
                    <img src={assets.calendar} alt="calenderIcon" width={20} />
                    <label htmlFor="checkOutDate">Check Out</label>
                  </div>

                  <input
                    type="date"
                    id="checkOutDate"
                    className="rounded bg-secondary/10 border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
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
                    className="rounded bg-secondary/10 border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="flexCenter gap-1 rounded-md btn-dark min-w-44"
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
              {/* form | check availability */}
            </div>
            {/* left side */}

            {/* right side */}
            <div className="flex-1 ">
              <div className="p-6 md:p-8 lg:p-10 xl:p-6 rounded-xl border border-slate-900/10 flex flex-col md:flex-row lg:flex-row xl:flex-col gap-8">
                {/* left side - contact form */}
                <div className="flex-1">
                  <h4 className="h4 mb-3">Contact Us</h4>

                  <form className="flex flex-col gap-4 text-sm text-slate-800">
                    <div className="w-full">
                      {/* full name */}
                      <label htmlFor="name" className="font-medium">
                        Full Name
                      </label>
                      <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.311 16.406a9.64 9.64 0 0 0-4.748-4.158 5.938 5.938 0 1 0-7.125 0 9.64 9.64 0 0 0-4.749 4.158.937.937 0 1 0 1.623.938c1.416-2.447 3.916-3.906 6.688-3.906 2.773 0 5.273 1.46 6.689 3.906a.938.938 0 0 0 1.622-.938M5.938 7.5a4.063 4.063 0 1 1 8.125 0 4.063 4.063 0 0 1-8.125 0"
                            fill="#475569"
                          />
                        </svg>
                        <input
                          type="text"
                          className="h-full px-2 w-full outline-none bg-transparent"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      {/* full name */}

                      {/* email */}
                      <label
                        htmlFor="email-address"
                        className="font-medium mt-4"
                      >
                        Email Address
                      </label>
                      <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.5 3.438h-15a.937.937 0 0 0-.937.937V15a1.563 1.563 0 0 0 1.562 1.563h13.75A1.563 1.563 0 0 0 18.438 15V4.375a.94.94 0 0 0-.938-.937m-2.41 1.874L10 9.979 4.91 5.313zM3.438 14.688v-8.18l5.928 5.434a.937.937 0 0 0 1.268 0l5.929-5.435v8.182z"
                            fill="#475569"
                          />
                        </svg>
                        <input
                          type="email"
                          className="h-full px-2 w-full outline-none bg-transparent"
                          placeholder="Enter your email address"
                          required
                        />
                      </div>
                      {/* email */}

                      {/* message */}
                      <label htmlFor="message" className="font-medium mt-4">
                        Message
                      </label>
                      <textarea
                        rows="4"
                        className="w-full mt-2 p-2 bg-transparent border border-slate-300 rounded-lg resize-none outline-none focus:ring-2 focus-within:ring-indigo-400 transition-all"
                        placeholder="Enter your message"
                        required
                      ></textarea>
                      {/* message */}

                      {/* submit btn */}
                      <button
                        type="submit"
                        className="flex items-center justify-center gap-1 mt-5 bg-indigo-500 hover:bg-indigo-600 text-white py-2.5 w-full rounded-full shadow-md transition"
                      >
                        Submit Form
                        <svg
                          className="mt-0.5"
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m18.038 10.663-5.625 5.625a.94.94 0 0 1-1.328-1.328l4.024-4.023H3.625a.938.938 0 0 1 0-1.875h11.484l-4.022-4.025a.94.94 0 0 1 1.328-1.328l5.625 5.625a.935.935 0 0 1-.002 1.33"
                            fill="#fff"
                          />
                        </svg>
                      </button>
                      {/* submit btn */}
                    </div>
                  </form>
                </div>
                {/* left side - contact form */}

                {/* right side - contact details */}
                <div className="flex-1">
                  <h4 className="h4 mb-3">For Buying Contact</h4>
                  <div className="text-sm w-full divide-y divide-gray-500/30 border border-gray-500/30 rounded">
                    {/* Agency Info */}
                    <div className="flex items-start justify-between p-3">
                      <div>
                        <div className="flex items-center space-x-2">
                          <h5 className="h5">{property.agency.name}</h5>

                          <p className="bg-green-500/20 px-2 py-0.5 rounded-full text-xs font-medium text-green-600 border border-green-500/30">
                            Agency
                          </p>
                        </div>

                        <p>Agency Office</p>
                      </div>

                      <img
                        src={property.agency.owner.image}
                        alt=""
                        className="w-10 h-10 rounded-full"
                      />
                    </div>
                    {/* Agency Info */}

                    {/* Phone */}
                    <div className="flexStart gap-2 p-1.5">
                      <div className="bg-green-500/20 p-1 rounded-full border border-green-500/30">
                        <img src={assets.phone} alt="" width={14} />
                      </div>

                      <p>{property.agency.contact}</p>
                    </div>
                    {/* Phone */}

                    {/* Email */}
                    <div className="flexStart gap-2 p-1.5">
                      <div className="bg-green-500/20 p-1 rounded-full border border-green-500/30">
                        <img src={assets.mail} alt="" width={14} />
                      </div>

                      <p>{property.agency.email}</p>
                    </div>
                    {/* Email */}

                    {/* Buttons */}
                    <div className="flex items-center divide-x divide-gray-500/30">
                      <button className="flex items-center justify-center gap-2 w-1/2 py-3 cursor-pointer">
                        <img src={assets.mail} alt="" width={19} />
                        Send Email
                      </button>

                      <button className="flex items-center justify-center gap-2 w-1/2 py-3 cursor-pointer">
                        <img src={assets.phone} alt="" width={19} />
                        Call Now
                      </button>
                    </div>
                    {/* Buttons */}
                  </div>
                </div>
                {/* right side - contact details */}
              </div>
            </div>
            {/* right side */}
          </div>
          {/* container */}
        </div>
      </div>
    )
  );
};

export default PropertyDetails;
