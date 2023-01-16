import { useEffect, useState } from "react";
import axios from "axios";

export default function UseGetYearsByMaker(maker) {
  const baseURL = "https://compcar-api.onrender.com/api";
  const [years, setYears] = useState([]);
  const removeDuplicate = function (arr) {
    return [...new Set(arr)].sort((a, b) => a - b);
  };
  const UseGetYearsByMaker = async function (maker) {
    if (maker !== null) {
      try {
        const response = await axios.get(`${baseURL}/car/makers/${maker}`);
        const yearArr = response?.data.map((car) => {
          return car.madeYear;
        });
        const removedDuplicatedYearArr = removeDuplicate(yearArr);
        setYears(removedDuplicatedYearArr);
      } catch (error) {
        console.log("error occured in UseGetYearsByMaker", error);
      }
    }
    return;
  };
  useEffect(() => {
    UseGetYearsByMaker(maker);
  }, [maker]);

  return years;
}
