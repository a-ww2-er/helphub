import './landing-page.css';
import IntroductoryComponent from '../introductory-component/introductory-component';
import HeaderComponent from '../header/header-component';
import OurMissionComponent from '../our-mission-component/our-mission-component';
import WhyUsComponent from '../why-us-component/why-us-component';
import VerifiedOrphanages from '../verified-orphanages/verified-orphanages';
import Testimony from '../testimony/testimony';
import PersuasionPage from '../persuasion-page/persuasion-page';
import Footer from '../footer/footer';

export default function LandingPage(){
    return(
        <section className="landing-page">
            <HeaderComponent />
            <IntroductoryComponent />
            <OurMissionComponent />
            <WhyUsComponent />
            <VerifiedOrphanages />
            <Testimony />
            <PersuasionPage />
            <Footer />
        </section>
    )
}