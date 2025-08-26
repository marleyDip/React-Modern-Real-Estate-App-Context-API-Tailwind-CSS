import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProperties } from "../assets/data";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);

  const navigate = useNavigate();

  const getProperties = () => {
    setProperties(dummyProperties);
  };

  useEffect(() => {
    getProperties(); // call it
  }, []);

  const value = {
    navigate,
    properties,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
