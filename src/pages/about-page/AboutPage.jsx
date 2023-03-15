import AboutDetails from "../../components/about-details/AboutDetails";
import Navbar from "../../components/navbar/navbar-component";

export default function About(){
  return (
    <>
    
    <Navbar
        firstName="home"
        secondName="orphanages"
        thirdName="about"
        fourthName="contact-us"
      />
      <AboutDetails />
    </>
  );
};
