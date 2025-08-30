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
import Sidebar from "./Components/owner/Sidebar";
import Dashboard from "./pages/owner/Dashboard";
import AddProperty from "./pages/owner/AddProperty";
import ListProperty from "./pages/owner/ListProperty";

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

        <Route path="/owner" element={<Sidebar />}>
          <Route index element={<Dashboard />} />

          <Route path="/owner/add-property" element={<AddProperty />} />

          <Route path="/owner/list-property" element={<ListProperty />} />
        </Route>
      </Routes>

      <Footer />
    </main>
  );
};

export default App;
