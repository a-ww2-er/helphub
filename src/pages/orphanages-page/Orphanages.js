import Navbar from "../../components/navbar/navbar-component";
import OrphanagesList from "../../components/orphanagesList/OrphanagesList";
import SearchBar from "../../components/searchBar/SearchBar";

const Orphanages = () => {
  return (
    <>
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
