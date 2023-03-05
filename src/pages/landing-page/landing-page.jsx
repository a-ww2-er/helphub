import "./landing-page.css";
import IntroductoryComponent from "../../components/introductory-component/introductory-component";
import OurMissionComponent from "../../components/our-mission-component/our-mission-component";
import WhyUsComponent from "../../components/why-us-component/why-us-component";
import VerifiedOrphanages from "../../components/verified-orphanages/verified-orphanages";
import Testimony from "../../components/testimony/testimony";
import PersuasionPage from "../../components/persuasion-page/persuasion-page";

export default function LandingPage() {
  return (
    <section className="landing-page">
      <IntroductoryComponent />
      <OurMissionComponent />
      <WhyUsComponent />
      <VerifiedOrphanages />
      <Testimony />
      <PersuasionPage />
    </section>
  );
}
