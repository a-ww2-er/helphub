
import "./findCampaign.css";

import { campaigns } from "../../campaign-data";
import { useContext } from "react";
import { AppContext } from "../../context";


export default function FindCampaign({campaignId}) {
 const {currentPage} = useContext(AppContext)

  const orphanageHome = campaigns.find((items)=>{
    return items.id == currentPage
  })
  const campaignDonatingTo =orphanageHome.projects.find((items) => {
    return (
          items.id == campaignId
    )})
    const {title ,image, description, maxValue}=campaignDonatingTo
  return (
    
          <section className="what-it-is-about">
            <aside>
              <img src={image} alt="happy kid" />
              <h3>{title}
              </h3>
              {description}
              <h4>Target: NGN {maxValue}</h4>
            </aside>
          </section>
    
  );
}
