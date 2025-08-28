import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/data";

const Item = ({ property }) => {
  return (
    // <Link
    //   to={"/listing" + property._id}
    //   className="group block rounded-lg bg-white ring-1 ring-slate-900/5 shadow-md hover:shadow-lg"
    // >
    <Link
      to={`/listing/${property._id}`}
      className="group block rounded-lg bg-white ring-1 ring-slate-900/5 shadow-md hover:shadow-lg"
    >
      {/* image */}
      <div className="relative overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          className="h-[16rem] w-full aspect-square object-cover rounded-t-xl group-hover:scale-105 transition-all duration-500 ease-in-out"
        />

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex gap-1 items-start p-2">
          {property.amenities.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-white/90 text-gray-700 backdrop-blur-sm rounded-full"
            >
              {item}
            </span>
          ))}

          <span className="absolute bottom-2 left-2 px-3 py-1 text-xs font-medium bg-white/90 text-gray-700 backdrop-blur-sm rounded-full">
            {property.city}
          </span>
        </div>

        {/* <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
          <span className="absolute top-0 bottom-4 px-3 py-1 text-xs font-medium bg-white/90 text-gray-700 backdrop-blur-sm rounded-full">
            {property.amenities.join(", ")}
          </span>
        </div> */}
      </div>
      {/* image */}

      {/* info */}
      <div className="p-3">
        <div className="flexBetween">
          <h5 className="bold-16 my-2">{property.propertyType}</h5>

          <div className="bold-15 text-amber-600">
            ৳{property.price.sale} | ৳{property.price.rent}.00{" "}
            <span className="text-sm">/night</span>
          </div>
        </div>

        <h4 className="h4 line-clamp-1">{property.title}</h4>

        <div className="flex py-4 space-x-4 divide-x divide-slate-900/50">
          <p className="flexCenter gap-x-2 pr-4 font-medium">
            <img src={assets.bed} alt="facilitiesIcon" width={21} />
            {property.facilities.bedrooms}
          </p>

          <p className="flexCenter gap-x-2 pr-4 font-medium">
            <img src={assets.bath} alt="facilitiesIcon" width={21} />
            {property.facilities.bathrooms}
          </p>

          <p className="flexCenter gap-x-2 pr-4 font-medium">
            <img src={assets.car} alt="facilitiesIcon" width={21} />
            {property.facilities.garages}
          </p>

          <p className="flexCenter gap-x-2 pr-4 font-medium">
            <img src={assets.ruler} alt="facilitiesIcon" width={21} />
            {property.area}
          </p>
        </div>

        <p className="pt-2 mb-4 line-clamp-2 font-medium text-justify text-neutral-700">
          {property.description}
        </p>
      </div>
      {/* info */}
    </Link>
  );
};

export default Item;
