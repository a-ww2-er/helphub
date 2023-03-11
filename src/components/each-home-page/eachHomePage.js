import { useParams } from "react-router-dom";
import { orphanagesList } from "../../local-data";
// import { Link } from "react-router-dom";
// import { FaDog, FaDocker, FaSpider, FaDove } from "react-icons/fa";
import "./eachHomePage.css";
import img1 from "../../assets/orphanages-photos/img-8.png";
import { GiPeaceDove, GiCoins, GiReceiveMoney } from "react-icons/gi";

const Each_home_page = () => {
  const { id } = useParams();
  const selectedOrphanage = orphanagesList.find((items) => {
    return items.id == id;
  });

  return (
    <>
      <section className="selected_orphanage_bg">
        <section className="selected_orphanage">
          <span className="write_up">
            <h1>{selectedOrphanage.title}</h1>
            <p>{selectedOrphanage.description}</p>
            {/* <Link to="/campaign" className="btn donate_btn2">
            Donate Now fix homepage, add media icon, fix buttons
          </Link> */}
          </span>
          <span>
            <img src={selectedOrphanage.image} alt={selectedOrphanage.title} />
          </span>
        </section>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d1e5fe" fill-opacity="1" d="M0,96L80,90.7C160,85,320,75,480,80C640,85,800,107,960,117.3C1120,128,1280,128,1360,128L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
      </section>
      <section className="hero">
        <span className="write_up">
          <h1>
            Help us <span>give hope and a home </span>to every child in need.
          </h1>
          {/* <span className="icon_container">
            <p className="icon_bg">
              <GiPeaceDove className="icon" />
            </p>
            <p className="icon_bg">
              <GiReceiveMoney className="icon" />
            </p>
            <p className="icon_bg">
              <GiCoins className="icon" />
            </p>
          </span> */}
          <p>Giving hope to orphans, one donation at a time.</p>
        </span>
        <span>
          <img src={img1} alt="hero_img" />
        </span>
      </section>
     
    </>
  );
};

export default Each_home_page;
