import React from "react";
import { useState } from "react";
import axios from "axios";
import { Routes, Route, useNavigate } from "react-router-dom";
import LandingPage from "components/Main/LandingPage";
import ResultPage from "components/ResultPage/ResultPage";
import SignIn from "components/Login/SignIn";
import SignUp from "components/Login/SignUp";
import UseGetMakers from "hooks/UseGetMakers";
import UseGetModelsByMaker from "hooks/UseGetModelsByMaker";
import UseGetYearsByModel from "hooks/UseGetYearsByModel";
import UseGetColorsByModel from "hooks/UseGetColorsByModel";
import UseGetImagebyYearsAndColors from "hooks/UseGetImagebyYearsAndColors";

function Main() {
  const navigate = useNavigate();
  //
  const [isLoading, setIsLoading] = useState(false);
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

  //state for graph data
  const [carsByMaker1ForGraph, setCarsByMaker1ForGraph] = useState([]);
  const [carsToCompareForGraph, setCarsToCompareForGraph] = useState([]);

  //state for searched result
  const [searchedResult, setSearchedResult] = useState({
    maker: null,
    model: null,
    year: null,
    color: null,
    mileage: null,
    url: null,
    price: {
      best: null,
      cheapest: null,
      mostExpensive: null,
    },
    maker2: null,
    model2: null,
    year2: null,
    color2: null,
  });

  //function returns the options for the select options
  const makers = UseGetMakers("maker");
  let modelsByMaker1 = UseGetModelsByMaker(searchedCar1.maker1, "forInput");
  let modelsByMaker2 = UseGetModelsByMaker(searchedCar2.maker2, "forInput");
  let yearsByModels1 = UseGetYearsByModel(searchedCar1.model1);
  let yearsByModels2 = UseGetYearsByModel(searchedCar2.model2);
  let colorsByModels1 = UseGetColorsByModel(
    searchedCar1.model1,
    searchedCar1.year1
  );
  let colorsByModels2 = UseGetColorsByModel(
    searchedCar2.model2,
    searchedCar2.year2
  );

  // function returns the data for the graph
  let resultImage = UseGetImagebyYearsAndColors(
    searchedCar1.model1,
    searchedCar1.year1,
    searchedCar1.color1
  );

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

  const handleSearch = async (e, page) => {
    e.preventDefault();
    setIsLoading(true);
    //function to fetch the data for the graph
    async function fetchGraphdata() {
      const baseURL = "https://compcar-api.onrender.com/api";
      try {
        const response = await axios.get(
          `${baseURL}/car/graph/${searchedCar1.maker1}`
        );
        const modelArr = response.data;
        setCarsByMaker1ForGraph(modelArr);

        //To find the price ranges of searched car
        let filteredModel = modelArr.find((car) => {
          if (car.name.includes(searchedCar1.model1)) {
            return car;
          }
          return;
        });
        let priceArr = filteredModel.data
          .map((data) => {
            return data.price;
          })
          .sort((a, b) => b - a);

        setSearchedResult((prev) => ({
          ...prev,
          price: {
            ...prev.price,
            best: priceArr[Math.floor(priceArr.length / 2)],
            cheapest: priceArr[priceArr.length - 1],
            mostExpensive: priceArr[0],
          },
        }));
      } catch (error) {
        console.log("error occured in CarInfoForGraph", error);
      }
      return;
    }
    //function to set the searched result to display
    function setSearchedCarResultToDisplay() {
      setSearchedResult((prev) => ({
        ...prev,
        maker: searchedCar1.maker1,
        model: searchedCar1.model1,
        year: searchedCar1.year1,
        color: searchedCar1.color1,
        mileage: searchedCar1.mileage1,
        url: resultImage[0],
      }));
      return;
    }

    if (
      page === "graph" &&
      Object.values(searchedCar1).every((value) => value !== null)
    ) {
      return fetchGraphdata().then(() => {
        setSearchedCarResultToDisplay();
      });
    }
    if (
      page === "search" &&
      Object.values(searchedCar1).every((value) => value !== null)
    ) {
      return fetchGraphdata()
        .then(() => {
          setSearchedCarResultToDisplay();
        })
        .then(() => navigate("/result"));
    }
    return alert("Please select all the options");
  };

  const handleSearchToCompare = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    //function to fetch the data for the graph to compare
    async function fetchGraphdataToCompare() {
      const baseURL = "https://compcar-api.onrender.com/api";
      try {
        const response1 = await axios.get(
          `${baseURL}/car/graph/${searchedCar2.maker2}`
        );
        const response2 = await axios.get(
          `${baseURL}/car/graph/${searchedCar1.maker1}`
        );
        const modelArr1 = response1.data;
        const modelArr2 = response2.data;

        const filteredModel1 = modelArr1.find((car) => {
          if (car.name.includes(searchedCar1.model1)) {
            return car;
          }
          return;
        });

        const filteredModel2 = modelArr2.find((car) => {
          if (car.name.includes(searchedCar2.model2)) {
            return car;
          }
          return;
        });

        // setCarsToCompareForGraph([filteredModel1, filteredModel2]);

        let priceArr = filteredModel1.data
          .map((data) => {
            return data.price;
          })
          .sort((a, b) => b - a);
        setSearchedResult((prev) => ({
          ...prev,
          price: {
            ...prev.price,
            best: priceArr[Math.floor(priceArr.length / 2)],
            cheapest: priceArr[priceArr.length - 1],
            mostExpensive: priceArr[0],
          },
        }));
      } catch (error) {
        console.log("error occured in CarInfoForGraph", error);
      }
      return;
    }

    if (
      Object.values(searchedCar1).every((value) => value !== null) &&
      Object.values(searchedCar2).every((value) => value !== null)
    ) {
      return fetchGraphdataToCompare()
        .then(() => {
          setSearchedResult((prev) => ({
            ...prev,
            maker: searchedCar1.maker1,
            model: searchedCar1.model1,
            year: searchedCar1.year1,
            color: searchedCar1.color1,
            mileage: searchedCar1.mileage1,
            url: resultImage[0],
            maker2: searchedCar2.maker2,
            model2: searchedCar2.model2,
            year2: searchedCar2.year2,
            color2: searchedCar2.color2,
          }));
        })
        .then(() => {
          navigate("/result");
        });
    }
    alert("Please select all the options");
    console.log("carsToCompareForGraph===", carsToCompareForGraph);
  };
  console.log("searchedResult====", searchedResult);
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
              handleSearch={handleSearch}
              handleSearchToCompare={handleSearchToCompare}
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
              carsByMaker1ForGraph={carsByMaker1ForGraph}
              makers={makers}
              modelsByMaker1={modelsByMaker1}
              handleSelect={handleSelect}
              handleSearch={handleSearch}
              yearsByModels1={yearsByModels1}
              colorsByModels1={colorsByModels1}
              searchedResult={searchedResult}
              setCarsToCompareForGraph={setCarsToCompareForGraph}
              carsToCompareForGraph={carsToCompareForGraph}
              handleSearchToCompare={handleSearchToCompare}
            />
          }
        />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default Main;
