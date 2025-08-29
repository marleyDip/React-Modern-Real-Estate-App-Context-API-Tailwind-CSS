import { Link, useLocation } from "react-router-dom";
import { assets } from "../assets/data";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { useClerk, UserButton } from "@clerk/clerk-react";
import { useAppContext } from "../context/AppsContext";

const Header = () => {
  const [active, setActive] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  const { openSignIn } = useClerk();
  const { navigate, user } = useAppContext();

  const BookingIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 36
      36"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-Linecap="round"
      stroke-linejoin="round"
      class="lucide
      lucide-scroll-text-icon lucide-scroll-text"
    >
      <path d="M15 12h-5" />
      <path d="M15 8h-5" />
      <path d="M19 17V5a2 2 0 0 0-2-2H4" />
      <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
    </svg>
  );

  const toggleMenu = () => setMenuOpened((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/") {
        setActive(window.scrollY > 10);
      } else {
        setActive(true); // always stay active on other page
      }
      if (window.scrollY > 10) {
        setMenuOpened(false);
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
            <div className="relative hidden xl:flex items-center">
              <div
                className={`${
                  active ? "bg-secondary/10" : "bg-white"
                } rounded-full shadow-md overflow-hidden ring-1 ring-slate-900/10 transition-all duration-300 ease-in-out ${
                  showSearch
                    ? "w-[266px] opacity-100 px-4 py-2"
                    : "w-11 opacity-0 px-0 py-0"
                }`}
              >
                <input
                  type="text"
                  placeholder="Type here..."
                  className="w-full text-sm outline-none pr-10 placeholder-gray-400"
                />
              </div>

              <div
                onClick={() => setShowSearch((prev) => !prev)}
                className={`${
                  active ? "bg-secondary/10" : "bg-primary"
                } p-[8px] absolute right-0 rounded-full cursor-pointer ring-1 ring-slate-900/10 z-10`}
              >
                <img src={assets.search} alt="searchIcon" />
              </div>
            </div>
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
            <div className="group relative top-1">
              {/* user */}
              <div>
                {user ? (
                  <UserButton
                    appearance={{
                      elements: {
                        userButtonAvatarBox: {
                          width: "42px",
                          height: "42px",
                        },
                      },
                    }}
                  >
                    <UserButton.MenuItems>
                      <UserButton.Action
                        label="My Bookings"
                        labelIcon={<BookingIcon />}
                        onClick={() => navigate("/my-bookings")}
                      />
                    </UserButton.MenuItems>
                  </UserButton>
                ) : (
                  <button
                    onClick={openSignIn}
                    className="btn-secondary flexCenter gap-2 rounded-full"
                  >
                    Login
                    <img src={assets.user} alt="userIcon" />
                  </button>
                )}
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
