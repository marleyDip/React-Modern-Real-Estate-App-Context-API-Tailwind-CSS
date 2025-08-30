import { useEffect } from "react";
import { assets } from "../../assets/data";
import { useAppContext } from "../../context/AppsContext";
import { Link, NavLink, Outlet } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";

const Sidebar = () => {
  const { navigate, isOwner } = useAppContext();
  const { user } = useUser();

  const navItems = [
    {
      path: "/owner",
      label: "Dashboard",
      icon: assets.dashboard,
    },
    {
      path: "/owner/add-property",
      label: "Add Property",
      icon: assets.housePlus,
    },
    {
      path: "/owner/list-property",
      label: "List Property",
      icon: assets.list,
    },
  ];

  useEffect(() => {
    if (!isOwner) {
      navigate("/");
    }
  }, [isOwner, navigate]);

  return (
    <div className="bg-gradient-to-r from-[#fffbee] to-white">
      <div className="mx-auto max-w-[1440px] flex flex-col md:flex-row">
        {/* sidebar */}
        <div className="max-md:flexCenter flex flex-col justify-between bg-white sm:m-3 md:min-w-[20%] md:min-h-[97vh] rounded-xl shadow">
          <div className="flex flex-col gap-y-6 max-md:items-center md:flex-col md:pt-5">
            {/* logo & profile */}
            <div className="w-full flex justify-between md:flex-col">
              <div className="flex flex-1 p-3 lg:pl-8">
                <Link to={"/owner"}>
                  <img
                    src={assets.logoImg}
                    alt="ownerLogo"
                    className="h-11 w-24 bg-blue-600"
                  />
                </Link>
              </div>

              <div className="md:hidden flex items-center gap-3 md:bg-primary rounded-b-xl p-2 pl-5 lg:pl-10 md:mt-10">
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: {
                        width: "45px",
                        height: "45px",
                      },
                    },
                  }}
                />
                <div className="text-sm font-semibold text-gray-800 capitalize">
                  {user?.firstName} {user?.lastName}
                </div>
              </div>
            </div>
            {/* logo & profile */}

            {/* navLink */}
            <div className="flex md:flex-col md:gap-x-5 gap-y-8 md:mt-4">
              {navItems.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.path}
                  end={link.path === "/owner"}
                  className={({ isActive }) =>
                    isActive
                      ? "flexStart gap-x-2 p-5 lg:pl-12 bold-13 h-10 bg-secondary/10 max-md:border-b-4 md:border-r-4 border-secondary sm:!text-sm cursor-pointer"
                      : "flexStart gap-x-2 lg:pl-12 p-5 bold-13 sm:!text-sm cursor-pointer h-10 rounded-xl"
                  }
                >
                  <img
                    src={link.icon}
                    alt={link.label}
                    className="hidden md:flex"
                    width={18}
                  />

                  <div>{link.label}</div>
                </NavLink>
              ))}
            </div>
            {/* navLink */}
          </div>

          {/* bottom */}
          <div className="hidden md:flex items-center gap-3 md:bg-primary border-t border-slate-900/15 rounded-b-xl p-2 pl-5 lg:pl-10 md:mt-10">
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: {
                    width: "45px",
                    height: "45px",
                  },
                },
              }}
            />
            <div className="text-sm font-semibold text-gray-800 capitalize">
              {user?.firstName} {user?.lastName}
            </div>
          </div>
          {/* bottom */}
        </div>
        {/* sidebar */}

        {/* nested routing */}
        <Outlet />
        {/* nested routing */}
      </div>
    </div>
  );
};

export default Sidebar;
