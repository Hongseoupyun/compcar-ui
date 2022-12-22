import React from "react";
import UseGetMakers from "hooks/UseGetMakers";
import UseGetModelsByMaker from "hooks/UseGetModelsByMaker";
import UseGetYearsByModel from "hooks/UseGetYearsByModel";
import UseGetColorsByModel from "hooks/UseGetColorsByModel";
import ShowOptions from "components/SearchPage/ShowOptions";

export default function SearchInputBar(props) {
  const {
    selected,
    maker1,
    setMaker1,
    maker2,
    setMaker2,
    model1,
    setModel1,
    model2,
    setModel2,
    setYear1,
    setYear2,
    setColor1,
    setColor2,
    setMileage1,
    setMileage2,
  } = props;
  //State for search

  const makers = UseGetMakers("maker");
  let modelsByMaker1 = UseGetModelsByMaker(maker1, "forInput");
  let modelsByMaker2 = UseGetModelsByMaker(maker2, "forInput");
  let yearsByModels1 = UseGetYearsByModel(model1);
  let yearsByModels2 = UseGetYearsByModel(model2);
  let colorsByModels1 = UseGetColorsByModel(model1);
  let colorsByModels2 = UseGetColorsByModel(model2);
  //function returns the options for the select tag

  return (
    <>
      {selected === "normal" ? (
        <div id="input1">
          <select
            id="maker1"
            className="searchbar--select"
            onChange={(e) => {
              setMaker1(e.target.value);
            }}
          >
            <option>Maker: Select Maker</option>
            <ShowOptions categories="maker1" makers={makers} />
          </select>
          <select
            id="model1"
            className="searchbar--select"
            onChange={(e) => {
              setModel1(e.target.value);
            }}
          >
            <option>Model: Select Model</option>
            <ShowOptions categories="model1" modelsByMaker1={modelsByMaker1} />
          </select>
          <select
            className="searchbar--select"
            id="year1"
            onChange={(e) => {
              setYear1(e.target.value);
            }}
          >
            <option>Year: Select Year</option>
            <ShowOptions categories="year1" yearsByModels1={yearsByModels1} />
          </select>
          <select
            id="color1"
            className="searchbar--select"
            onChange={(e) => {
              setColor1(e.target.value);
            }}
          >
            <option>Color: Select Color</option>
            <ShowOptions
              categories="color1"
              colorsByModels1={colorsByModels1}
            />
          </select>
          <select
            className="searchbar--select"
            id="mileage1"
            onChange={(e) => {
              setMileage1(e.target.value);
            }}
          >
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
              <option>Maker: Select Maker</option>
              <ShowOptions categories="maker1" makers={makers} />
            </select>
            <select
              id="model1"
              className="searchbar--select"
              onChange={(e) => {
                setModel1(e.target.value);
              }}
            >
              <option>Model: Select Model</option>
              <ShowOptions
                categories="model1"
                modelsByMaker1={modelsByMaker1}
              />
            </select>
            <select
              className="searchbar--select"
              id="year1"
              onChange={(e) => {
                setYear1(e.target.value);
              }}
            >
              <option>Year: Select Year</option>
              <ShowOptions categories="year1" yearsByModels1={yearsByModels1} />
            </select>
            <select
              id="color1"
              className="searchbar--select"
              onChange={(e) => {
                setColor1(e.target.value);
              }}
            >
              <option>Color: Select Color</option>
              <ShowOptions
                categories="color1"
                colorsByModels1={colorsByModels1}
              />
            </select>
            <select
              className="searchbar--select"
              id="mileage1"
              onChange={(e) => {
                setMileage1(e.target.value);
              }}
            >
              <option value="all">Mileage:All</option>
              <option value="1">0-50000 mile</option>
              <option value="2">50000-100000 mile</option>
              <option value="3">100000-150000 mile</option>
              <option value="4">150000-200000 mile</option>
              <option value="5">250000-300000 mile</option>
              <option value="6">350000-400000 mile</option>
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
              <option>Maker: Select Maker</option>
              <ShowOptions categories="maker2" makers={makers} />
            </select>
            <select
              className="searchbar--select"
              id="model2"
              onChange={(e) => {
                setModel2(e.target.value);
              }}
            >
              <option>Model: Select Model</option>
              <ShowOptions
                categories="model2"
                modelsByMaker2={modelsByMaker2}
              />
            </select>
            <select
              className="searchbar--select"
              id="year2"
              onChange={(e) => {
                setYear2(e.target.value);
              }}
            >
              <option>Year: Select Year</option>
              <ShowOptions categories="year2" yearsByModels2={yearsByModels2} />
            </select>
            <select
              id="color2"
              className="searchbar--select"
              onChange={(e) => {
                setColor2(e.target.value);
              }}
            >
              <option>Color: Select Color</option>
              <ShowOptions
                categories="color2"
                colorsByModels2={colorsByModels2}
              />
            </select>
            <select
              className="searchbar--select"
              id="mileage2"
              onChange={(e) => {
                setMileage2(e.target.value);
              }}
            >
              <option value="all">Mileage:All</option>
              <option value="1">0-50000 mile</option>
              <option value="2">50000-100000 mile</option>
              <option value="3">100000-150000 mile</option>
              <option value="4">150000-200000 mile</option>
              <option value="5">250000-300000 mile</option>
              <option value="6">350000-400000 mile</option>
            </select>
          </div>
        </>
      )}
    </>
  );
}
