import { useEffect, useState } from "react";
import axios from "axios";

export default function UseGetYearsByModel(model) {
  const baseURL = "http://localhost:8000/api";
  const [years, setYears] = useState([]);
  const removeDuplicate = function (arr) {
    return [...new Set(arr)].sort((a, b) => b - a);
  };
  const getYearsByModel = async function (model) {
    try {
      const response = await axios.get(`${baseURL}/car/models/${model}`);
      const yearArr = response?.data
        .map((car) => {
          return car.madeYear;
        })
        .sort();
      const removedDuplicatedYearArr = removeDuplicate(yearArr);
      setYears(removedDuplicatedYearArr);
    } catch (error) {
      console.log("error occured in UseGetYearsByModel", error);
    }
  };
  useEffect(() => {
    getYearsByModel(model);
  }, [model]);

  return years;
}
