import Indicator from "../progress-indicator/progress-indicator";
import "./donor-information.css";

import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context";
import Modal from "../modal/Modal";
import FindCampaign from "../find-campaign/FindCampaign";
import Navbar from "../../components/navbar/navbar-component";

export default function DonorInformation() {
  const { id } = useParams();
  const {
    name,
    setName,
    email,
    setEmail,
    checkBox,
    setCheckBox,
    setOpenModal,
    currentCampaign,
    currentPage,
  } = useContext(AppContext);

  const navigate = useNavigate();

  // has to include regex to check for a perfect email match

  function checkValue() {
    const regex = /[a-zA-z0-9/_%+-]+@[a-z0-9*-]+\.[a-z]{2,8}(.[a-z{2,8}])?/gi;
    if (
      regex.test(email) &&
      name !== "" &&
      name.length > 1 &&
      email !== "" &&
      email.length > 1
    ) {
      navigate(`/donation/payment/${id}`);
      setOpenModal(false);
    } else {
      return setOpenModal(true);
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
      <section className="donor-details">
        <FindCampaign id={id} />
        <aside className="donation">
          <Indicator />
          <h3>Donation Information</h3>
          <Modal msg={"Please ensure all fields are filled correctly"} />
          <aside className="input-field">
            <div className="">
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                placeholder="Isa Pantami"
                value={checkBox ? name : "*****"}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="emailaddress@email.com"
                value={checkBox ? email : "******"}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                className="checkbox"
                onChange={() => setCheckBox(!checkBox)}
              />
              <p>Anonymous donation ?</p>
            </div>
          </aside>
          <button
            className="btn next donate_btn"
            onClick={() => {
              checkValue();
            }}
          >
            Next
          </button>
        </aside>
      </section>
    </>
  );
}
