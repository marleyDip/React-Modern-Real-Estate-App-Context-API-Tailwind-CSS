import { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppsContext";
import { assets, dummyDashboardData } from "../../assets/data";

const Dashboard = () => {
  const { user, currency } = useAppContext();

  const [dashboardData, setDashboardData] = useState({
    bookings: [],
    totalBookings: 0,
    totalRevenue: 0,
  });

  const getDashboardData = async () => {
    setDashboardData(dummyDashboardData);
  };

  useEffect(() => {
    getDashboardData();
  }, [user]);

  const formatBookingDate = (checkInDate, checkOutDate) => {
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);

    const options = { day: "numeric", month: "short" };

    const checkInFormatted = checkIn.toLocaleDateString("en-US", options);

    const checkOutFormatted =
      checkIn.getMonth() === checkOut.getMonth()
        ? checkOut.getDate()
        : checkOut.toLocaleDateString("en-US", options);

    return `${checkInFormatted} - ${checkOutFormatted}`;
  };

  return (
    <div className="md:px-8 py-6 xl:py-8 m-1 sm:m-3 h-[97vh] overflow-y-scroll lg:w-11/12 bg-white shadow rounded-xl ">
      <div className="grid grid-cols-2 gap-4">
        <div className="flexStart gap-7 p-5 bg-[#fff4d2] lg:min-w-56 rounded-xl shadow-md">
          <img
            src={assets.house}
            alt="houseIcon"
            className="hidden sm:flex w-8"
          />
          <div>
            <h4 className="h4">
              {"0" + dashboardData.totalBookings.toString().padStart(2, "0")}
            </h4>

            <h5 className="h5 text-pink-600">Total Sales</h5>
          </div>
        </div>

        <div className="flexStart gap-7 p-5 bg-[#d1e8ff] lg:min-w-56 rounded-xl shadow-md">
          <img
            src={assets.dollar}
            alt="dollarIcon"
            className="hidden sm:flex w-8"
          />
          <div>
            <h4 className="h4">{dashboardData.totalRevenue}</h4>

            <h5 className="h5 text-pink-600">Total Earnings</h5>
          </div>
        </div>
      </div>

      {/* latest booking / sales */}
      <div className="mt-4">
        <div className="flex justify-between flex-wrap gap-2 sm:grid grid-cols-[2fr_2fr_1fr_1fr] lg:grid-cols-[0.5fr_2fr_2fr_1fr_1fr] px-6 py-3 bg-secondary border-2 border-slate-900/15 rounded-t-xl shadow">
          <h5 className="h5 hidden lg:block">Index</h5>

          <h5 className="h5">Property</h5>

          <h5 className="h5">Booking Dates</h5>

          <h5 className="h5">Amount</h5>

          <h5 className="h5">Status</h5>
        </div>

        <div>
          {dashboardData.bookings.map((booking, index) => (
            <div
              key={index}
              className="flex items-center justify-between flex-wrap gap-2 sm:grid grid-cols-[2fr_2fr_1fr_1fr] lg:grid-cols-[0.5fr_2fr_2fr_1fr_1fr] px-6 py-3 bg-secondary/5 border-1 border-slate-900/15 shadow"
            >
              <div className="hidden lg:block">{index + 1}</div>

              <div className="flexStart gap-x-2 max-w-64">
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img
                    src={booking.property.images[0]}
                    alt={booking.property.title}
                    className="w-16 h-10"
                  />
                </div>

                <div className="line-clamp-1 font-medium">
                  {booking.property.title}
                </div>
              </div>

              {/* <div>
                {new Date(booking.checkInDate).toLocaleDateString()} to{" "}
                {new Date(booking.checkOutDate).toLocaleDateString()}
              </div> */}

              {/* <div className="font-medium">
                {(() => {
                  const checkIn = new Date(booking.checkInDate);
                  const checkOut = new Date(booking.checkOutDate);

                  const options = { day: "numeric", month: "short" };

                  // Example: "24 Aug"
                  const checkInFormatted = checkIn.toLocaleDateString(
                    "en-US",
                    options
                  );

                  // If check-in and check-out months are the same, only show day for check-out
                  const checkOutFormatted =
                    checkIn.getMonth() === checkOut.getMonth()
                      ? checkOut.getDate() // Just the day number
                      : checkOut.toLocaleDateString("en-US", options); // Day + Month

                  return `${checkInFormatted} - ${checkOutFormatted}`;
                })()}
              </div> */}

              <div className="font-medium">
                {formatBookingDate(booking.checkInDate, booking.checkOutDate)}
              </div>

              <div className="font-semibold">
                {currency}
                {booking.totalPrice}
              </div>

              <button
                className={`${
                  booking.isPaid
                    ? "bg-green-500/90 text-white border-green-500 hover:bg-green-600"
                    : "bg-red-50 text-red-600 border-red-300 hover:bg-red-100"
                } w-24 py-1.5 rounded-full text-xs font-semibold tracking-wide shadow-sm transition-all duration-300 ease-in-out transform hover:scale-105`}
              >
                {booking.isPaid ? "Complete" : "Pending"}
              </button>

              {/* <button
                className={`${
                  booking.isPaid
                    ? "bg-green-400/80 text-white"
                    : "bg-secondary/20 text-red-500"
                } w-22 py-1 rounded-full text-xs font-medium border border-green-500/30`}
              >
                {booking.isPaid ? "Complete" : "Pending"}
              </button> */}
            </div>
          ))}
        </div>
      </div>
      {/* latest booking / sales */}
    </div>
  );
};

export default Dashboard;

/*
    padStart(2, "0") Ensures the string has at least 2 characters.

        => If it’s shorter, it pads with "0" at the start. 
        => If it’s already 2 or more characters, it stays unchanged.  
*/
