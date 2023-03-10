import "./landing-page.css";
import IntroductoryComponent from "../../components/introductory-component/introductory-component";
import OurMissionComponent from "../../components/our-mission-component/our-mission-component";
import WhyUsComponent from "../../components/why-us-component/why-us-component";
import VerifiedOrphanages from "../../components/verified-orphanages/verified-orphanages";
import Testimony from "../../components/testimony/testimony";
import PersuasionPage from "../../components/persuasion-page/persuasion-page";
import Navbar from "../../components/navbar/navbar-component";
import { Helmet } from "react-helmet";

export default function LandingPage() {
  return (
    <>
      <Helmet>
        <title>iDonate</title>
        <meta name="description" content="Connecting you to verified orphanage homes" />
      </Helmet>

      <Navbar
        firstName="home"
        secondName="orphanages"
        thirdName="about"
        fourthName="contact-us"
      />
      <div className="landing-page">
        <IntroductoryComponent />
        <OurMissionComponent />
        <WhyUsComponent />
        <VerifiedOrphanages />
        <Testimony />
        <PersuasionPage />
      </div>
    </>
  );
}
