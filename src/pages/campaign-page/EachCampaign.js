
import { useContext } from "react";
import Navbar from "../../components/navbar/navbar-component";
import SingleCampaign from "../../components/single-campaign/SingleCampaign";
import { AppContext } from "../../context";

const EachCampaign = () => {
  const {currentPage}= useContext(AppContext)
  return(
    <>
    <Navbar firstName="home" secondName="campaigns" thirdName="about" fourthName="contact Us"  firstLink={`/orphanages/${currentPage}`}/>
    <SingleCampaign />
    </>
  )
};

export default EachCampaign;
