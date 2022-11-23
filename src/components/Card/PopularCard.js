import React from "react";
import "./PopularCard.css"
export default function Card(props){
    return(
        <div className='contentsCard'>
            <div key={props.id} className='cityCard'>
                <img src={props.image} alt = 'city-img' className = 'cityImage'></img>
                <div className = 'cityCard_content'>
                    <h3 className ='cityName'> {props.cityName}</h3>
                    <div className = 'cityInfo'>
                        <div className = 'model1'> {props.model1}</div>
                        <div className = 'model2'> {props.model2}</div>
                        <div className = 'model3'> {props.model3}</div>
                    </div>
                </div>
            </div>
        </div> 
    )
}
