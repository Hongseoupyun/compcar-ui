import { useEffect, useState } from "react";
import axios from "axios";

export default function UseGetModelsByMaker(maker, purpose) {
  const baseURL = "http://localhost:8000/api";
  const [models, setModel] = useState([]);
  const removeDuplicate = function (arr) {
    return [...new Set(arr)];
  };
  const getModelsByMaker = async function (maker) {
    if (maker !== null && purpose === "forInput") {
      try {
        const response = await axios.get(`${baseURL}/car/makers/${maker}`);
        const modelArr = response.data
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

    if (maker !== null && purpose === "forGraph") {
      let carArrForGraph = [
        {
          name: "",
          year: [],
          price: [],
          mileage: [],
        },
      ];
      try {
        const response = await axios.get(`${baseURL}/car/makers/${maker}`);
        const modelArr = response.data
          .map((car) => {
            return car;
          })
          .sort();
      
        for (let i = 0; i < modelArr.length; i++) {
          if (carArrForGraph[0].name === "") {
            carArrForGraph[0].name = `${modelArr[i].maker} ${
              modelArr[i].model.split(" ")[0]
            }`;
            carArrForGraph[0].year.push(modelArr[i].madeYear);
            carArrForGraph[0].price.push(modelArr[i].price[0].price);
            carArrForGraph[0].mileage.push(modelArr[i].mileage);
          } else {
            let isExist = false;
            for (let j = 0; j < carArrForGraph.length; j++) {
              if (
                carArrForGraph[j].name ===
                `${modelArr[i].maker} ${modelArr[i].model.split(" ")[0]}`
              ) {
                carArrForGraph[j].year.push(modelArr[i].madeYear);
                carArrForGraph[j].price.push(modelArr[i].price[0].price);
                carArrForGraph[j].mileage.push(modelArr[i].mileage);
                isExist = true;
              }
            }
            if (!isExist) {
              carArrForGraph.push({
                name: `${modelArr[i].maker} ${modelArr[i].model.split(" ")[0]}`,
                year: [modelArr[i].madeYear],
                price: [modelArr[i].price],
                mileage: [modelArr[i].mileage],
              });
            }
          }
        }
        setModel(carArrForGraph);
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
