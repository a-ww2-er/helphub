import { useState, useContext } from "react";
import Indicator from "../progress-indicator/progress-indicator";
import "./payment-details.css";
import WhatItIsAbout from "../what-it-is-about/what-it-is-about";
import ThankYou from "../thank-you/thank-you";
import { AppContext } from '../../context';

export default function PaymentDetail() {
  const [showModal, setShowModal] = useState(false);
  const {cardNumber, setCardNumber, date,setDate, cvv, setCvv, pin, setPin} = useContext(AppContext);

  // this function shows the modal after payment is done 
  function show(){
    if( cardNumber ){
      // setShowModal(true);
      console.log("kkk")
    }else{
      
    }
  }


  return (
    <section className="payment">
      <WhatItIsAbout />
      <aside className="donation">
        <Indicator />
        <h3>Payment Details</h3>
        <aside className="input-field">
        <div>
        <label htmlFor="Card Number">Card Number</label>
        <input type="number" placeholder="1234 5678 9123 4567"  value={cardNumber} onChange={(e) => setCardNumber(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="Expiry Date">Expiry Date</label>
        <input type="number" placeholder="09/12" value={date}  onChange={(e) => setDate(e.target.value)}/>
      </div>
      <div className="pin-size">
        <label htmlFor="cvv">CVV</label>
        <input type="number" placeholder="123" value={cvv} onChange={(e) => setCvv(e.target.value)}/>
      </div>
      <div className="pin-size">
        <label htmlFor="Pin">Pin</label>
        <input type="password" minLength="4" maxLength="4" placeholder="123" value={pin} onChange={(e) => setPin(e.target.value)}/>
      </div>
        </aside>
        <button onClick={show}>Pay currency type amount</button>
      </aside>

      {showModal ? <ThankYou showMmodal={showModal}/> : ""}
    </section>
  );
}
