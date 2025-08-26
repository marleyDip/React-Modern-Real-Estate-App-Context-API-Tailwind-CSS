import { Link } from "react-router-dom";
import { assets } from "../assets/data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import required modules
import { Autoplay } from "swiper/modules";

const FeaturedProperties = () => {
  return (
    <section>
      <div>
        <span className="medium-18">Your New Home Awaits!</span>
        <h2>Discover Your Place Here</h2>

        <div>
          <h5>
            <span>Displaying 1-9</span> from 3k listings
          </h5>
          <Link to={"/listing"} onClick={() => scrollTo(0, 0)}>
            <img src={assets.sliders} alt="sliderIcon" />
          </Link>
        </div>

        {/* container */}
        <Swiper
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            600: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1124: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1300: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
          className="h-[488px] md:h-[533px] xl:h-[422px] mt-5"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
        </Swiper>
        {/* container */}
      </div>
    </section>
  );
};

export default FeaturedProperties;
