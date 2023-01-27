import React from "react";
import { useState } from "react";
import { FaBookmark } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import "./ResultPage.scss";
import ResultPageGraphs from "components/ResultPage/ResultPageGraphs";
import ComparePopUp from "components/ComparePopUp/ComparePopUp";
import ShowOptions from "components/SearchPage/ShowOptions";
const noImage = require("assets/noImage.jpeg");

export default function ResultPage(props) {
  const {
    searchedCar1,
    setSearchedCar1,
    searchedCar2,
    setSearchedCar2,
    carsByMaker1ForGraph,
    makers,
    modelsByMaker1,
    handleSelect,
    handleSearch,
    yearsByModels1,
    colorsByModels1,
    searchedResult,
  } = props;
  const [isComparePopUpOpen, setIsComparePopUpOpen] = useState(false);
  const navigate = useNavigate();
  const handleBackToMainPage = (e) => {
    e.preventDefault();
    setSearchedCar1({
      maker1: null,
      model1: null,
      year1: null,
      color1: null,
      mileage1: null,
    });
    setSearchedCar2({
      maker2: null,
      model2: null,
      year2: null,
      color2: null,
      mileage2: null,
    });
    navigate("/");
  };

  return (
    <div className="result--page">
      <ComparePopUp
        isComparePopUpOpen={isComparePopUpOpen}
        onClose={() => setIsComparePopUpOpen(false)}
      />
      <section className="searched--car--section">
        <div className="--search--wrapper">
          <select onChange={(e) => handleSelect(e, "maker1", 1)}>
            <option>Maker: Select Maker</option>
            <ShowOptions categories="maker1" makers={makers} />
          </select>
          <select
            onChange={(e) => {
              handleSelect(e, "model1", 1);
            }}
          >
            <option>Model: Select Model</option>
            <ShowOptions categories="model1" modelsByMaker1={modelsByMaker1} />
          </select>
          <select
            onChange={(e) => {
              handleSelect(e, "year1", 1);
            }}
          >
            <option>Year: Select Year</option>
            <ShowOptions categories="year1" yearsByModels1={yearsByModels1} />
          </select>
          <select
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
          <select>
            <option value="">Mileage:Select Mileage</option>
            <option value="all">Mileage:All Range</option>
            <option value="1">Mileage:0-50000 </option>
            <option value="2">Mileage:50000-100000 </option>
            <option value="3">Mileage:100000-150000 </option>
            <option value="4">Mileage:150000-200000 </option>
            <option value="5">Mileage:250000-300000 </option>
            <option value="6">Mileage:350000-400000 </option>
          </select>
          <div>
            <button onClick={(e) => handleSearch(e, "graph", null)}>
              Search
            </button>
          </div>
        </div>
        <div className="button--back--wrapper">
          <button
            className="button--back"
            onClick={(e) => handleBackToMainPage(e)}
          >
            <BiArrowBack id="emoji" />
            <div>Back to main page</div>
          </button>
        </div>
        <div className="searched--car--info">
          <div className="searched--car--info--wrapper">
            <div className="searched--car--name">
              {`${
                searchedResult.year
              } ${searchedResult.maker?.toUpperCase()} ${searchedResult.model?.toUpperCase()} `}
            </div>
            <div className="searched--car--favourite">
              <FaBookmark id="bookmark" />
            </div>
          </div>
          <div className="searched--car--price--wrapper">
            <div className="searched--car-image--wrapper">
              <img
                alt="car--image"
                id="car--image"
                src={searchedResult.url ? searchedResult.url : noImage}
              />
            </div>
            <div className="searched--card --best">
              <div className="label--wrapper">
                <div id="label">Best</div>
                <div id="price">
                  {searchedResult.price?.best
                    ? `$${searchedResult.price?.best}`
                    : "N/A"}
                </div>
              </div>
            </div>
            <div className="searched--card --cheapest">
              <div className="label--wrapper">
                <div id="label">Cheapest</div>
                <div id="price">
                  {searchedResult.price?.cheapest
                    ? `$${searchedResult.price?.cheapest}`
                    : "N/A"}
                </div>
              </div>
            </div>
            <div className="searched--card --expensive">
              <div className="label--wrapper">
                <div id="label">Most Expensive</div>
                <div id="price">
                  {searchedResult.price?.mostExpensive
                    ? `$${searchedResult.price?.mostExpensive}`
                    : "N/A"}
                </div>
              </div>
            </div>
            <div
              className="searched--card--compare"
              onClick={() => setIsComparePopUpOpen(true)}
            >
              <div className="label--wrapper --compare">
                <div id="compare">Compare with your favourite</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="graph--section">
        <ResultPageGraphs
          carsByMaker1ForGraph={carsByMaker1ForGraph}
          searchedResult={searchedResult}
        />
      </section>
    </div>
  );
}
