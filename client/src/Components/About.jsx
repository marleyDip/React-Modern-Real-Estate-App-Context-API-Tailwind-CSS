import Title from "./Title";
import { assets } from "../assets/data";

/* ! = Tailwind’s important modifier.
  pt-12 = padding-top: 3rem (48px). 
  !pt-12 = padding-top: 48px !important;
  This overrides the py-16 / xl:py-28 top padding, but only the top padding (not bottom). "py-28 !pt-12"
      => padding-top: 48px !important
      => padding-bottom: 112px
*/
const About = () => {
  return (
    <section className="max-padd-container py-16 xl:py-28 !pt-12">
      {/* container */}
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* left side - info */}
        <div className="flex-1">
          <Title
            title1={"Your Trusted Real Estate Partner"}
            title2={"Helping You Every Step of the Way"}
            para={
              "Trust, Clarity, and Simplicity are at the core of everything we do to make your property journey easy."
            }
            titleStyles={"mb-10"}
          />

          {/* feature */}
          <div className="flex flex-col  gap-6 mt-5">
            <div className="flex gap-3 font-medium">
              <img
                src={assets.calendarSecondary}
                alt="calendarSecondaryIcon"
                width={20}
              />
              <p>In-app scheduling for property viewings</p>
            </div>

            <div className="flex gap-3 font-medium">
              <img src={assets.graph} alt="graphIcon" width={20} />
              <p>Real time market price update</p>
            </div>

            <div className="flex gap-3 font-medium">
              <img src={assets.map} alt="mapIcon" width={20} />
              <p>User-friendly interface for smooth navigation</p>
            </div>

            <div className="flex gap-3 font-medium">
              <img src={assets.pound} alt="poundIcon" width={20} />
              <p>Access to off-market properties</p>
            </div>
          </div>
          {/* feature */}

          {/* rating */}
          <div className="flex items-center divide-x-2 divide-gray-300 mt-11">
            <div className="flex -space-x-3 pr-3">
              <img
                src={assets.client1}
                alt="clientImage1"
                className="w-12 h-12 rounded-full border-2 border-white hover:-translate-y-1 transition z-1"
              />

              <img
                src={assets.client2}
                alt="clientImage2"
                className="w-12 h-12 rounded-full border-2 border-white hover:-translate-y-1 transition z-[2]"
              />

              <img
                src={assets.client3}
                alt="clientImage3"
                className="w-12 h-12 rounded-full border-2 border-white hover:-translate-y-1 transition z-[3]"
              />

              <img
                src={assets.client4}
                alt="clientImage4"
                className="w-12 h-12 rounded-full border-2 border-white hover:-translate-y-1 transition z-[4]"
              />
            </div>
            <div className="pl-3">
              <div className="flex items-center">
                <img src={assets.star} alt="starIcon" width={17} />
                <img src={assets.star} alt="starIcon" width={17} />
                <img src={assets.star} alt="starIcon" width={17} />
                <img src={assets.star} alt="starIcon" width={17} />
                <img src={assets.star} alt="starIcon" width={17} />
                <p className="text-gray-600 font-medium ml-2">5.0</p>
              </div>

              <p className="text-sm text-gray-500">
                Trusted by{" "}
                <span className="font-medium text-gray-800">100,000+</span>{" "}
                users
              </p>
            </div>
          </div>
          {/* rating */}
        </div>
        {/* left side - info */}

        {/* Right side - image */}
        <div className="flex-1">
          <div className="relative flex justify-end">
            <img src={assets.about} alt="AboutImage" className="rounded-3xl" />
          </div>
        </div>
        {/* Right side - image */}
      </div>
      {/* container */}
    </section>
  );
};

export default About;
