import React from "react";
import { useState } from "react";
import UseGetMakers from "hooks/UseGetMakers";
import UseGetModelsByMaker from "hooks/UseGetModelsByMaker";
import UseGetYearsByModel from "hooks/UseGetYearsByModel";
import UseGetColorsByModel from "hooks/UseGetColorsByModel";
import ShowOptions from "components/SearchPage/ShowOptions";

export default function SearchInputBar(props) {
  const { selected } = props;
  //State for search
  const [maker1, setMaker1] = useState("All");
  const [maker2, setMaker2] = useState("All");
  const [model1, setModel1] = useState("All");
  const [model2, setModel2] = useState("All");
  const [year1, setYear1] = useState("All");
  const [year2, setYear2] = useState("All");
  const [color1, setColor1] = useState("All");
  const [color2, setColor2] = useState("All");
  const [mileage1, setMileage1] = useState("All");
  const [mileage2, setMileage2] = useState("All");
  const makers = UseGetMakers("maker");
  let modelsByMaker1 = UseGetModelsByMaker(maker1);
  let modelsByMaker2 = UseGetModelsByMaker(maker2);
  let yearsByModels1 = UseGetYearsByModel(model1);
  let yearsByModels2 = UseGetYearsByModel(model2);
  let colorsByModels1 = UseGetColorsByModel(model1);
  let colorsByModels2 = UseGetColorsByModel(model2);
  //function returns the options for the select tag

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
            <ShowOptions categories="maker1" makers={makers} />
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
            <ShowOptions categories="model1" modelsByMaker1={modelsByMaker1} />
          </select>
          <select
            className="searchbar--select"
            id="year1"
            onChange={(e) => {
              setYear1(e.target.value);
            }}
          >
            <option value="all">Year:All</option>
            <ShowOptions categories="year1" yearsByModels1={yearsByModels1} />
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
            <ShowOptions categories="color1" colorsByModels1={colorsByModels1} />
          </select>
          <select className="searchbar--select" id="mileage1">
            <option value="all">Mileage:All</option>
            <option value="1">0-50000 mile</option>
            <option value="2">50000-100000 mile</option>
            <option value="3">100000-150000 mile</option>
            <option value="4">150000-200000 mile</option>
            <option value="5">250000-300000 mile</option>
            <option value="6">350000-400000 mile</option>
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
              <ShowOptions categories="maker1" makers={makers} />
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
              <ShowOptions categories="model1" modelsByMaker1={modelsByMaker1} />
            </select>
            <select
              className="searchbar--select"
              id="year1"
              onChange={(e) => {
                setYear1(e.target.value);
              }}
            >
              <option value="all">Year:All</option>
              <ShowOptions categories="year1" yearsByModels1={yearsByModels1} />
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
              <ShowOptions categories="color1" colorsByModels1={colorsByModels1} />
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
              <ShowOptions categories="maker2" makers={makers} />
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
              <ShowOptions categories="model2" modelsByMaker2={modelsByMaker2} />
            </select>
            <select
              className="searchbar--select"
              id="year2"
              onChange={(e) => {
                setYear2(e.target.value);
              }}
            >
              <option value="all">Year:All</option>
              <ShowOptions categories="year2" yearsByModels2={yearsByModels2} />
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
              <ShowOptions categories="color2" colorsByModels2={colorsByModels2} />
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