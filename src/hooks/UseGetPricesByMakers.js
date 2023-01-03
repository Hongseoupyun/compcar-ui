import { useEffect, useState } from "react";
import axios from "axios";

export default function UseGetPricesByMakers(maker) {
  const baseURL = "http://localhost:8000/api";
  const [prices, setPrices] = useState([]);
  const removeDuplicate = function (arr) {
    return [...new Set(arr)];
  };
  const getPricesByMakers = async function () {
    if (maker !== null) {
      try {
        const response = await axios.get(`${baseURL}/car/makers/${maker}`);
        const pricesArr = response.data
          .map((car) => {
            return car.price;
          })
          .sort();
        const removedDuplicatedPricesArr = removeDuplicate(pricesArr);
        setPrices(removedDuplicatedPricesArr);
      } catch (error) {
        console.log("error occured in useGetPricesByMakers", error);
      }
    }
  };
  useEffect(() => {
    getPricesByMakers(maker);
  }, [maker]);
  return prices;
}
