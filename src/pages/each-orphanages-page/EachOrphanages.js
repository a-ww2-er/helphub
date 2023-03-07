import Campaign from "../../components/campaigns/campaigns";
import Each_home_page from "../../components/each-home-page/eachHomePage";
import Media from "../../components/media/Media";
import Navbar from "../../components/navbar/navbar-component";
import PersuasionPage from "../../components/persuasion-page/persuasion-page";

const EachOrphanages = () => {
  const message =
    "Invest in the future of a child - Donate to our orphanage home today.";
  return (
    <>
      <Navbar
        firstName="home"
        secondName="campaigns"
        thirdName="About"
        fourthName="contact Us"
      />
      <div>
        <Each_home_page />
        <Campaign />
        <Media />
        <PersuasionPage message={message} />
      </div>
    </>
  );
};

export default EachOrphanages;
