import { useEffect, useState } from "react";
import axios from "axios";

export default function UseGetModelsByMaker(maker, purpose) {
  const baseURL = "https://compcar-api.onrender.com/api";
  const [models, setModel] = useState([]);
  const removeDuplicate = function (arr) {
    return [...new Set(arr)];
  };
  const getModelsByMaker = async function (maker) {
    if (maker !== null && purpose === "forInput") {
      try {
        const response = await axios.get(`${baseURL}/car/makers/${maker}`);
        const modelArr = response?.data
          .map((car) => {
            return car.model.split(" ")[0];
          })
          .sort();
        const removedDuplicatedModelArr = removeDuplicate(modelArr);
        setModel(removedDuplicatedModelArr);
      } catch (error) {
        console.log("error occured in useGetModelsByMaekr", error);
      }
    }
  };

  useEffect(() => {
    getModelsByMaker(maker);
  }, [maker]);

  return models;
}
