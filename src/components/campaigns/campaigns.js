import { useContext } from "react";
import { MdCampaign } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { campaigns } from "../../campaign-data";
import { AppContext } from "../../context";
import ProgressLine from "../progress-line/progressLine";
import "./campaigns.css";

// function is set to truncate the text if its on mobile
const Campaign = () => {
  const { id } = useParams();

  const findCampaign = campaigns.find((items) => {
    
    return items.id == id;
  });
  console.log(findCampaign, id);

  const campaign = findCampaign.projects.map((item) => {
    //   if (window.innerWidth < 740) {
    //     const description = items.description.slice(
    //       0,
    //       items.description.indexOf(".") + 1
    //     );
    const {  image, title, description, value, initialValue, maxValue } =
      item;
    return (
      <article key={item.id} className="campaign_card">
        <img src={image} alt={title}  />
        <h3>{title}</h3>
        <p>{description}</p>
        <ProgressLine
          initialValue={initialValue}
          maxValue={maxValue}
          value={value}
          showExtra={false}
          id={item.id}
        />
      </article>
    );
  });
  //   } else {
  //     const description = items.description;
  //     return (
  //       <article key={id} className="campaign_card">
  //         <img src={image} alt={title} />
  //         <h2>{title}</h2>
  //         <p>{description}</p>
  //         <ProgressLine
  //           initialValue={initialValue}
  //           maxValue={maxValue}
  //           value={value}
  //           showExtra={false}
  //           id={id}
  //         />
  //       </article>
  //     );
  //   }
  // });
  return (
    <div className="campaign">
      <h1>Campaigns</h1>
      <section className="campaign_list">{campaign}</section>
    </div>
  );
};

export default Campaign;
