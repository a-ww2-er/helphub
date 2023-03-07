import React, { useState, useEffect } from "react";
import { orphanagesList } from "./local-data";
//context:
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //declaring states
  const [orphanages, setOrphanages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showNav, setShowNav] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [openModal,setOpenModal] = useState(false)
  const [amount, setAmount] = useState("");
  const [select, setSelect] = useState("");
  const [checkBox, setCheckBox] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [date, setDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [pin, setPin] = useState("");
  const [currentCampaign, setCurrentCampaign] = useState(0);

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

  function scrollFunc() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  }
  // useEffect (()=>{
  //   const localData = orphanagesList.map((items)=>{
  //     const {id, title, description, image} =items
  //     return {id, title,description,image}
  //   })
  //   setOrphanages(localData)},[])

  return (
    <AppContext.Provider
      value={{
        orphanages,
        scrollFunc,
        setSearchTerm,
        setShowNav,
        setCurrentPage,
        currentPage,
        showNav,
        amount,
        setAmount,
        select,
        setSelect,
        name,
        setName,
        email,
        setEmail,
        cardNumber,
        setCardNumber,
        date,
        setDate,
        cvv,
        setCvv,
        checkBox,
        setCheckBox,
        pin,
        setPin,
        openModal,
        currentCampaign,
        setCurrentCampaign,
        setOpenModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
