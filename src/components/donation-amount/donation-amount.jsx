import Indicator from "../progress-indicator/progress-indicator";
import { useNavigate, useParams } from "react-router-dom";
import { currencies } from "../../currency-data";
import "./donation-amount.css";
import { useContext } from "react";
import { AppContext } from "../../context";
import Modal from "../modal/Modal";
import FindCampaign from "../find-campaign/FindCampaign";

export default function DonationAmount() {
  const { amount, setAmount, select, setSelect, setOpenModal } =
    useContext(AppContext);
  const { id } = useParams();

  const navigate = useNavigate();

  function checkValue(e ) {
    e.preventDefault();
    if (amount === "") {
      return setOpenModal(true);
    } else if (select === "") {
      return setOpenModal(true);
    } else {
      navigate(`/donation/donor-information/${id}`);
      setOpenModal(false);
    }
  }

  const currency = currencies.map((each) => {
    const { currency, id } = each;
    return (
      <option value={currency} key={id}>
        {currency}
      </option>
    );
  });

  return (
    <section className="donation-amount ">
      <FindCampaign id={id} />
      <aside className="left-side donation">
        <Indicator />
        <h3>Donation Amount</h3>
        <Modal msg={"Please ensure all fields are filled"} />
        <div className="input-field">
          <div>
            <label htmlFor="currency">select currency</label>
            <select value={select} onChange={(e) => setSelect(e.target.value)}>
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

        <button className="btn donate_btn"
          onClick={(id) => {
            checkValue(id);
          }}
        >
          Next
        </button>
      </aside>
    </section>
  );
}
