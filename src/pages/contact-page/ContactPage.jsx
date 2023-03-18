import Navbar from "../../components/navbar/navbar-component";
import Contact from "../../components/contact-component/contact";
import { Helmet } from "react-helmet";

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us</title>
        <meta name="description" content="Reach out to us, we will be glad to help." />
      </Helmet>
      <Navbar
        firstName="home"
        secondName="orphanages"
        thirdName="about"
        fourthName="contact-us"
      />
     <Contact />
    </>
  );
};

export default ContactUs;
