import { assets } from "../assets/data";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-16 xl:pt-20 w-full bg-gradient-to-b from-[#F1EAFF] to-[#FFFFFF] text-gray-800">
      <div className="max-padd-container">
        <div className="flex flex-wrap justify-between gap-12 md:gap-6">
          {/* logo, description & social link */}
          <div className="max-w-80">
            {/* logo */}
            <div className="flex mb-4">
              <Link to={"/"}>
                <img
                  src={assets.logoImg}
                  alt="logoImage"
                  className="h-20 w-40 invert"
                />
              </Link>
            </div>
            {/* logo */}

            <p className="text-base text-justify tracking-wide font-semibold bg-gradient-to-r from-lime-700 to-pink-700 bg-clip-text text-transparent">
              Experience modern living through well-presented properties,
              professional support, and thoughtfully designed spaces.
            </p>

            {/* social links */}
            <div class="flex items-center gap-4 mt-6 text-indigo-500">
              <a
                href="#"
                class="hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 11.37a4 4 0 1 1-7.914 1.173A4 4 0 0 1 16 11.37m1.5-4.87h.01"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6M6 9H2v12h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 18c-4.51 2-5-2-7-2"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
            {/* social links */}
          </div>
          {/* logo, description & social link */}

          {/* company */}
          <div>
            <p className="text-lg text-gray-800 font-bold">COMPANY</p>
            <ul className="mt-3 flex flex-col gap-2 text-base font-semibold">
              <li>
                <a
                  href="#"
                  className="relative text-gray-500 hover:text-black font-semibold  after:content-[''] after:absolute after:left-0 after:-bottom-1  after:w-0 hover:after:w-full after:h-[2px] after:bg-blue-500  after:transition-all after:duration-300"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="relative text-gray-500 hover:text-black font-semibold  after:content-[''] after:absolute after:left-0 after:-bottom-1  after:w-0 hover:after:w-full after:h-[2px] after:bg-blue-500  after:transition-all after:duration-300"
                >
                  Careers
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="relative text-gray-500 hover:text-black font-semibold  after:content-[''] after:absolute after:left-0 after:-bottom-1  after:w-0 hover:after:w-full after:h-[2px] after:bg-blue-500  after:transition-all after:duration-300"
                >
                  Press
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="relative text-gray-500 hover:text-black font-semibold  after:content-[''] after:absolute after:left-0 after:-bottom-1  after:w-0 hover:after:w-full after:h-[2px] after:bg-blue-500  after:transition-all after:duration-300"
                >
                  Blog
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="relative text-gray-500 hover:text-black font-semibold  after:content-[''] after:absolute after:left-0 after:-bottom-1  after:w-0 hover:after:w-full after:h-[2px] after:bg-blue-500  after:transition-all after:duration-300"
                >
                  Partners
                </a>
              </li>
            </ul>
          </div>
          {/* company */}

          {/* support */}
          <div>
            <p className="text-lg text-gray-800 font-semibold">SUPPORT</p>
            <ul className="mt-3 flex flex-col gap-2 text-base font-medium">
              <li>
                <a
                  href="#"
                  className="relative text-gray-500 hover:text-black font-semibold  after:content-[''] after:absolute after:left-0 after:-bottom-1  after:w-0 hover:after:w-full after:h-[2px] after:bg-blue-500  after:transition-all after:duration-300"
                >
                  Help Center
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="relative text-gray-500 hover:text-black font-semibold  after:content-[''] after:absolute after:left-0 after:-bottom-1  after:w-0 hover:after:w-full after:h-[2px] after:bg-blue-500  after:transition-all after:duration-300"
                >
                  Safety Information
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="relative text-gray-500 hover:text-black font-semibold  after:content-[''] after:absolute after:left-0 after:-bottom-1  after:w-0 hover:after:w-full after:h-[2px] after:bg-blue-500  after:transition-all after:duration-300"
                >
                  Cancellation Options
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="relative text-gray-500 hover:text-black font-semibold  after:content-[''] after:absolute after:left-0 after:-bottom-1  after:w-0 hover:after:w-full after:h-[2px] after:bg-blue-500  after:transition-all after:duration-300"
                >
                  Contact Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="relative text-gray-500 hover:text-black font-semibold  after:content-[''] after:absolute after:left-0 after:-bottom-1  after:w-0 hover:after:w-full after:h-[2px] after:bg-blue-500  after:transition-all after:duration-300"
                >
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
          {/* support */}

          {/* subscribe */}
          <div className="max-w-80">
            <p className="h4 text-black/80">STAY UPDATED</p>

            <p className="mt-3 text-sm font-semibold">
              Subscribe to our newsletter for inspiration and special offers.
            </p>

            <div className="flex items-center max-w-md w-full mt-6 pl-4 gap-2 bg-white border border-gray-500/30 h-[46px] rounded-full shadow-xl overflow-hidden">
              <input
                type="text"
                className="w-full h-full outline-none text-sm text-gray-500"
                placeholder="Your email"
              />
              <button className="btn-dark font-medium !px-3.5 py-2 mt-0.5">
                Subscribe
              </button>
            </div>
          </div>
          {/* subscribe */}
        </div>

        <hr className="border-gray-300 mt-8" />

        {/* copyright */}
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5 font-bold">
          <p>
            © {new Date().getFullYear()}{" "}
            <a
              href="https://marleydip.netlify.app/"
              target="_blank"
              className="text-rose-600 hover:text-indigo-600"
            >
              Md Sofian Hasan
            </a>
            . All rights reserved.
          </p>

          <ul className="flex items-center gap-4">
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-black hover:underline hover:underline-offset-4 hover:decoration-2  transition-all"
              >
                Privacy
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-black hover:underline hover:underline-offset-4 hover:decoration-2  transition-all"
              >
                Terms
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-black hover:underline hover:underline-offset-4 hover:decoration-2  transition-all"
              >
                Sitemap
              </a>
            </li>
          </ul>
        </div>
        {/* copyright */}
      </div>
    </footer>
  );
};

export default Footer;
