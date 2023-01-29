import React from "react";
import ContactUs from "components/ContactUs/ContactUs";
import SearchPage from "components/SearchPage/SearchPage";
import Cardapp from "components/Card/Cardapp";

function LandingPage(props) {
  const {searchedCar1, setSearchedCar1, searchedCar2, setSearchedCar2, makers,
  modelsByMaker1, yearsByModels1, colorsByModels1, handleSelect,
  modelsByMaker2, yearsByModels2, colorsByModels2,handleSearch,handleSearchToCompare
  } = props;
  return (
    <div className="landingPage">
      <SearchPage  
      searchedCar1 = {searchedCar1}
      setSearchedCar1 = {setSearchedCar1}
      searchedCar2 = {searchedCar2}
      setSearchedCar2 = {setSearchedCar2}
      modelsByMaker1 = {modelsByMaker1}
      yearsByModels1 = {yearsByModels1}
      colorsByModels1 = {colorsByModels1}
      handleSelect = {handleSelect}
      modelsByMaker2 = {modelsByMaker2}
      yearsByModels2 = {yearsByModels2}
      colorsByModels2 = {colorsByModels2}
      makers = {makers}
      handleSearch = {handleSearch}
      handleSearchToCompare={handleSearchToCompare}
      />
      <Cardapp />
      <ContactUs />
    </div>
  );
}

export default LandingPage;
