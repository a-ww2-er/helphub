import "./persuasion-page.css";

export default function PersuasionPage({message}) {
  return (
    <section className="persuation-page">
      <aside>
        <h2>
         { message || "Make a difference in a child's life - donate to an orphanage home."}
        </h2>
        <button className="btn">Donate now</button>
      </aside>
    </section>
  );
}
