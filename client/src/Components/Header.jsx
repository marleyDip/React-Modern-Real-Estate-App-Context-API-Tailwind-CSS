import { Link, useLocation } from "react-router-dom";
import { assets } from "../assets/data";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

const Header = () => {
  const [active, setActive] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpened((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/") {
        setActive(window.scrollY > 10);
      } else {
        setActive(true); // always stay active on other page
      }
    };

    window.addEventListener("scroll", handleScroll);
    // run once to set initial state
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  /* This is a React useEffect hook that dynamically updates your navbar (or any component) based on the scroll position and the current route (location.pathname). Let’s break it down:
  ✅ What it does:

  Defines handleScroll:
    => If the user is on the home page ("/"):
        => Sets active = true only if the page is scrolled down more than 10px (window.scrollY > 10).
        => Otherwise, it stays inactive.
    => If the user is on any other page:       
        => active is always set to true.
      
  Adds a scroll listener:
    => window.addEventListener("scroll", handleScroll) → updates the state whenever the user scrolls.
    
  Runs once on mount:
      => Calls handleScroll() immediately so the state is correct without waiting for a scroll.
  
  Cleans up:
      => On unmount or when location.pathname changes, it removes the scroll listener. 
*/

  return (
    <header
      className={`${
        active ? "bg-white shadow-md py-3" : "py-4"
      } fixed top-0 left-0 ring-0 w-full z-50 transition-all duration-200`}
    >
      <div className="max-padd-container">
        {/* container */}
        <div className="flexBetween">
          {/* logo */}
          <div className="flex flex-1">
            <Link to={"/"}>
              <img
                src={assets.logoImg}
                alt="companyLogo"
                className={`${active && "invert"} h-11 w-24`}
                //className={`${active ? "invert" : ""} h-11 w-25`}
                // It inverts the colors of the element. Black becomes white, white becomes black, and colors flip to their opposites.
                // invert → applies full inversion (filter: invert(100%))
                // invert-0 → removes inversion (filter: invert(0))

                // When active = true, the element’s colors (e.g., an icon or logo) will flip.
                // When active = false, it stays normal.
              />
            </Link>
          </div>
          {/* logo */}

          {/* navbar */}
          {/* <Navbar
            setMenuOpened={setMenuOpened}
            containerStyles={`${
              menuOpened
                ? "lg:hidden fixed flex flex-col items-start w-52 p-5 gap-y-8 top-16 right-6 bg-white rounded-xl shadow-md ring-1 ring-slate-900/50 z-50"
                : "hidden lg:flex gap-x-5 xl:gap-x-1 medium-15 p-1"
            } ${!menuOpened && !active ? "text-white" : ""}`}
          /> */}

          {/* Mobile Nav */}
          {menuOpened && (
            <Navbar
              setMenuOpened={setMenuOpened}
              containerClassName="fixed flex flex-col items-start w-52 p-5 gap-y-8 top-16 right-6 bg-white rounded-xl shadow-md ring-1 ring-slate-900/50 z-50 lg:hidden"
            />
          )}

          {/* Desktop Nav */}
          <Navbar
            setMenuOpened={setMenuOpened}
            containerClassName={`hidden lg:flex gap-x-5 xl:gap-x-1 p-1 ${
              !menuOpened && !active ? "text-white" : ""
            }`}
          />

          {/* If you want the parent to control styles of a child component, you’d usually pass "containerClassName" as a prop: */}
          {/* navbar */}

          {/* btn, search bar & profile */}
          <div className="flex sm:flex-1 items-center sm:justify-end gap-x-4 sm:gap-x-8">
            {/* search bar */}
            <div>s</div>
            {/* search bar */}

            {/* menu toggle */}
            <>
              {menuOpened ? (
                <img
                  src={assets.close}
                  alt="closeMenuIcon"
                  onClick={toggleMenu}
                  className={`${
                    !active && "invert"
                  } lg:hidden cursor-pointer text-xl transform hover:rotate-180 transition-all duration-200 ease-in-out`}
                />
              ) : (
                <img
                  src={assets.menu}
                  alt="openMenuIcon"
                  onClick={toggleMenu}
                  className={`${
                    !active && "invert"
                  } lg:hidden cursor-pointer text-xl`}
                />
              )}
            </>
            {/* menu toggle */}

            {/* user profile */}
            <div>
              {/* user */}
              <div>
                <div>
                  <button className="btn-secondary flexCenter gap-2 rounded-full">
                    Login
                    <img src={assets.user} alt="userIcon" />
                  </button>
                </div>
              </div>
              {/* user */}
            </div>
            {/* user profile */}
          </div>
          {/* btn, search bar & profile */}
        </div>
        {/* container */}
      </div>
    </header>
  );
};

export default Header;
