import Indicator from "../progress-indicator/progress-indicator";
import "./donor-information.css";
import WhatItIsAbout from "../what-it-is-about/what-it-is-about";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context";


export default function DonorInformation() {

  const { name, setName, email, setEmail,nameBu,setNameBu,emailBu, setEmailBu, checkBox, setCheckBox } = useContext(AppContext);

  const navigate = useNavigate()


  // has to include regex to check for a perfect email match
  
  function checkValue() {
    const regex = /[a-zA-z0-9/_%+-]+@[a-z0-9*-]+\.[a-z]{2,8}(.[a-z{2,8}])?/gi;
    if(regex.test(email) && name !== "" && name.length > 1 && email !== "" && email.length > 1){
      navigate("/donation/payment");
    }else{
      return
    }
  }

  return (
    <section className="donor-details">
        <WhatItIsAbout />
      <aside className="donation">
        <Indicator />
        <h3>Donation Information</h3>
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
      <div >
        <input type="checkbox" className="checkbox" onChange={() => setCheckBox(!checkBox)}  />
        <b>Anonymous donation</b>
      </div>
        </aside>
        <button onClick={checkValue}>Next</button>
      </aside>
    </section>
  );
}
