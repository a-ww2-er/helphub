import { Link } from "react-router-dom";
import "./persuasion-page.css";

export default function PersuasionPage({message}) {
  return (
    <section className="persuation-page">
      <main></main>
      <aside>
        <h2>
         { message || "Make a difference in a child's life - donate to an orphanage home."}
        </h2>
        <Link to="/orphanages" className="btn donate_btn2">Donate now</Link>
      </aside>
    </section>
  );
}
