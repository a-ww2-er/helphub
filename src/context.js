import React, { useState, useEffect } from "react";
import { orphanagesList } from "./local-data";
//context:
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //declaring states
  const [orphanages, setOrphanages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showNav, setShowNav] = useState(false);
  const [amount, setAmount] = useState("");
  const [select, setSelect] = useState("");
  const [checkBox, setCheckBox] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("")
  const [date, setDate] =  useState("");
  const [cvv, setCvv] = useState("");
  const [pin, setPin] = useState("");


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
      value={{ orphanages, setSearchTerm, setShowNav, showNav, amount, setAmount, select, setSelect, name, setName, email, setEmail,cardNumber, setCardNumber, date, setDate,cvv, setCvv, checkBox, setCheckBox,pin, setPin }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
