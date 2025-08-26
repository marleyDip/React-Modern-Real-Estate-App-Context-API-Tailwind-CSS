import About from "../Components/About";
import Cta from "../Components/Cta";
import Faq from "../Components/Faq";
import FeaturedProperties from "../Components/FeaturedProperties";
import Hero from "../Components/Hero";
import Testimonial from "../Components/Testimonial";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-[#fffbee] to-white">
      <Hero />
      <About />
      <FeaturedProperties />
      <Faq />
      <Cta />
      <Testimonial />
    </div>
  );
};

export default Home;
