import { useState } from "react";
import { assets } from "../../assets/data";

const AddProperty = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    city: "",
    country: "",
    address: "",
    area: "",
    propertyType: "",
    priceRent: "",
    priceSale: "",
    bedrooms: "",
    bathrooms: "",
    garages: "",
    amenities: {
      parking: false,
      wifi: false,
      backyard: "",
      terrace: "",
    },
  });

  const [loading, setLoading] = useState(false);

  return (
    <div className="md:px-8 py-6 xl:py-8 m-1.5 sm:m-3 h-[97vh] lg:w-11/12 overflow-y-scroll bg-white shadow rounded-xl">
      <form className="flex flex-col gap-y-3.5 px-2 text-sm xl:max-w-3xl">
        {/* Property name */}
        <div className="w-full">
          <h5 className="h5">Property Name</h5>
          <input
            type="text"
            value={inputs.title}
            onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
            placeholder="Type here..."
            className="w-full mt-1 px-4 py-2 text-sm rounded-lg border border-slate-300 bg-secondary/5 focus:bg-secondary/10 placeholder:text-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-300 focus:outline-none transition-all duration-200"
          />
        </div>
        {/* Property name */}

        {/* Property description */}
        <div className="w-full">
          <h5 className="h5">Property Description</h5>
          <textarea
            type="text"
            value={inputs.description}
            onChange={(e) =>
              setInputs({ ...inputs, description: e.target.value })
            }
            rows={5}
            placeholder="Type here..."
            className="w-full mt-1 px-4 py-2 text-sm rounded-lg border border-slate-300 bg-secondary/5 focus:bg-secondary/10 placeholder:text-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-300 focus:outline-none resize transition-all duration-200"
          />
        </div>
        {/* Property description */}

        {/* Property location & Type */}
        <div className="flex gap-4">
          <div className="w-full">
            <h5 className="h5">City</h5>
            <input
              type="text"
              value={inputs.city}
              onChange={(e) => setInputs({ ...inputs, city: e.target.value })}
              placeholder="Type here..."
              className="w-full mt-1 px-4 py-2 text-sm rounded-lg border border-slate-300 bg-secondary/5 focus:bg-secondary/10 placeholder:text-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-300 focus:outline-none transition-all duration-200"
            />
          </div>

          <div className="w-full">
            <h5 className="h5">Country</h5>
            <input
              type="text"
              value={inputs.country}
              onChange={(e) =>
                setInputs({ ...inputs, country: e.target.value })
              }
              placeholder="Type here..."
              className="w-full mt-1 px-4 py-2 text-sm rounded-lg border border-slate-300 bg-secondary/5 focus:bg-secondary/10 placeholder:text-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-300 focus:outline-none transition-all duration-200"
            />
          </div>

          <div>
            <h5 className="h5">Property Type</h5>
            <select
              value={inputs.propertyType}
              onChange={(e) =>
                setInputs({ ...inputs, propertyType: e.target.value })
              }
              className="w-36 mt-1 px-4 py-2 text-sm rounded-lg border border-slate-300 bg-secondary/5 focus:bg-secondary/10 placeholder:text-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-300 focus:outline-none transition-all duration-200"
            >
              <option value="">Select Type</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="villa">Villa</option>
              <option value="penthouse">Penthouse</option>
              <option value="townhouse">Townhouse</option>
              <option value="commercial">Commercial</option>
              <option value="land">Land Plot</option>
            </select>
          </div>
        </div>
        {/* Property location & Type */}

        {/* Property Address & Area */}
        <div className="flex gap-4 flex-wrap w-full">
          <div className="flex-1">
            <h5 className="h5">Address</h5>
            <input
              type="text"
              value={inputs.address}
              onChange={(e) =>
                setInputs({ ...inputs, address: e.target.value })
              }
              placeholder="Type here..."
              className="w-full mt-1 px-4 py-2 text-sm rounded-lg border border-slate-300 bg-secondary/5 focus:bg-secondary/10 placeholder:text-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-300 focus:outline-none transition-all duration-200"
            />
          </div>

          <div className="w-32">
            <h5 className="h5">Area</h5>
            <input
              type="number"
              value={inputs.area}
              onChange={(e) => setInputs({ ...inputs, area: e.target.value })}
              placeholder="Area (sq ft)"
              className="w-full mt-1 px-4 py-2 text-sm rounded-lg border border-slate-300 bg-secondary/5 focus:bg-secondary/10 placeholder:text-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-300 focus:outline-none transition-all duration-200"
            />
          </div>
        </div>
        {/* Property Address & Area */}

        {/* Property Price & Features */}
        <div className="flex flex-wrap gap-4">
          <div>
            <h5 className="h5">
              Rent Price <span className="text-xs">/night</span>
            </h5>
            <input
              type="number"
              value={inputs.priceRent}
              onChange={(e) =>
                setInputs({ ...inputs, priceRent: e.target.value })
              }
              min={99}
              placeholder="100"
              className="w-28 mt-1 px-4 py-2 text-sm rounded-lg border border-slate-300 bg-secondary/5 focus:bg-secondary/10 placeholder:text-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-300 focus:outline-none transition-all duration-200"
            />
          </div>

          <div>
            <h5 className="h5">Sale Price</h5>
            <input
              type="number"
              value={inputs.priceSale}
              onChange={(e) =>
                setInputs({ ...inputs, priceSale: e.target.value })
              }
              min={9999}
              placeholder="10000"
              className="w-28 mt-1 px-4 py-2 text-sm rounded-lg border border-slate-300 bg-secondary/5 focus:bg-secondary/10 placeholder:text-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-300 focus:outline-none transition-all duration-200"
            />
          </div>

          <div>
            <h5 className="h5">Bedrooms</h5>
            <input
              type="number"
              value={inputs.bedrooms}
              onChange={(e) =>
                setInputs({ ...inputs, bedrooms: e.target.value })
              }
              min={1}
              placeholder="1"
              className="w-20 mt-1 px-4 py-2 text-sm rounded-lg border border-slate-300 bg-secondary/5 focus:bg-secondary/10 placeholder:text-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-300 focus:outline-none transition-all duration-200"
            />
          </div>

          <div>
            <h5 className="h5">Bathrooms</h5>
            <input
              type="number"
              value={inputs.bathrooms}
              onChange={(e) =>
                setInputs({ ...inputs, bathrooms: e.target.value })
              }
              min={1}
              placeholder="1"
              className="w-20 mt-1 px-4 py-2 text-sm rounded-lg border border-slate-300 bg-secondary/5 focus:bg-secondary/10 placeholder:text-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-300 focus:outline-none transition-all duration-200"
            />
          </div>

          <div>
            <h5 className="h5">Garages</h5>
            <input
              type="number"
              value={inputs.garages}
              onChange={(e) =>
                setInputs({ ...inputs, garages: e.target.value })
              }
              min={1}
              placeholder="1"
              className="w-20 mt-1 px-4 py-2 text-sm rounded-lg border border-slate-300 bg-secondary/5 focus:bg-secondary/10 placeholder:text-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-300 focus:outline-none transition-all duration-200"
            />
          </div>
        </div>
        {/* Property Price & Features */}

        {/* amenities */}
        <div>
          <h5 className="h5">Amenities</h5>
          <div className="flex gap-3 flex-wrap mt-1">
            {Object.keys(inputs.amenities).map((amenity, index) => (
              <div key={index} className="flex gap-1">
                <input
                  type="checkbox"
                  id={`amenities${index + 1}`}
                  value={inputs.amenities[amenity]}
                  onChange={() =>
                    setInputs({
                      ...inputs,
                      amenities: {
                        ...inputs.amenities,
                        [amenity]: !inputs.amenities[amenity], // Toggles the value of that amenity (checked → unchecked, unchecked → checked).
                      },
                    })
                  }
                />
                <label htmlFor={`amenities${index + 1}`}>{amenity}</label>
              </div>
            ))}
          </div>
        </div>
        {/* amenities */}

        {/* images */}
        <div className="flex gap-2 mt-3">
          {Object.keys(images).map((key) => (
            <label
              key={key}
              htmlFor={`propertyImage${key}`}
              className="ring-2 ring-slate-900/10
               overflow-hidden rounded-lg shadow-sm"
            >
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setImages({ ...images, [key]: e.target.files[0] })
                }
                id={`propertyImage${key}`}
                hidden
              />

              <div className="h-12 w-24 bg-secondary/5 flexCenter cursor-pointer hover:bg-secondary/10 transition-all duration-200">
                <img
                  src={
                    images[key]
                      ? URL.createObjectURL(images[key])
                      : assets.uploadIcon
                  }
                  alt="uploadArea"
                  className="overflow-hidden object-contain"
                />
              </div>
            </label>
          ))}
        </div>
        {/* images */}

        {/* submit btn */}
        <button
          type="submit"
          disabled={loading}
          className="btn-secondary text-black font-semibold mt-3 p-2 max-w-36 sm:w-full rounded-xl shadow-md"
        >
          {loading ? "Adding..." : "Add property"}
        </button>
        {/* submit btn */}
      </form>
    </div>
  );
};

export default AddProperty;
