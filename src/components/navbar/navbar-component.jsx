import { links } from "../../nav-bar-data";
import "./navbar-component.css";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context";

const Navbar = ({ showBtn }) => {
  const { setShowNav, showNav } = useContext(AppContext);

  return (
    <nav className="navbar">
      <div className="nav_container">
        <h2 className="logo">LOGO</h2>

        <FaBars
          className="nav_toggle"
          onClick={() => {
            setShowNav(!showNav);
          }}
        />
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
                    {" "}
                    {text}
                  </NavLink>
                </li>
              );
            })}

            <button className="btn mobile_donate_btn donate_btn">
              Donate Now
            </button>
          </ul>
        </div>
        <button className="btn donate_btn">Donate Now</button>
      </div>
    </nav>
  );
};

export default Navbar;
