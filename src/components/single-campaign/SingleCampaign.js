import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { campaigns } from "../../campaign-data";
import { AppContext } from "../../context";
import ProgressLine from "../progress-line/progressLine";
import "./singleCampaign.css";

const SingleCampaign = () => {
  const { id } = useParams();
  const { currentPage, setCurrentPage, scrollFunc } = useContext(AppContext);
  const campaignData = campaigns.find((items) => {
    return items.id == id;
  });
  const { title, description, image, initialValue,maxValue,value } = campaignData;
  return (
    <>
      <div className="campaign_container">
        <article className="campaign_content">
          <img src={image} alt={title} />
          <h2>{title}</h2>
          <p>{description}</p>
          <h3>Target: NGN {maxValue}</h3>
        </article>
        <section className="campaign_content">
          <ProgressLine initialValue={initialValue} maxValue={maxValue} value={value} showExtra={true} id={id} />
        </section>
      </div>
      {/* <Link
        to={`/orphanages/${currentPage}`}
        className="btn donate_btn2 back_btn"
        onClick={scrollFunc}
      >
        back
      </Link> */}
    </>
  );
};

export default SingleCampaign;
