import React from "react";
import "./introductory-component.css";
import kids from "../../assets/Hero-photos/kids1.jpg";
import { Link } from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";
export default function IntroductoryComponent() {
  return (
    <React.Fragment>
      <section className="introductory-component">
        <aside>
          <h2>
            Connecting you to verified <span>orphanage homes</span>.
          </h2>
          <p>
            Donate to trustworthy orphanage homes and help orphans find a family
            and joy.
          </p>
          <Link to="/orphanages" className="btn donate_btn2">
            Donate Now
          </Link>
        </aside>
        <aside className="img_container">
          <LazyLoadImage effect="blur" src={kids} alt="kids" />
        </aside>
      </section>
    </React.Fragment>
  );
}
