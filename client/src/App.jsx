import { Route, Routes } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./pages/Home";
import Listing from "./pages/Listing";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import PropertyDetails from "./pages/PropertyDetails";
import MyBookings from "./pages/MyBookings";
import AgencyReg from "./Components/AgencyReg";
import { useAppContext } from "./context/AppsContext";

const App = () => {
  const { showAgencyReg } = useAppContext();

  return (
    <main>
      <Header />

      {/* This only shows AgencyReg when showAgencyReg === false */}
      {!showAgencyReg && <AgencyReg />}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/listing" element={<Listing />} />

        <Route path="/listing/:id" element={<PropertyDetails />} />

        <Route path="/blog" element={<Blog />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/my-bookings" element={<MyBookings />} />
      </Routes>

      <Footer />
    </main>
  );
};

export default App;
