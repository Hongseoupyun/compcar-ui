import React from "react";
import { useEffect, useState } from "react";
import { useRemoveDuplicates } from "hooks/useRemoveDuplicates";

export default function SearchInputBar(props) {
  const { selected } = props;
  const makers = useRemoveDuplicates("maker");
  const models = useRemoveDuplicates("model");
  const madeYears = useRemoveDuplicates("madeYear");
  const mileages = useRemoveDuplicates("mileage");
  const colors = useRemoveDuplicates("color");

  const [searchInput, setSearchInput] = useState({
    maker1: "All",
    maker2: "All",
    model1: "All",
    moderl2: "All",
    year1: "All",
    year2: "All",
    color1: "All",
    color2: "All",
    mileage1: "All",
    mileage2: "All",
  });

  const showOptions = function (categories) {
    if (categories === "maker") {
      return makers.map((maker) => {
        return <option key={maker} value={maker}>Maker:{maker}</option>;
      });
    }
    if (categories === "model") {
      return models.map((model) => {
        return <option key={model} value={model}>Model:{model}</option>;
      });
    }
    if (categories === "color") {
      return colors.map((color) => {
        return <option key={color} value={color}>Color:{color}</option>;
      });
    }
  };

  return (
    <>
      {selected === "noraml" ? (
        <div id="input1">
          <select className="searchbar--select">{showOptions("maker")}</select>
          <select className="searchbar--select">
            <option value="all">Model:All</option>
          </select>
          <select className="searchbar--select">
            <option value="all">Year:All</option>
          </select>
          <select className="searchbar--select">{showOptions("color")}</select>
          <select className="searchbar--select">
            <option value="all">Mileage:All</option>
          </select>
        </div>
      ) : (
        <>
          <div id="input1">
            <select className="searchbar--select">
              {showOptions("maker")}
            </select>
            <select className="searchbar--select">
              <option value="all">Model:All</option>
            </select>
            <select className="searchbar--select">
              <option value="all">Year:All</option>
            </select>
            <select className="searchbar--select">
              {showOptions("color")}
            </select>
            <select className="searchbar--select">
              <option value="all">Mileage:All</option>
            </select>
          </div>
          <div id="input2">
            <select className="searchbar--select">
              {showOptions("maker")}
            </select>
            <select className="searchbar--select">
              <option value="all">Model:All</option>
            </select>
            <select className="searchbar--select">
              <option value="all">Year:All</option>
            </select>
            <select className="searchbar--select">
              {showOptions("color")}
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
