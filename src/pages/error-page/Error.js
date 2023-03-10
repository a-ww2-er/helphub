import { GrAlert } from "react-icons/gr";
import Navbar from "../../components/navbar/navbar-component";
import { Helmet } from "react-helmet";

const Error = () => {
  return (
    <>
    <Helmet>
        <title>Page Not Found</title>
        <meta name="description" content="Page Not Found" />
    </Helmet>
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
