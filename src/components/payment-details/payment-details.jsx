import { useState, useContext } from "react";
import Indicator from "../progress-indicator/progress-indicator";
import "./payment-details.css";

import ThankYou from "../thank-you/thank-you";
import { AppContext } from "../../context";
import FindCampaign from "../find-campaign/FindCampaign";
import { useParams } from "react-router-dom";
import Modal from "../modal/Modal";
import { campaigns } from "../../campaign-data";
import Navbar from "../navbar/navbar-component";

export default function PaymentDetail() {
  const [showModal, setShowModal] = useState(false);
  const {
    select,
    cardNumber,
    setCardNumber,
    date,
    setDate,
    cvv,
    setCvv,
    handlePayStack,
    amount,
    setOpenModal,
    currentCampaign,
    currentPage,
    transaction,
  } = useContext(AppContext);
  const { id } = useParams();

  // this function shows the modal after payment is done
  function show() {
    if (cardNumber && cvv && date) {
      setOpenModal(false);
      handlePayStack(id, campaigns, setShowModal);
      // console.log(amount);
      // console.log(currentCampaign.value)
    } else {
      setOpenModal(true);
    }
  }

  return (
    <>
      <Navbar
        firstName="home"
        secondName="campaigns"
        thirdName="about"
        fourthName="contact Us"
        firstLink={`/orphanages/${currentPage}`}
        secondLink={`/orphanages/campaign/${currentCampaign}`}
      />
      <section className="payment">
        <FindCampaign id={id} />
        <aside className="donation">
          <Indicator />
          <h3>Payment Details</h3>
          <Modal msg={"Please ensure all fields are filled correctly"} />
          <aside className="input-field">
            <div>
              <label htmlFor="Card Number">Card Number</label>
              <input
                type="number"
                placeholder="0000 0000 0000 0000"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="Expiry Date">Expiry Date</label>
              <input
                type="number"
                placeholder="MM/YY"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="pin-size">
              <label htmlFor="cvv">CVV</label>
              <input
                type="number"
                placeholder="123"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>
            {/* <div className="pin-size">
            <label htmlFor="Pin">Pin</label>
            <input
              type="password"
              minLength="4"
              maxLength="4"
              placeholder="123"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
            />
          </div> */}
          </aside>
          <button onClick={show}>{`pay ${amount} ${select} `}</button>
        </aside>

        {showModal ? (
          <ThankYou showModal={showModal} id={id} transaction={transaction} />
        ) : (
          ""
        )}
      </section>
    </>
  );
}
