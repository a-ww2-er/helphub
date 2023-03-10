import { useContext } from "react";
import DonationAmount from "../../components/donation-amount/donation-amount";
import Navbar from "../../components/navbar/navbar-component";
import { AppContext } from "../../context";
import { Helmet } from "react-helmet";

export default function DonationPage() {
  const { currentCampaign, currentPage } = useContext(AppContext);
  return (
    <>
    <Helmet>
        <title>Donate to an orphanage today</title>
        <meta name="description" content="Donate to trustworthy orphanage homes and help orphans find a family and joy." />
    </Helmet>
      <Navbar
        firstName="home"
        secondName="campaigns"
        thirdName="about"
        fourthName="contact Us"
        firstLink={`/orphanages/${currentPage}`}
        secondLink={`/orphanages/campaign/${currentCampaign}`}
      />
      <section className="donation-page">
        <DonationAmount />
      </section>
    </>
  );
}
