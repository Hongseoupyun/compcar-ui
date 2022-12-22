import React from "react";
import "./SearchPage.scss";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import SearchInputBar from "components/SearchPage/SearchInputBar";
import axios from "axios";

export default function SearchPage() {
  const [selected, setSelected] = useState("normal");
  const [maker1, setMaker1] = useState("");
  const [maker2, setMaker2] = useState("");
  const [model1, setModel1] = useState("");
  const [model2, setModel2] = useState("");
  const [year1, setYear1] = useState("");
  const [year2, setYear2] = useState("");
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [mileage1, setMileage1] = useState("");
  const [mileage2, setMileage2] = useState("");

  const handleSelected = (searchOption) => {
    setSelected(searchOption);
  };

  const handleSubmit = () => {
    const baseURL = "http://localhost:8000/api";

    axios.all(
      [
        axios.post(`${baseURL}/car/makers`, { maker1, maker2 }),
        axios.post(`${baseURL}/car/models`, { model1, model2 }),
      ].then(
        axios.spread((response1, response2) => {
          console.log(response1, response2);
        })
      )
    );
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
            selected={selected}
            maker1={maker1}
            setMaker1={setMaker1}
            maker2={maker2}
            setMaker2={setMaker2}
            model1={model1}
            setModel1={setModel1}
            model2={model2}
            setModel2={setModel2}
            setYear1={setYear1}
            setYear2={setYear2}
            setColor1={setColor1}
            setColor2={setColor2}
            setMileage1={setMileage1}
            setMileage2={setMileage2}
          />
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
