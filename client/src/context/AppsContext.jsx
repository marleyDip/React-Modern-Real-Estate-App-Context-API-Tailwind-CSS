import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProperties } from "../assets/data";
import { useUser } from "@clerk/clerk-react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);

  const { user } = useUser();
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();

  const getProperties = () => {
    setProperties(dummyProperties);
  };

  const getUniqueCategory = (data, property) => {
    let category = data.map((element) => {
      return element[property];
    });

    category = ["All", ...new Set(category)];
    return category;
  };

  const categoryOnlyData = getUniqueCategory(properties, "propertyType");

  useEffect(() => {
    getProperties(); // call it
  }, []);

  const value = {
    navigate,
    properties,
    categoryOnlyData,
    currency,
    user,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
