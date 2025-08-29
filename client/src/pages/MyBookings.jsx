import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppsContext";
import { assets, dummyBookingsData } from "../assets/data";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const { currency, user } = useAppContext();

  const getUserBooking = () => {
    setBookings(dummyBookingsData);
  };

  useEffect(() => {
    if (user) {
      getUserBooking();
    }
  }, [user]);

  return (
    <div className="max-padd-container bg-gradient-to-r from-[#fffbee] to-white py-16 pt-28">
      {bookings?.map((booking) => (
        <div
          key={booking._id}
          className="bg-white ring-1 ring-slate-900/5 p-3 pr-4 mt-3 rounded-lg shadow-md"
        >
          {/* property list */}
          <div className="flexStart gap-3 mb-3">
            <img
              src={booking.property.images[0]}
              alt="propertyImage"
              className="h-14 w-26 object-cover rounded-lg"
            />

            <div>
              <h5 className="h5 capitalize line-clamp-1">
                {booking.property.title}
              </h5>

              <div className="flex gap-4 mt-0.5">
                <div className="flex items-center gap-x-2">
                  <h5 className="medium-14">Guests:</h5>

                  <p className="font-semibold">{booking.guests}</p>
                </div>

                <div className="flex items-center gap-x-2">
                  <h5 className="medium-14">Total:</h5>

                  <p className="font-semibold">
                    {currency}
                    {booking.totalPrice}
                  </p>
                </div>
              </div>

              <p className="flex place-items-baseline gap-1 font-medium mt-1">
                <img src={assets.pin} alt="mapImage" width={13} />
                {booking.property.address}
              </p>
            </div>
          </div>
          {/* property list */}

          {/* booking summary */}
          <div className="flex flex-col lg:flex-row items-start justify-between lg:items-center gap-3 border-t border-gray-300 pt-3">
            <div className="flex gap-2 gap-x-4 flex-wrap">
              <div className="flex items-center gap-x-2">
                <h5 className="medium-14">Booking Id:</h5>

                <p className="text-gray-400 text-xs break-all font-semibold">
                  {booking._id}
                </p>
              </div>

              <div className="flex items-center gap-x-2">
                <h5 className="medium-14">Check-In:</h5>

                <p className="text-gray-400 text-xs font-semibold">
                  {new Date(booking.checkInDate).toDateString()}
                </p>
              </div>

              <div className="flex items-center gap-x-2">
                <h5 className="medium-14">Check-Out:</h5>

                <p className="text-gray-400 text-xs font-semibold">
                  {new Date(booking.checkOutDate).toDateString()}
                </p>
              </div>
            </div>

            <div className="flex gap-2 gap-x-3">
              <div className="flex items-center gap-x-2">
                <h5 className="medium-14">Payment:</h5>

                <div className="flex items-center gap-1">
                  <span
                    className={`min-w-2.5 h-2.5 rounded-full ${
                      booking.isPaid ? "bg-green-500" : "bg-yellow-500"
                    }`}
                  />
                  <p className="font-semibold">
                    {booking.isPaid ? "Paid" : "Unpaid"}
                  </p>
                </div>
              </div>

              {!booking.isPaid && (
                <button className="btn-secondary !py-1 !item-xs rounded-sm shadow-sm">
                  Pay Now
                </button>
              )}
            </div>
          </div>
          {/* booking summary */}
        </div>
      ))}
    </div>
  );
};

export default MyBookings;
