import "./verified-orphanages.css";
import { orphanagesList } from "../../local-data";
import {LazyLoadImage} from 'react-lazy-load-image-component';

export default function VerifiedOrphanages() {
  //return only a portion of our local-data
  const orphanagesDesk = orphanagesList.slice(0, 6);
  const orphanagesMobile = orphanagesList.slice(0, 3);

  const verifiedOrphanageMobile = orphanagesMobile.map((each) => {
    const { title, description, image, id } = each;
    return (
      <div key={id}>
        <LazyLoadImage effect="blur" src={image} alt={title} />
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    );
  });

  const verifiedOrphanageDesk = orphanagesDesk.map((each) => {
    const { title, description, image, id } = each;
    return (
      <div key={id}>
        <img src={image} alt={title} />
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    );
  });

  return (
    <section id="verified" className="verified-orphanages">
      <h3>Verified orphanages homes</h3>
      <aside className="mobileOrphanage">{verifiedOrphanageMobile}</aside>
      <aside className="deskOrphanage">{verifiedOrphanageDesk}</aside>
    </section>
  );
}
