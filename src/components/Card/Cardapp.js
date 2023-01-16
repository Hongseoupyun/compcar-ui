import "./Cardapp.css";
import Card from "./Card";
import PopularCard from "./PopularCard";
//import Button from './Button';
import data from "./data";
import cityData from "./cityData";

function Cardapp() {
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
        {data.map((data) => (
          <Card
            key={data.id}
            image={data.image}
            brand={data.brand}
            model={data.model}
            price={data.price}
            mileage={data.mileage}
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
            key={cityData.id}
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

export default Cardapp;
