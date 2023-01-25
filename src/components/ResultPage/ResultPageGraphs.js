import React, { memo } from "react";
import { Scatter } from "react-chartjs-2";
import "./ResultPageGraphs.scss";
import {
  Chart as ChartJS,
  CategoryScale, //x axis
  LinearScale, //y axis
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  plugins,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function ResultPageGraphs(props) {
  const { carsByMaker1ForGraph, searchedResult } = props;

  const data1ForGraph1 = {
    datasets: carsByMaker1ForGraph.map((car, index) => {
      return {
        label: car.name,
        data: car.data.map((el) => {
          return {
            x: el.year,
            y: el.price,
            name: car.name,
            year: el.year,
            price: el.price,
          };
        }),
        pointRadius: car.name.includes(searchedResult.model) ? 6 : 3,
        //radius of the point
        fill: false,
        backgroundColor: car.name.includes(searchedResult.model)
          ? `#fe7826`
          : `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
              Math.random() * 100
            )}, ${Math.floor(Math.random() * 100)}, 0.45)`,
        hoverRadius: 10,
      };
    }),
  };
  const data1ForGraph2 = {
    datasets: carsByMaker1ForGraph.map((car, index) => {
      return {
        label: car.name,
        data: car.data.map((el) => {
          return {
            x: el.mileage,
            y: el.price,
            name: car.name,
            mileage: el.mileage,
            price: el.price,
            year: el.year,
          };
        }),
        pointRadius: car.name.includes(searchedResult.model) ? 6 : 3,
        //radius of the point
        fill: false,
        backgroundColor: car.name.includes(searchedResult.model)
          ? `#fe7826`
          : `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
              Math.random() * 255
            )}, ${Math.floor(Math.random() * 255)}, 0.45)`,
        // hoverBorderColor: "red",
        // hoverBackgroundColor: "red",
        hoverRadius: 10,
      };
    }),
  };

  const data2ForGraph1 = {};
  const data2ForGraph2 = {};
  const title1 = "Price variation by year";
  const title2 = "Price variation by mileage";
  const options1 = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
        position: "average",
        backgroundColor: "#196e86",
        bodyColor: "white",
        padding: 10,
        callbacks: {
          label: (context) => {
            return context.raw.year == searchedResult.year &&
              context.raw.name.includes(searchedResult.model)
              ? "*Your Search* " +
                  context.raw.year +
                  " " +
                  context.raw.name +
                  ": " +
                  `(Price: $${context.raw.price})`
              : context.raw.year +
                  " " +
                  context.raw.name +
                  ": " +
                  `(Price: $${context.raw.price})`;
          },
        },
        bodyFont: {
          size: 14,
          weight: "bold",
        },
      },
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: title1,
      },
      scales: {
        hover: {
          mode: "dataset",
          intersect: true,
        },
      },
    },
  };

  const options2 = {
    ...options1,
    plugins: {
      ...options1.plugins,
      tooltip: {
        ...options1.plugins.tooltip,
        callbacks: {
          label: (context) => {
            return context.raw.year == searchedResult.year &&
              context.raw.name.includes(searchedResult.model)
              ? "*Your Search* " +
                  context.raw.year +
                  " " +
                  context.raw.name +
                  ": " +
                  `(Mileage: ${context.raw.mileage}, Price: $${context.raw.price})`
              : context.raw.year +
                  " " +
                  context.raw.name +
                  ": " +
                  `(Mileage: ${context.raw.mileage}, Price: $${context.raw.price})`;
          },
        },
      },
      title: {
        ...options1.plugins.title,
        text: title2,
      },
    },
  };

  return (
    <div className="graphs">
      <div className="graphs--wrapper">
        <Scatter className="--1" data={data1ForGraph1} options={options1} />
      </div>
      <div className="graphs--wrapper">
        <Scatter className="--2" data={data1ForGraph2} options={options2} />
      </div>
    </div>
  );
}

export default memo(ResultPageGraphs);
