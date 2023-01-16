import React from "react";
import "./SearchPage.scss";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import SearchInputBar from "components/SearchPage/SearchInputBar";
// import { useNavigate } from "react-router-dom";

export default function SearchPage(props) {
  const [selected, setSelected] = useState("normal");
  const {
    searchedCar1,
    searchedCar2,
    makers,
    modelsByMaker1,
    yearsByModels1,
    colorsByModels1,
    handleSelect,
    modelsByMaker2,
    yearsByModels2,
    colorsByModels2,
    handleSearch,
  } = props;

  const handleSelected = (searchOption) => {
    setSelected(searchOption);
  };

  return (
    <section
      className="section--search"
      style={{
        backgroundImage: `url(${require("assets/searchBackground.jpeg")})`,
      }}
    >
      <h1>FIND YOUR DREAM CAR</h1>
      <div className="container--search--tap">
        <div
          className={
            selected === "normal" ? "tap--search" : "tap--search selected"
          }
          onClick={() => handleSelected("normal")}
        >
          Search
        </div>
        <div
          className={
            selected === "compare" ? "tap--search" : "tap--search selected"
          }
          id="compare"
          onClick={() => handleSelected("compare")}
        >
          Search to compare
        </div>
      </div>
      <div className="searchbar--wrapper">
        <form className="container--input">
          <SearchInputBar
            searchedCar1={searchedCar1}
            searchedCar2={searchedCar2}
            selected={selected}
            setSelected={setSelected}
            makers={makers}
            modelsByMaker1={modelsByMaker1}
            yearsByModels1={yearsByModels1}
            colorsByModels1={colorsByModels1}
            handleSelect={handleSelect}
            modelsByMaker2={modelsByMaker2}
            yearsByModels2={yearsByModels2}
            colorsByModels2={colorsByModels2}
          />
        </form>
        <div className="button--wrapper">
          <button
            className="button--search"
            type="submit"
            onClick={(e) => {
              handleSearch(e, "search", selected);
            }}
          >
            <FaSearch id="emoji" />
          </button>
        </div>
      </div>
    </section>
  );
}
