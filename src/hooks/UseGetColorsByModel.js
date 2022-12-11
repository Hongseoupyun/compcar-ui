import { useEffect, useState } from "react";
import axios from "axios";

export default function UseGetColorsByModel(model) {
  const baseURL = "http://localhost:8000/api";
  const [colors, setColors] = useState([]);
  const removeDuplicate = function (arr) {
    return [...new Set(arr)];
  };
  const getColorsByModel = async function (model) {
    try {
      const response = await axios.get(`${baseURL}/car/models/${model}`);
      const colorArr = response?.data
        .map((car) => {
          return car.color;
        })
        .sort();
      const removedDuplicatedColorArr = removeDuplicate(colorArr);
      setColors(removedDuplicatedColorArr);
    } catch (error) {
      console.log("error occured in useGetColorsByMakers", error);
    }
  };
  useEffect(() => {
    getColorsByModel(model);
  }, [model]);

  return colors;
}
