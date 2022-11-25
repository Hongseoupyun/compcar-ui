import React from "react";
import "./SearchPage.scss";
import { HiOutlineMagnifyingGlass } from "react-icons/hi";
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
      <div className="searchbar--wrapper">
        <div className="container--search--tap">
          <div className="search--search">Search</div>
          <div className="search--compare">Search to compare</div>
        </div>
        <form className="container--input">
          <select className="searchbar--make">
            <option value="all">Make:All</option>
          </select>
          <select className="searchbar--model">
            <option value="all">Model:All</option>
          </select>
          <select className="searchbar--year">
            <option value="all">Year:All</option>
          </select>
          <select className="searchbar--color">
            <option value="all">Color:All</option>
          </select>
          <select className="searchbar--mileage">
            <option value="all">Mileage:All</option>
          </select>
          <button className="button--search" type="submit"></button>
        </form>
      </div>
    </section>
  );
}
