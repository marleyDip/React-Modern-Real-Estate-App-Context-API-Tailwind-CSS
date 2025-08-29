import React, { useState } from "react";

const PropertyImages = ({ property }) => {
  const [hoverIndex, setHoverIndex] = useState(0);

  const imageCaptions = [
    {
      heading: "Front View",
      desc: "Spacious interiors a stunning first impression with elegant curb appeal.",
    },
    {
      heading: "Living Area",
      desc: "Spacious interiors designed for comfort and style.",
    },
    {
      heading: "Master Bedroom",
      desc: "A private retreat featuring comfort, light, and relaxation",
    },
    {
      heading: "Modern Kitchen",
      desc: "Fully equipped kitchen with sleek finishes and modern appliances",
    },
  ];

  return (
    <div className="flex max-sm:gap-1 max-md:gap-3 gap-5 h-[400px] w-full">
      {property.images.map((pImg, index) => {
        const caption = imageCaptions[index];

        const isHovered = hoverIndex === index;

        return (
          <div
            key={index}
            className={`relative group h-[400px] rounded-2xl overflow-hidden transition-all duration-500 ${
              isHovered ? "flex-grow w-full" : "max-sm:w-10 max-md:w-20 w-56"
            } `}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(0)}
          >
            <img
              src={pImg}
              alt="property"
              className="h-full w-full object-cover object-center rounded-2xl"
            />

            <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl">
              <h3 className="h3">{caption.heading}</h3>

              <p className="text-white/90">{caption.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PropertyImages;
