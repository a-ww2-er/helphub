import { Link } from "react-router-dom";
import img1 from "../../assets/Media-photos/about-page-photo.webp"
import "./aboutdetails.css";

export default function AboutDetails() {
  return (
    <div className="about_container">
      <article>
        <h1>About HelpHub</h1>
        <img src={img1} alt="bg_img" />
      </article>
      <div>
        <section className="summary">
          <span className="summary_text">
            <h2>Summary</h2>{" "}
            <p>
              Helphub is a platform that brings orphanage homes and potential
              donors together to meet the needs of orphans across the nation and
              also to achieve charity purposes. At Helphub, we provide a
              technology that allows orphanage homes across the nation to stage
              and present their urgent and most important needs or campaigns to
              the world for support and we also create a platform that affords
              donors to render support to orphanage homes with the project of
              their choice. Helphub is dedicated to accountability and
              transparency, thereby creating a system whereby orphanage homes
              are accountable and transparent in the utilization of donor's
              support funds...
            </p>
            <br />
            <Link to="/orphanages" className=" btn donate_btn ">
              Donate Now
            </Link>
          </span>
          <span className="side_cards">
            <span className="cards">
              <h4>Vision</h4>  <p>To create a seamless space for orphanage homes
              to receive financial support for their needs and to ensure the
              safety of donors.</p>
            </span>
            <span className="cards">
              <h4> Mission</h4> <p>We care about the needs of orphans across the
              nation, therefore helphub is dedicated to providing a better
              avenue for orphanage homes to source funds in a legitimate and to
              provide an easy technique that allows donors to render support
              without fear.</p>
            </span>
          </span>
        </section>
        <section className="summary2">
          <span className="summary_text">
            <h2>Core Values</h2>
          <p> HelpHub core values are the principles and priorities that guide our
            organization’s actions. These values represent the foundational
            commitments and deeply held beliefs that allow our organization to
            navigate complex situations while keeping it's identity and culture
            at the forefront. They are the set of guiding principles and
            fundamental beliefs that help our group function together as
            a team and work toward a common goal.</p> 
          </span>
          <span className="side_cards">
            <span className="cards">
              <h4>Charity</h4>
              <p>
                Helphub acknowledges that the greatest investment is not in
                buying shares or building houses but by investing in men, by
                this we regard investing in these wonderful orphans as a means
                to impact our world positively.
              </p>
            </span>
            <span className="cards">
              <h4>Accountability </h4><p> Accountability is the sole of business,
              helphub provides space where orphanage homes are answerable for
              what the support funds received from benefactors are spent on.</p>
            </span>
            <span className="cards">
              <h4>Transparency</h4> <p>Helphub value transparency, hence all
              verified orphanage homes available provides an explicit report of
              the progress of the proSummaryject and that of the orphans.</p>
            </span>
            <span className="cards">
              <h4>Empower Others</h4> <p>Helphub aims to Empower orphan children
              all over the continent to achieve their goals, both globally and
              within themselves.</p>
            </span>
          </span>
        </section>
      </div>
    </div>
  );
}
