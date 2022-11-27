import "./CardApp.css";
import Card from "./Card";
import PopularCard from "./PopularCard";
//import Button from './Button';
//import data from "./data";
import cityData from "./cityData";
import { useState, useEffect } from "react";

function CardApp() {
  const[recCard, setRecCard] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:8000/api/kijijiCar')
    .then((response)=>response.json())
    .then((data)=>console.log(data))
    .then((data)=>setRecCard(data));
  }, []);

  return (
    <div className="cardApp">
      <div className="title">
        <h2 className="sub-title">The best deals</h2>
        <div className="sub-explain">
          Buy the car with the best deal we've found this week.{" "}
        </div>
        <div className="more-option">see more deals</div>
      </div>
      <div className="deal">
        {recCard.map((recData) => (
          <Card
            image={recData.image}
            brand={recData.brand}
            model={recData.model}
            price={recData.price}
            mileage={recData.mileage}
          />
        ))}
      </div>
      <div className="title">
        <h2 className="sub-title">Most Popular Cars in Canada</h2>

        <div className="more-option">View more cities</div>
      </div>
      <div className="deal">
        {cityData.map((cityData) => (
          <PopularCard
            image={cityData.image}
            cityName={cityData.cityName}
            model1={cityData.model1}
            model2={cityData.model2}
            model3={cityData.model3}
          />
        ))}
      </div>
    </div>
  );
}

export default CardApp;
