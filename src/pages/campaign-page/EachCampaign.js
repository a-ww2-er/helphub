
import { useContext } from "react";
import Navbar from "../../components/navbar/navbar-component";
import SingleCampaign from "../../components/single-campaign/SingleCampaign";
import { AppContext } from "../../context";
import { Helmet } from "react-helmet";

const EachCampaign = () => {
  const {currentPage}= useContext(AppContext)
  return(
    <>
    <Helmet>
        <title>Campaign</title>
        <meta name="description" content="Donations help provide basic necessities like food and clothing, as well as educational and extracurricular opportunities." />
    </Helmet>
    <Navbar firstName="home" secondName="campaigns" thirdName="about" fourthName="contact Us"  firstLink={`/orphanages/${currentPage}`}/>
    <SingleCampaign />
    </>
  )
};

export default EachCampaign;
