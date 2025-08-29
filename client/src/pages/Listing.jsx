import Item from "../Components/Item";
import { useAppContext } from "../context/AppsContext";
import Lottie from "lottie-react";
import empty from "../assets/empty.json";

const Listing = () => {
  const { properties, categoryOnlyData } = useAppContext();
  //console.log(categoryOnlyData, properties);

  const sortOptions = ["Relevant", "Low to High", "High to Low"];

  const priceRange = [
    "0 to 10000",
    "10000 to 20000",
    "20000 to 40000",
    "40000 to 80000",
  ];

  return (
    <div className="bg-gradient-to-r from-[#fffbee] to-white py-28">
      <div className="max-padd-container flex flex-col sm:flex-row gap-8 mb-16">
        {/* left side - filers */}
        <div className="bg-secondary/10 ring-1 ring-slate-900/5 p-4 sm:min-w-60 sm:h-[600px] rounded-xl shadow-md">
          {/* sort by price */}
          <div className="py-3 mt-4">
            <h5 className="h5 mb-3">Sort By</h5>

            <select className="bg-secondary/10 border border-slate-900/10 outline-none text-gray-500 medium-14 px-2 h-8 w-full rounded">
              {sortOptions.map((sort, index) => (
                <option key={index} value="sort">
                  {sort}
                </option>
              ))}
            </select>
          </div>
          {/* sort by price */}

          {/* property type */}
          <div className="py-3 mt-4">
            <h5 className="h5 mb-4">Property Type</h5>

            {categoryOnlyData.map((type) => (
              <label key={type} className="flex gap-2 medium-14">
                <input type="checkbox" />
                {type}
              </label>
            ))}
          </div>
          {/* property type */}

          {/* price range */}
          <div className="py-3 mt-2">
            <h5 className="h5 mb-4">Price Range</h5>

            {priceRange.map((type) => (
              <label
                key={type}
                className="flex gap-3 items-center cursor-pointer"
              >
                <input type="checkbox" className="hidden peer" />
                <span className="w-4 h-4 border border-blue-600 rounded-full relative flex items-center justify-center peer-checked:after:content-[''] peer-checked:after:w-2 peer-checked:after:h-2 peer-checked:after:bg-blue-600 peer-checked:border-blue-600 peer-checked:after:rounded-full peer-checked:after:absolute"></span>
                <span className="text-gray-700 select-none">{type}</span>
              </label>
            ))}
          </div>
          {/* price range */}
        </div>
        {/* left side - filers */}

        {/* right side - product */}
        <div className="min-h-[97vh] overflow-y-auto px-4 py-6 rounded-xl">
          {properties.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {properties.map((property) => (
                <Item key={property._id} property={property} />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center w-full mt-10 ml-20">
              <Lottie
                animationData={empty}
                className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px]"
              />
            </div>
          )}
        </div>
        {/* right side - product */}
      </div>
    </div>
  );
};

export default Listing;
