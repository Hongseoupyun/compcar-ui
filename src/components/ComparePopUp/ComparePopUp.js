import React from "react";

export default function ComparePopUp(props) {
  const { isComparePopUpOpen } = props;
  if (!isComparePopUpOpen) return null;
  return (
    <div className="overlay">
      <div className="modal--container">
        <div className="modal--header">
          <div className="modal--header--heading">Select to compare</div>
          <div className="modal--header--close">X</div>
        </div>
        <div className="modal--title">MY FAVOURITE</div>
        <div className="modal--input">
          <select className="modal--input--select">
            <option>Select Car</option>
          </select>
        </div>
        <div className="modal--button--wrapper">
          <button className="modal--button--cancel">Cancel</button>
          <button className="modal--button--select">Select</button>
        </div>
      </div>
    </div>
  );
}
