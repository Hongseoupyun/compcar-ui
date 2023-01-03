import { useEffect, useState } from "react";
import axios from "axios";

export default function UseGetYearsByModel(model) {
  const baseURL = "http://localhost:8000/api";
  const [years, setYears] = useState([]);
  const removeDuplicate = function (arr) {
    return [...new Set(arr)].sort((a, b) => b - a);
  };
  const getYearsByModel = async function (model) {
    if (model !== null) {
      try {
        const response = await axios.get(`${baseURL}/car/models/${model}`);
        const yearArr = response?.data.map((car) => {
          return car.madeYear;
        });
        const removedDuplicatedYearArr = removeDuplicate(yearArr);
        setYears(removedDuplicatedYearArr);
      } catch (error) {
        console.log("error occured in UseGetYearsByModel", error);
      }
    }
    return;
  };
  useEffect(() => {
    getYearsByModel(model);
  }, [model]);

  return years;
}
