import "./verified-orphanages.css";
import { orphanagesList } from "../../local-data";

export default function VerifiedOrphanages() {
  //return only a portion of our local-data
  const orphanages = orphanagesList.slice(0, 6);

  const verifiedOrphanage = orphanages.map((each) => {
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
    <section className="verified-orphanages">
      <h3>Verified orphanages homes</h3>
      <aside>{verifiedOrphanage}</aside>
    </section>
  );
}
