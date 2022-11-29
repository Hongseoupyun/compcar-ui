import React from "react";
import "./SearchPage.scss";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export default function SearchPage() {
  const [selected, setSelected] = useState("noraml");
  const [searchInput, setSearchInput] = useState({
    make1: "",
    make2: "",
    model1: "",
    moderl2: "",
    year1: "",
    year2: "",
    color1: "",
    color2: "",
    mileage1: "",
    mileage2: "",
  });

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
          <div id="input1">
            <select className="searchbar--select">
              <option value="all">Make:All</option>
            </select>
            <select className="searchbar--select">
              <option value="all">Model:All</option>
            </select>
            <select className="searchbar--select">
              <option value="all">Year:All</option>
            </select>
            <select className="searchbar--select">
              <option value="all">Color:All</option>
            </select>
            <select className="searchbar--select">
              <option value="all">Mileage:All</option>
            </select>
          </div>
          <div id="input2">
            <select className="searchbar--select">
              <option value="all">Make:All</option>
            </select>
            <select className="searchbar--select">
              <option value="all">Model:All</option>
            </select>
            <select className="searchbar--select">
              <option value="all">Year:All</option>
            </select>
            <select className="searchbar--select">
              <option value="all">Color:All</option>
            </select>
            <select className="searchbar--select">
              <option value="all">Mileage:All</option>
            </select>
          </div>
          <button className="button--search" type="submit">
            <FaSearch id="emoji" />
          </button>
        </form>
      </div>
    </section>
  );
}
