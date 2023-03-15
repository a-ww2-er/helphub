import Navbar from "../../components/navbar/navbar-component";

const ContactUs = () => {
  return (
    <>
      <Navbar
        firstName="home"
        secondName="orphanages"
        thirdName="about"
        fourthName="contact-us"
      />
      <h1 style={{ textAlign: "center", margin: "150px 0" }}>
        REACH OUT TO US
      </h1>
    </>
  );
};

export default ContactUs;
