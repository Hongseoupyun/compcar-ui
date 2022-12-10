import React from "react";
import { useState } from "react";
import { UseRemoveDuplicates } from "hooks/UseRemoveDuplicates";
import UseGetModelsByMaker from "hooks/UseGetModelsByMaker";
import UseGetYearsByModel from "hooks/UseGetYearsByModel";

export default function SearchInputBar(props) {
  const { selected } = props;
  //State for search
  const [maker1, setMaker1] = useState("");
  const [maker2, setMaker2] = useState("");
  const [model1, setModel1] = useState("");
  const [model2, setModel2] = useState("");
  const [year1, setYear1] = useState("");
  const [year2, setYear2] = useState("");
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [mileage1, setMileage1] = useState([]);
  const [mileage2, setMileage2] = useState([]);
  const makers = UseRemoveDuplicates("maker");
  const madeYears = UseRemoveDuplicates("madeYear");
  const mileages = UseRemoveDuplicates("mileage");
  const colors = UseRemoveDuplicates("color");
  let modelsByMaker1 = UseGetModelsByMaker(maker1);
  let modelsByMaker2 = UseGetModelsByMaker(maker2);
  let yearsByModels1 = UseGetYearsByModel(model1);
  let yearsByModels2 = UseGetYearsByModel(model2);

  //function returns the options for the select tag
  const showOptions = function (categories) {
    if (categories === "maker1") {
      return makers.map((maker) => {
        return (
          <option key={maker} value={maker}>
            Maker:{maker}
          </option>
        );
      });
    }
    if (categories === "maker2") {
      return makers.map((maker) => {
        return (
          <option key={maker} value={maker}>
            Maker:{maker}
          </option>
        );
      });
    }
    if (categories === "model1") {
      return modelsByMaker1.map((model) => {
        return (
          <option key={model} value={model}>
            Model:{model}
          </option>
        );
      });
    }
    if (categories === "model2") {
      return modelsByMaker2.map((model) => {
        return (
          <option key={model} value={model}>
            Model:{model}
          </option>
        );
      });
    }
    if (categories === "color1") {
      return colors.map((color) => {
        return (
          <option key={color} value={color}>
            Color:{color}
          </option>
        );
      });
    }
    if (categories === "color2") {
      return colors.map((color) => {
        return (
          <option key={color} value={color}>
            Color:{color}
          </option>
        );
      });
    }
    if (categories === "year1") {
      return yearsByModels1.map((year) => {
        return (
          <option key={year} value={year}>
            Year:{year}
          </option>
        );
      });
    }
    if (categories === "year2") {
      return yearsByModels2.map((year) => {
        return (
          <option key={year} value={year}>
            Year:{year}
          </option>
        );
      });
    }
  };

  return (
    <>
      {selected === "noraml" ? (
        <div id="input1">
          <select
            className="searchbar--select"
            onChange={(e) => {
              setMaker1(e.target.value);
            }}
          >
            {showOptions("maker1")}
          </select>
          <select
            className="searchbar--select"
            onChange={(e) => {
              setModel1(e.target.value);
            }}
          >
            <option key="all" value="all">
              Model:All
            </option>
            {showOptions("model1")}
          </select>
          <select className="searchbar--select">
            <option value="all">Year:All</option>
            {showOptions("year1")}
          </select>
          <select
            className="searchbar--select"
            onChange={(e) => {
              setColor1(e.target.value);
            }}
          >
            {showOptions("color1")}
          </select>
          <select className="searchbar--select">
            <option value="all">Mileage:All</option>
          </select>
        </div>
      ) : (
        <>
          <div id="input1">
            <select
              className="searchbar--select"
              onChange={(e) => {
                setMaker1(e.target.value);
              }}
            >
              {showOptions("maker1")}
            </select>
            <select className="searchbar--select">
              <option key="all" value="all">
                Model:All
              </option>
              {showOptions("model1")}
            </select>
            <select className="searchbar--select">
              <option value="all">Year:All</option>
              {showOptions("year1")}
            </select>
            <select
              className="searchbar--select"
              onChange={(e) => {
                setColor1(e.target.value);
              }}
            >
              {showOptions("color1")}
            </select>
            <select className="searchbar--select">
              <option value="all">Mileage:All</option>
            </select>
          </div>
          <div id="input2">
            <select
              className="searchbar--select"
              onChange={(e) => {
                setMaker2(e.target.value);
              }}
            >
              {showOptions("maker2")}
            </select>
            <select className="searchbar--select">
              <option key="all" value="all">
                Model:All
              </option>
              {showOptions("model2")}
            </select>
            <select className="searchbar--select">
              <option value="all">Year:All</option>
              {showOptions("year2")}
            </select>
            <select
              className="searchbar--select"
              onChange={(e) => {
                setColor2(e.target.value);
              }}
            >
              {showOptions("color2")}
            </select>
            <select className="searchbar--select">
              <option value="all">Mileage:All</option>
            </select>
          </div>
        </>
      )}
    </>
  );
}
