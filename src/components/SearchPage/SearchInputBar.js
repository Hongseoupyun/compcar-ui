import React from "react";
import { useEffect, useState } from "react";
import { useRemoveDuplicates } from "hooks/useRemoveDuplicates";

export default function SearchInputBar(props) {
  const { selected } = props;
  const [maker, setBrand] = useRemoveDuplicates("maker")
  const [model, setModel] = useRemoveDuplicates("model")
  const [madeYear, setMadeYear] = useRemoveDuplicates("madeYear")
  const [mileage, setMileage] = useRemoveDuplicates("mileage")

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

  return (
    <>
      {selected === "noraml" ? (
        <div id="input1">
          <select className="searchbar--select">
            <option value="all">Maker:All</option>
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
      ) : (
        <>
          <div id="input1">
            <select className="searchbar--select">
              <option value="all">Maker:All</option>
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
              <option value="all">Maker:All</option>
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
        </>
      )}
    </>
  );
}
