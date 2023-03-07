import "./navbar-component.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context";

const Navbar = ({
  firstName,
  secondName,
  thirdName,
  fourthName,
  firstLink,
  secondLink,
  thirdLink,
  fourthLink
}) => {
  const { setShowNav, showNav } = useContext(AppContext);
  //quick easy method to set property-value
  // if (firstName) {
  //   links[0].text = firstName;
  //   links[1].text = secondName;
  //   links[2].text = thirdName;
  //   links[3].text = fourthName;
  // }
  const links = [
    { id: 1, url: firstLink ? firstLink : "/", text: firstName },
    { id: 2, url: secondLink ? secondLink : "/orphanages", text: secondName },
    { id: 3, url: thirdLink ? thirdLink : "/about", text: thirdName },
    { id: 4, url: fourthLink ? fourthLink : "/contact-us", text: fourthName },
  ];

  return (
    <nav className="navbar">
      <div className="nav_container">
        <h2 className="logo">LOGO</h2>

        <div
          className="nav_toggle"
          onClick={() => {
            setShowNav(!showNav);
          }}
        >
          {" "}
          {!showNav ? <FaBars /> : <FaTimes className="close_icon" />}
        </div>
        <div className={showNav ? "links_container active" : "links_container"}>
          <ul className="links">
            {links.map((each) => {
              const { id, url, text } = each;

              return (
                <li key={id}>
                  <NavLink
                    className="each_link"
                    to={url}
                    onClick={() => setShowNav(false)}
                  >
                    {text}
                  </NavLink>
                </li>
              );
            })}

            <Link
              to="/orphanages"
              className="btn mobile_donate_btn donate_btn"
              onClick={() => setShowNav(false)}
            >
              Donate Now
            </Link>
          </ul>
        </div>
        <Link to="/orphanages" className=" btn donate_btn ">
          Donate Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
