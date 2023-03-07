import { Link } from "react-router-dom";
import Tick from "../../assets/thank-you-icon/Vector (4).png";
import "./thank-you.css";

export default function ThankYou({showModal, id}) {  
  return (
    <section className="thank-you">
      <section className="thank-you-container">
        <aside>
          {<img src={Tick} alt="tick" className={showModal ? "show" : ""}/>}
          <h3>Thank you for your Donation</h3>
          <p>
            Your donation will go a long way in providing education for orphans
            in need.
          </p>
         <span> <Link to="/"  className="btn">Home</Link><Link to={`/orphanages/campaign/${id}`} className="btn"  >Campaign</Link></span>
        </aside>
      </section>
    </section>
  );
}
