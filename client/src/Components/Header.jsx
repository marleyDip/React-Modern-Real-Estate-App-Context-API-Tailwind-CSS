import { Link } from "react-router-dom";
import { assets } from "../assets/data";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="">
      <div className="max-padd-container">
        {/* container */}
        <div className="flexBetween">
          {/* logo */}
          <div className="flex-1">
            <Link to={"/"}>
              <img
                src={assets.logoImg}
                alt="companyLogo"
                className="h-11 w-25"
              />
            </Link>
          </div>
          {/* logo */}

          {/* navbar */}
          <Navbar />
          {/* navbar */}

          {/* btn, search bar & profile */}
          <div className="flex sm:flex-1 items-center sm:justify-end gap-x-4 sm:gap-x-8">
            {/* search bar */}
            <div>s</div>
            {/* search bar */}

            {/* menu toggle */}
            <>menu</>
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
