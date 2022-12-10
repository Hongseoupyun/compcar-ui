import { useEffect, useState } from "react";
import axios from "axios";

export default function UseGetYearsByModel(model) {
  const baseURL = "http://localhost:8000/api";
  const [years, setYears] = useState([]);
  const removeDuplicate = function (arr) {
    return [...new Set(arr)];
  };
  const getYearsByModel = async function (model) {
    try {
      const response = await axios.get(`${baseURL}/car/models/${model}`);
      const yearArr = response?.data
        .map((car) => {
          return car.madeYear;
        })
        .sort();
      const removedDuplicatedModelArr = removeDuplicate(yearArr);
      setYears(removedDuplicatedModelArr);
    } catch (error) {
      console.log("error occured in useGetModelsByMaekr", error);
    }
  };
  useEffect(() => {
    getYearsByModel(model);
  }, [model]);

  return years;
}
