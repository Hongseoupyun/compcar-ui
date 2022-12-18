import "./CardApp.css";
import Card from "./Card";
import PopularCard from "./PopularCard";
import cityData from "./cityData";
import { useState, useEffect } from "react";

function CardApp() {
  const[recCard, setRecCard] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:8000/api/kijijiCar')
    .then((response)=>response.json())
    .then((data) => {
      const newData = data.slice(1, 4);
      setRecCard(newData);
    })
    .then((data)=>console.log(data));
  }, []);

  return (
    <div className="CardApp">
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
            url={recData.url}
            maker={recData.maker}
            car_info={recData.car_info}
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
