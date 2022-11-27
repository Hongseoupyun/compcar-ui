import React from "react";
import "./SearchPage.scss";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export default function SearchPage() {
  return (
    <section
      className="section--search"
      style={{
        backgroundImage: `url(${require("assets/searchBackground.jpeg")})`,
      }}
    >
      <h1>FIND YOUR DREAM CAR</h1>
      <div className="container--search--tap">
        <div className="tap--search">Search</div>
        <div className="tap--search" id="compare">Search to compare</div>
      </div>
      <div className="searchbar--wrapper">
        <form className="container--input">
          <select className="searchbar--select" >
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
          <button className="button--search" type="submit"><FaSearch id="emoji"/></button>
        </form>
      </div>
    </section>
  );
}
