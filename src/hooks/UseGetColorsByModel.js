import { useEffect, useState } from "react";
import axios from "axios";

export default function UseGetColorsByModel(model, year) {
  const baseURL = "https://compcar-api.onrender.com/api";
  const [colors, setColors] = useState([]);
  const removeDuplicate = function (arr) {
    return [...new Set(arr)];
  };
  const getColorsByModel = async function (model, year) {
    if (model === null) return setColors([]);
    try {
      const response = await axios.get(`${baseURL}/car/models/${model}`);
      const colorArr = response?.data.filter((car) => car.madeYear == year);
      const colorArr2 = colorArr.map((car) => car.color);
      const filteredColorArr = colorArr2.sort();
      const removedDuplicatedColorArr = removeDuplicate(filteredColorArr);
      setColors(removedDuplicatedColorArr);
    } catch (error) {
      console.log("error occured in useGetColorsByMakers", error);
    }
  };
  useEffect(() => {
    getColorsByModel(model, year);
  }, [year]);

  return colors;
}
