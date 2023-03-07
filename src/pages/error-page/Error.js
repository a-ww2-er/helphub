import { GrAlert } from "react-icons/gr";
import Navbar from "../../components/navbar/navbar-component";

const Error = () => {
  return (
    <>
      <Navbar
        firstName="home"
        secondName="orphanages"
        thirdName="about"
        fourthName="contact-us"
      />
      <article className="error">
        <GrAlert className="error_icon" />
        <h1 className="error_page"> Oops! Page Not Found</h1>
      </article>
    </>
  );
};

export default Error;
