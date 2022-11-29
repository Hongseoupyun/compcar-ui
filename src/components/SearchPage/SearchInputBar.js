import React from "react";

export default function SearchInputBar(props) {
  const {selected} = props
  return (
    <>
    
    {selected === "noraml" ? (
      <div id="input1">
      <select className="searchbar--select">
        <option value="all">Make:All</option>
      </select>
      <select className="searchbar--select">
        <option value="all">Model:All</option>
      </select>
      <select className="searchbar--select">
        <option value="all">Year:All</option>
      </select>
      <select className="searchbar--select">
        <option value="all">Color:All</option>
      </select>
      <select className="searchbar--select">
        <option value="all">Mileage:All</option>
      </select>
    </div>
      
    ) : (
      <>
        <div id="input1">
          <select className="searchbar--select">
            <option value="all">Make:All</option>
          </select>
          <select className="searchbar--select">
            <option value="all">Model:All</option>
          </select>
          <select className="searchbar--select">
            <option value="all">Year:All</option>
          </select>
          <select className="searchbar--select">
            <option value="all">Color:All</option>
          </select>
          <select className="searchbar--select">
            <option value="all">Mileage:All</option>
          </select>
        </div>
        <div id="input2">
          <select className="searchbar--select">
            <option value="all">Make:All</option>
          </select>
          <select className="searchbar--select">
            <option value="all">Model:All</option>
          </select>
          <select className="searchbar--select">
            <option value="all">Year:All</option>
          </select>
          <select className="searchbar--select">
            <option value="all">Color:All</option>
          </select>
          <select className="searchbar--select">
            <option value="all">Mileage:All</option>
          </select>
        </div>
      </>
    )}
    </>
  );
}
