import React, { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../../context";
import { RiSearch2Line } from "react-icons/ri";
import "../searchBar/searchBar.css"

const SearchBar = () => {
  const { setSearchTerm } = useContext(AppContext);
  const searchValue = React.useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  function searching() {
    setSearchTerm(searchValue.current.value);
  }

  return (
    <section>
      <form  className="input" onSubmit={(e) => e.preventDefault()}>
        <div className="input_container">
          {/* react icon for search  */}
          <RiSearch2Line  className="input_icon"/>
          <input className="input_box"
            type="text"
            placeholder="Search For An Orphanage To Donate "
            ref={searchValue}
            onChange={searching}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchBar;
