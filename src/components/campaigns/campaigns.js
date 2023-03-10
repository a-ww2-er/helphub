import { useContext } from "react";
import { MdCampaign } from "react-icons/md";
import { Link } from "react-router-dom";
import { campaigns } from "../../campaign-data";
import { AppContext } from "../../context";
import ProgressLine from "../progress-line/progressLine";
import "./campaigns.css";
import {LazyLoadImage} from 'react-lazy-load-image-component';

// function is set to truncate the text if its on mobile
const Campaign = () => {
  const campaign = campaigns.map((items) => {
    const { id, image, title, initialValue, maxValue, value } = items;
    if (window.innerWidth < 740) {
      const description = items.description.slice(
        0,
        items.description.indexOf(".") + 1
      );
      return (
        <article key={id} className="campaign_card">
          <LazyLoadImage effect="blur" src={image} alt={title} />
          <h3>{title}</h3>
          <p>{description}</p>
          <ProgressLine
            initialValue={initialValue}
            maxValue={maxValue}
            value={value}
            showExtra={false}
            id={id}
          />
        </article>
      );
    } else {
      const description = items.description;
      return (
        <article key={id} className="campaign_card">
          <img src={image} alt={title} />
          <h2>{title}</h2>
          <p>{description}</p>
          <ProgressLine
            initialValue={initialValue}
            maxValue={maxValue}
            value={value}
            showExtra={false}
            id={id}
          />
        </article>
      );
    }
  });
  return (
    <div className="campaign">
      <h1>Campaigns</h1>
      <section className="campaign_list">{campaign}</section>
    </div>
  );
};

export default Campaign;
