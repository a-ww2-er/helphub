import Navbar from "../../components/navbar/navbar-component";
import OrphanagesList from "../../components/orphanagesList/OrphanagesList";
import SearchBar from "../../components/searchBar/SearchBar";
import { Helmet } from "react-helmet";

const Orphanages = () => {
  return (
    <>
    <Helmet>
        <title>Verified Orphanages</title>
        <meta name="description" content="Donate to trustworthy orphanage homes and help orphans find a family and joy." />
    </Helmet>
      <Navbar
        firstName="home"
        secondName="orphanages"
        thirdName="about"
        fourthName="contact-us"
      />
      <div>
        <SearchBar />
        <OrphanagesList />
      </div>
    </>
  );
};
export default Orphanages;
