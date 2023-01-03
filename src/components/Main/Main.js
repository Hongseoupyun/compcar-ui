import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "components/Main/LandingPage";
import ResultPage from "components/ResultPage/ResultPage";
import UseGetMakers from "hooks/UseGetMakers";
import UseGetModelsByMaker from "hooks/UseGetModelsByMaker";
import UseGetYearsByModel from "hooks/UseGetYearsByModel";
import UseGetColorsByModel from "hooks/UseGetColorsByModel";
import UseGetPricesByMakers from "hooks/UseGetPricesByMakers";
import UseGetYearsByMaker from "hooks/UseGetYearsByMaker";

function Main() {
  // state for the input
  const [searchedCar1, setSearchedCar1] = useState({
    maker1: null,
    model1: null,
    year1: null,
    color1: null,
    mileage1: "All",
  });
  const [searchedCar2, setSearchedCar2] = useState({
    maker2: null,
    model2: null,
    year2: null,
    color2: null,
    mileage2: "All",
  });

  //function returns the options for the select tag
  const makers = UseGetMakers("maker");
  let modelsByMaker1 = UseGetModelsByMaker(searchedCar1.maker1, "forInput");
  let modelsByMaker2 = UseGetModelsByMaker(searchedCar2.maker2, "forInput");
  let yearsByModels1 = UseGetYearsByModel(searchedCar1.model1);
  let yearsByModels2 = UseGetYearsByModel(searchedCar2.model2);
  let colorsByModels1 = UseGetColorsByModel(searchedCar1.model1);
  let colorsByModels2 = UseGetColorsByModel(searchedCar2.model2);

  // function returns the data for the graph
  let pricesByMaker1ForGraphAxis = UseGetPricesByMakers(searchedCar1.maker1);
  let yearsByMaker1ForGraphAxis = UseGetYearsByMaker(searchedCar1.maker1);
  let carsByMaker1ForGraph = UseGetModelsByMaker(searchedCar1.maker1,"forGraph");
  console.log("carsByMaker1ForGraph: ", carsByMaker1ForGraph);
  //handler function to update the state of the searched car
  const handleSelect = (e, category, searchNumber) => {
    const value = e.target.value;
    if (searchNumber === 1) {
      setSearchedCar1({ ...searchedCar1, [category]: value });
    }
    if (searchNumber === 2) {
      setSearchedCar2({ ...searchedCar2, [category]: value });
    }
  };

  return (
    <div className="main">
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              searchedCar1={searchedCar1}
              searchedCar2={searchedCar2}
              makers={makers}
              modelsByMaker1={modelsByMaker1}
              modelsByMaker2={modelsByMaker2}
              yearsByModels1={yearsByModels1}
              yearsByModels2={yearsByModels2}
              colorsByModels1={colorsByModels1}
              colorsByModels2={colorsByModels2}
              handleSelect={handleSelect}
            />
          }
        />
        <Route
          path="/result"
          element={
            <ResultPage
              searchedCar1={searchedCar1}
              setSearchedCar1={setSearchedCar1}
              searchedCar2={searchedCar2}
              setSearchedCar2={setSearchedCar2}
              carsByMaker1ForGraph = {carsByMaker1ForGraph}
              pricesByMaker1ForGraphAxis = {pricesByMaker1ForGraphAxis}
              yearsByMaker1ForGraphAxis = {yearsByMaker1ForGraphAxis}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default Main;
