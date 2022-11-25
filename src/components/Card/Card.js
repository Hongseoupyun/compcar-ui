import "./Card.css";
import React from "react";
export default function Card(props) {
  return (
    <div className="contentsCard">
      <div key={props.id} className="carCard">
        <img src={props.image} alt="car-img" className="carImage"></img>
        <div className="carCard_content">
          <h3 className="carBrand"> {props.brand}</h3>
          <div className="carInfo">
            <div className="model"> Model: {props.model}</div>
            <div className="price">Price: ${props.price}</div>
            <div className="mileage">Mileage: {props.mileage} km</div>
          </div>
        </div>
      </div>
    </div>
  );
}
