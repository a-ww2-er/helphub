import React, { useState, useContext, useEffect } from "react";
import { orphanagesList } from "./local-data";
//context:
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //declaring states
  const [orphanages, setOrphanages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const localData = () => {
      const filter = orphanagesList.filter((data) =>
        data.title.includes(searchTerm)
      );
      if (!searchTerm) {
        return orphanagesList;
      }
      return filter;
    };
    setOrphanages(localData);
  }, [searchTerm]);
  // useEffect (()=>{
  //   const localData = orphanagesList.map((items)=>{
  //     const {id, title, description, image} =items
  //     return {id, title,description,image}
  //   })
  //   setOrphanages(localData)},[])

  return (
    <AppContext.Provider
      value={{ orphanages, setSearchTerm, setShowNav, showNav }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
