// Description: This file is used to get the image by years and colors
import { useEffect, useState } from "react";
import axios from "axios";

export default function UseGetImagebyYearsAndColors(model, year, color) {
  const baseURL = "https://compcar-api.onrender.com/api";
  const [image, setImage] = useState([]);

  const getImagesByYearsAndColors = async function (model, year, color) {
    if (model === null) return setImage([]);

    try {
      const response = await axios.get(`${baseURL}/car/models/${model}`);
      const imageArr = response?.data.find((car) => {
        return car.madeYear == year && car.color == color;
      });
      setImage(imageArr ? imageArr.url : undefined);
      console.log("image", image);
    } catch (error) {
      console.log("error occured in useGetColorsByMakers", error);
    }
    return;
  };

  useEffect(() => {
    getImagesByYearsAndColors(model, year, color);
  }, [color]);

  return [image];
}
