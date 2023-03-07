
import "./findCampaign.css";

import { campaigns } from "../../campaign-data";


export default function FindCampaign({id}) {

  const campaignDonatingTo =campaigns.find((items) => {
    return (
          items.id == id
    )})
    const {title ,image, description, maxValue}=campaignDonatingTo
  return (
    <div>
          <section className="what-it-is-about">
            <aside>
              <img src={image} alt="happy kid" />
              <h3>{title}
              </h3>
              {description}
              <h4>Target: NGN {maxValue}</h4>
            </aside>
          </section>
    </div>
  );
}
