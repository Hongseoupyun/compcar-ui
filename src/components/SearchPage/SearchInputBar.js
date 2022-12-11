import React from "react";
import { useState } from "react";
import UseGetMakers from "hooks/UseGetMakers";
import UseGetModelsByMaker from "hooks/UseGetModelsByMaker";
import UseGetYearsByModel from "hooks/UseGetYearsByModel";
import UseGetColorsByModel from "hooks/UseGetColorsByModel";

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
  const makers = UseGetMakers("maker");
  let modelsByMaker1 = UseGetModelsByMaker(maker1);
  let modelsByMaker2 = UseGetModelsByMaker(maker2);
  let yearsByModels1 = UseGetYearsByModel(model1);
  let yearsByModels2 = UseGetYearsByModel(model2);
  let colorsByModels1 = UseGetColorsByModel(model1);
  let colorsByModels2 = UseGetColorsByModel(model2);
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
      return colorsByModels1.map((color) => {
        return (
          <option key={color} value={color}>
            Color:{color}
          </option>
        );
      });
    }
    if (categories === "color2") {
      return colorsByModels2.map((color) => {
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
            id="maker1"
            className="searchbar--select"
            onChange={(e) => {
              setMaker1(e.target.value);
            }}
          >
            {showOptions("maker1")}
          </select>
          <select
            id="model1"
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
          <select
            className="searchbar--select"
            id="year1"
            onChange={(e) => {
              setYear1(e.target.value);
            }}
          >
            <option value="all">Year:All</option>
            {showOptions("year1")}
          </select>
          <select
            id="color1"
            className="searchbar--select"
            onChange={(e) => {
              setColor1(e.target.value);
            }}
          >
            <option key="all" value="all">
              Color:All
            </option>
            {showOptions("color1")}
          </select>
          <select className="searchbar--select" id="mileage1">
            <option value="all">Mileage:All</option>
          </select>
        </div>
      ) : (
        <>
          <div id="input1">
            <select
              id="maker1"
              className="searchbar--select"
              onChange={(e) => {
                setMaker1(e.target.value);
              }}
            >
              {showOptions("maker1")}
            </select>
            <select
              id="model1"
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
            <select
              className="searchbar--select"
              id="year1"
              onChange={(e) => {
                setYear1(e.target.value);
              }}
            >
              <option value="all">Year:All</option>
              {showOptions("year1")}
            </select>
            <select
              id="color1"
              className="searchbar--select"
              onChange={(e) => {
                setColor1(e.target.value);
              }}
            >
              <option key="all" value="all">
                Color:All
              </option>
              {showOptions("color1")}
            </select>
            <select className="searchbar--select" id="mileage1">
              <option value="all">Mileage:All</option>
            </select>
          </div>
          <div id="input2">
            <select
              id="maker2"
              className="searchbar--select"
              onChange={(e) => {
                setMaker2(e.target.value);
              }}
            >
              {showOptions("maker2")}
            </select>
            <select
              className="searchbar--select"
              id="model2"
              onChange={(e) => {
                setModel2(e.target.value);
              }}
            >
              <option key="all" value="all">
                Model:All
              </option>
              {showOptions("model2")}
            </select>
            <select
              className="searchbar--select"
              id="year2"
              onChange={(e) => {
                setYear2(e.target.value);
              }}
            >
              <option value="all">Year:All</option>
              {showOptions("year2")}
            </select>
            <select
              id="color2"
              className="searchbar--select"
              onChange={(e) => {
                setColor2(e.target.value);
              }}
            >
              <option key="all" value="all">
                Color:All
              </option>
              {showOptions("color2")}
            </select>
            <select className="searchbar--select" id="mileage2">
              <option value="all">Mileage:All</option>
            </select>
          </div>
        </>
      )}
    </>
  );
}
