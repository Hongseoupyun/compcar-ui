import React from "react";
import { useEffect, useState } from "react";
import { FaBookmark } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import "./ResultPage.scss";
import ResultPageGraphs from "components/ResultPage/ResultPageGraphs";
import ComparePopUp from "components/ComparePopUp/ComparePopUp";
import SearchInputBar from "components/SearchPage/SearchInputBar";

export default function ResultPage(props) {
  const {
    searchedCar1,
    setSearchedCar1,
    searchedCar2,
    setSearchedCar2,
    carsByMaker1ForGraph,
    pricesByMaker1ForGraphAxis,
    yearsByMaker1ForGraphAxis,
  } = props;
  const [isComparePopUpOpen, setIsComparePopUpOpen] = useState(false);
  useEffect(() => {
    console.log("searchedCar1: ", searchedCar1);
  }, []);
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
          <select>
            <option>Maker: Select Maker</option>
          </select>
          <select>
            <option>Model: Select Model</option>
          </select>
          <select>
            <option>Year: Select Year</option>
          </select>
          <select>
            <option>Color: Select Color</option>
          </select>
          <select>
            <option>Mileage: Select Mileage</option>
            <option value="1">0-50000 mile</option>
            <option value="2">50000-100000 mile</option>
            <option value="3">100000-150000 mile</option>
            <option value="4">150000-200000 mile</option>
            <option value="5">250000-300000 mile</option>
            <option value="6">350000-400000 mile</option>
          </select>
          <div>
            <button>Search</button>
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
                searchedCar1.year1
              } ${searchedCar1.maker1?.toUpperCase()} ${searchedCar1.model1?.toUpperCase()} ${searchedCar1.color1?.toUpperCase()}`}
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
                src={require("assets/Sehwan.jpg")}
              />
            </div>
            <div className="searched--card --best">
              <div className="label--wrapper">
                <div id="label">Best</div>
                <div id="price">$100,000</div>
              </div>
            </div>
            <div className="searched--card --cheapest">
              <div className="label--wrapper">
                <div id="label">Cheapest</div>
                <div id="price">$100,000</div>
              </div>
            </div>
            <div className="searched--card --expensive">
              <div className="label--wrapper">
                <div id="label">Most Expensive</div>
                <div id="price">$100,000</div>
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
          pricesByMaker1ForGraphAxis={pricesByMaker1ForGraphAxis}
          yearsByMaker1ForGraphAxis={yearsByMaker1ForGraphAxis}
          searchedCar1={searchedCar1}
        />
      </section>
    </div>
  );
}
