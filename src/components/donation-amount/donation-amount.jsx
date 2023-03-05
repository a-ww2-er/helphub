import Indicator from "../progress-indicator/progress-indicator";
import { useNavigate } from "react-router-dom";
import { currencies } from "../../currency-data";
import WhatItIsAbout from "../what-it-is-about/what-it-is-about";
import "./donation-amount.css";
import { useContext } from "react";
import { AppContext } from "../../context";

export default function DonationAmount() {
  const { amount, setAmount, select, setSelect } = useContext(AppContext);

  const navigate = useNavigate()

  function checkValue(e) {
    e.preventDefault();
    if (amount === "") {
      return
    }else if(select === ""){
      return
    } else {
      navigate("/donation/donor-information")
    }
  }

  const currency = currencies.map((each) => {
    const {currency,id} = each;
    return (
      <option value={currency} key={id}>
        {currency}
      </option>
    );
  });

  return (
    <section className="donation-amount ">
      <WhatItIsAbout />

      <aside className="left-side donation">
        <Indicator />
        <h3>Donation Amount</h3>
        <div className="input-field">
          <div>
            <label htmlFor="currency">select currency</label>
            <select
              value={select} onChange={(e) => setSelect(e.target.value)}
            >
              {currency}
            </select>
          </div>
          <div>
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>

        <button onClick={checkValue}>
        Next
        </button>
      </aside>
    </section>
  );
}
