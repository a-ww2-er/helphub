import React, { useState, useEffect } from "react";
import { orphanagesList } from "./local-data";
import ThankYou from "./components/thank-you/thank-you";

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
  const [paymentData, setPaymentData] = useState([])
  const [date, setDate] = useState("");
  const [cvv, setCvv] = useState("");
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


  // paystack integration 
  const handlePayment = (email, amount) => {
    const handler = PaystackPop.setup({
      key: 'pk_test_244bad1335a46ad6442abcb487faefe329bf4989',
      email,
      amount: amount * 100,

      onClose: () => {
        alert('Window closed.');
      },

      callback: (response) => {
        const message = 'Payment complete! Reference: ' + response.reference;
        // call thank you component here
        alert(message);
      }
    });

    handler.openIframe();
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
        openModal,
        currentCampaign,
        setCurrentCampaign,
        setOpenModal,
        paymentData,
        setPaymentData,
        handlePayment
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
