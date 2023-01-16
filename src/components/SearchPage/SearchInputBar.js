import React from "react";
import ShowOptions from "components/SearchPage/ShowOptions";

export default function SearchInputBar(props) {
  const {
    selected,
    handleSelect,
    makers,
    modelsByMaker1,
    yearsByModels1,
    colorsByModels1,
    modelsByMaker2,
    yearsByModels2,
    colorsByModels2,
  } = props;
  //State for search

  return (
    <>
      {selected === "normal" ? (
        <div id="input1">
          <select
            id="maker1"
            className="searchbar--select"
            onChange={(e) => {
              handleSelect(e, "maker1", 1);
            }}
          >
            <option>Maker: Select Maker</option>
            <ShowOptions categories="maker1" makers={makers} />
          </select>
          <select
            id="model1"
            className="searchbar--select"
            onChange={(e) => {
              handleSelect(e, "model1", 1);
            }}
          >
            <option>Model: Select Model</option>
            <ShowOptions categories="model1" modelsByMaker1={modelsByMaker1} />
          </select>
          <select
            className="searchbar--select"
            id="year1"
            onChange={(e) => {
              handleSelect(e, "year1", 1);
            }}
          >
            <option>Year: Select Year</option>
            <ShowOptions categories="year1" yearsByModels1={yearsByModels1} />
          </select>
          <select
            id="color1"
            className="searchbar--select"
            onChange={(e) => {
              handleSelect(e, "color1", 1);
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
              handleSelect(e, "mileage1", 1);
            }}
          >
          <option value="">Mileage:Select Mileage</option>
              <option value="all">Mileage:All Range</option>
              <option value="1">Mileage:0-50000 </option>
              <option value="2">Mileage:50000-100000 </option>
              <option value="3">Mileage:100000-150000 </option>
              <option value="4">Mileage:150000-200000 </option>
              <option value="5">Mileage:250000-300000 </option>
              <option value="6">Mileage:350000-400000 </option>
          </select>
        </div>
      ) : (
        <>
          <div id="input1">
            <select
              id="maker1"
              className="searchbar--select"
              onChange={(e) => {
                handleSelect(e, "maker1", 1);
              }}
            >
              <option>Maker: Select Maker</option>
              <ShowOptions categories="maker1" makers={makers} />
            </select>
            <select
              id="model1"
              className="searchbar--select"
              onChange={(e) => {
                handleSelect(e, "model1", 1);
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
                handleSelect(e, "year1", 1);
              }}
            >
              <option>Year: Select Year</option>
              <ShowOptions categories="year1" yearsByModels1={yearsByModels1} />
            </select>
            <select
              id="color1"
              className="searchbar--select"
              onChange={(e) => {
                handleSelect(e, "color1", 1);
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
                handleSelect(e, "mileage1", 1);
              }}
            >
              <option value="">Mileage:Select Mileage</option>
              <option value="all">Mileage:All Range</option>
              <option value="1">Mileage:0-50000 </option>
              <option value="2">Mileage:50000-100000 </option>
              <option value="3">Mileage:100000-150000 </option>
              <option value="4">Mileage:150000-200000 </option>
              <option value="5">Mileage:250000-300000 </option>
              <option value="6">Mileage:350000-400000 </option>
            </select>
          </div>
          <div id="input2">
            <select
              id="maker2"
              className="searchbar--select"
              onChange={(e) => {
                handleSelect(e, "maker2", 2);
              }}
            >
              <option>Maker: Select Maker</option>
              <ShowOptions categories="maker2" makers={makers} />
            </select>
            <select
              className="searchbar--select"
              id="model2"
              onChange={(e) => {
                handleSelect(e, "model2", 2);
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
                handleSelect(e, "year2", 2);
              }}
            >
              <option>Year: Select Year</option>
              <ShowOptions categories="year2" yearsByModels2={yearsByModels2} />
            </select>
            <select
              id="color2"
              className="searchbar--select"
              onChange={(e) => {
                handleSelect(e, "color2", 2);
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
                handleSelect(e, "mileage2", 2);
              }}
            >
          <option value="">Mileage:Select Mileage</option>
              <option value="all">Mileage:All Range</option>
              <option value="1">Mileage:0-50000 </option>
              <option value="2">Mileage:50000-100000 </option>
              <option value="3">Mileage:100000-150000 </option>
              <option value="4">Mileage:150000-200000 </option>
              <option value="5">Mileage:250000-300000 </option>
              <option value="6">Mileage:350000-400000 </option>
            </select>
          </div>
        </>
      )}
    </>
  );
}
