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
  const regexcard = /^.{12,18}$/;
  const regexcvv = /^.{3,4}$/;
  // this function shows the modal after payment is done
  function show() {
    if (
      regexcard.test(cardNumber) &&
      regexcvv.test(cvv) &&
      cardNumber &&
      cvv &&
      date
    ) {
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
      <FindCampaign campaignId={id} />
        <aside className="donation">
          <Indicator />
          <h3>Payment Details</h3>
          <Modal
            msg={
              !regexcard.test(cardNumber)
                ? "Card Number should be valid "
                : !regexcvv.test(cvv)
                ? "Please fill in a valid CVV "
                : !date
                ? "Please fill in a valid expiry date"
                : setOpenModal(false)
            }
          />
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
            <div className="pin-size">
              <div>
                <label htmlFor="Expiry Date">Expiry Date</label>
                <input
                  style={{ fontFamily: "heebo", textTransform: "uppercase" }}
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="cvv">CVV</label>
                <input
                  type="number"
                  placeholder="123"
                  // pattern="^.{1,6}$"
                  // required
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                />
              </div>
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
          {/* <a
            className="btn donate_btn2"
            onClick={show}
          >{`pay ${amount} ${select} `}</a> */}
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
