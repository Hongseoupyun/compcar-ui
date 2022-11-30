import React from "react";
import "./SearchPage.scss";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import SearchInputBar from "components/SearchPage/SearchInputBar";

export default function SearchPage() {
  const [selected, setSelected] = useState("noraml");
  

  const handleSelected = () => {
    selected === "noraml" ? setSelected("compare") : setSelected("noraml");
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
            selected === "noraml" ? "tap--search" : "tap--search selected"
          }
          onClick={handleSelected}
        >
          Search
        </div>
        <div
          className={
            selected === "compare" ? "tap--search" : "tap--search selected"
          }
          id="compare"
          onClick={handleSelected}
        >
          Search to compare
        </div>
      </div>
      <div className="searchbar--wrapper">
        <form className="container--input">
          <SearchInputBar selected={selected} />
        </form>
        <div className="button--wrapper">
          <button className="button--search" type="submit">
            <FaSearch id="emoji" />
          </button>
        </div>
      </div>
    </section>
  );
}
