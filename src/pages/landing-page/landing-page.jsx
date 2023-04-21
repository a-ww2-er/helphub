import "./landing-page.css";
import IntroductoryComponent from "../../components/introductory-component/introductory-component";
import OurMissionComponent from "../../components/our-mission-component/our-mission-component";
import WhyUsComponent from "../../components/why-us-component/why-us-component";
import VerifiedOrphanages from "../../components/verified-orphanages/verified-orphanages";
import Testimony from "../../components/testimony/testimony";
import PersuasionPage from "../../components/persuasion-page/persuasion-page";
import Navbar from "../../components/navbar/navbar-component";
import kids2 from "../../assets/Hero-photos/kids2.png"
import { Helmet } from "react-helmet";

export default function LandingPage() {
      // create an array of achievement 
      const achievement = [
        {
            id:0,
            achieve:"Completed Projects",
            number:20,
        },
        {
            id:1,
            achieve:"Orphanage Homes",
            number:30,
        },
        {
            id:2,
            achieve:"Orphans",
            number:500,
        },
    ]

    // map through achievement and reture a div for each object 

    const achieved = achievement.map((each) => {
        return(
            <div key={each.id}>
                <h4>{each.number}</h4>
                <p>{each.achieve}</p>
            </div>
        )
    })
  return (
    <>
      <Helmet>
        <title>HelpHub</title>
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
        <OurMissionComponent img={kids2} achieved={achieved}/>
        <WhyUsComponent />
        <VerifiedOrphanages />
        <Testimony />
        <PersuasionPage />
      </div>
    </>
  );
}
