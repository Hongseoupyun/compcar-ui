import React from "react";
import { Line } from "react-chartjs-2";
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
  const {
    carsByMaker1ForGraph,
    pricesByMaker1ForGraphAxis,
    yearsByMaker1ForGraphAxis,
  } = props;

  

  const data1ForGraph1 = {
    labels: yearsByMaker1ForGraphAxis,//xaixs
    datasets: carsByMaker1ForGraph.map((car, index) => {
      return {
        label: car.name,
        data:
        [],//y axis or [{x:20,y:10}]
        fill: false,
        backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
          Math.random() * 255
        )}, ${Math.floor(Math.random() * 255)}, 1)`,
      };
    }),
  };
  const data1ForGraph2 = {};
  const data2ForGraph1 = {};
  const data2ForGraph2 = {};
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Price Variation by Year",
      },
      scales: {
        y: {
          min: pricesByMaker1ForGraphAxis[0],
          max: pricesByMaker1ForGraphAxis[
            pricesByMaker1ForGraphAxis.length - 1
          ],
        },
      },
    },
  };

  return (
    <div className="graphs">
      <div className="graphs--wrapper">
        <Line
          className="--1"
          data={data1ForGraph1}
          options={options}
          style={{
            width: "600px",
            height: "300px",
          }}
        />
      </div>
      <div>
        {/* <Line className="--2" data = {data1ForGraph2} options={options} /> */}
      </div>
    </div>
  );
}

export default ResultPageGraphs;
