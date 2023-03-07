import { useContext } from "react";
import DonationAmount from "../../components/donation-amount/donation-amount";
import Navbar from "../../components/navbar/navbar-component";
import { AppContext } from "../../context";
export default function DonationPage() {
  const { currentCampaign, currentPage } = useContext(AppContext);
  return (
    <>
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
