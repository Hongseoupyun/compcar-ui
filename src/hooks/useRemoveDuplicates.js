import { useEffect, useState } from "react";
import axios from "axios";

export function UseRemoveDuplicates(category) {
  const baseURL = "http://localhost:8000/api";
  const [categories, setCategories] = useState([]);
  const removeDuplicate = function (arr) {
    return [...new Set(arr)];
  };

  const getCarDatasByCategories = async function (category) {
    try {
      const response = await axios.get(`${baseURL}/car`);
      const carArr = response.data.map((car) => {
        return car[category];
      });
      const filteredCategories = removeDuplicate(carArr);

      if (
        category === "maker" ||
        category === "model" ||
        category === "color"
      ) {
        setCategories(filteredCategories.sort());
      } else if (category === "madeYear") {
        setCategories(filteredCategories.sort((a, b) => b - a));
      } else if (category === "mileage") {
        setCategories(filteredCategories.sort((a, b) => a - b));
      }
      filteredCategories.unshift("All");
      setCategories(filteredCategories.filter((item) => item !== ""));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCarDatasByCategories(category);
  }, []);

  return categories;
}
