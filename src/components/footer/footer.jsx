import "./footer.css";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
export default function Footer() {
  const footerDatas = [
    {
      id: 0,
      header: "Quick Links",
      data: ["about", "our vision", "blog", "orphanage homes"],
    },
    {
      id: 1,
      header: "Transparency",
      data: ["FAQs", "Terms and Conditions", "blog"],
    },
    {
      id: 2,
      header: "Contact Us",
      className: "socials",
      location: "Plot 48 Akedu Victoria Island, Lagos, Nigeria",
      data: [<FaLinkedin />, <FaTwitter />, <FaFacebook />, <FaInstagram />],
    },
  ];

  const footerData = footerDatas.map((each) => {
    return (
      <aside key={each.id}>
        <h4>{each.header}</h4>
        <p>{each.location}</p>
        <div className={each.className}>
          {each.data.map((item, index) => {
            return (
              <li key={index}>
                <a
                  className={each.className === "socials" ? "icons" : ""}
                  href={item}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </div>
      </aside>
    );
  });

  return (
    <footer className="footer">
      <aside>
        <h2>
          <a href="/">LOGO</a>
        </h2>
        <p>
          We are connecting donors and supporters with orphanage homes in need,
          we aim to create a platform where people can come together to make a
          positive impact in the world.
        </p>
      </aside>
      {footerData}
    </footer>
  );
}
