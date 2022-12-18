import React from "react";

export default function ShowOptions(props) {
  const {
    categories,
    makers,
    modelsByMaker1,
    modelsByMaker2,
    colorsByModels1,
    colorsByModels2,
    yearsByModels1,
    yearsByModels2

  } = props;

  if (categories === "maker1") {
    return makers.map((maker) => {
      return (
        <option key={maker} value={maker}>
          Maker:{maker}
        </option>
      );
    });
  }
  if (categories === "maker2") {
    return makers.map((maker) => {
      return (
        <option key={maker} value={maker}>
          Maker:{maker}
        </option>
      );
    });
  }
  if (categories === "model1") {
    return modelsByMaker1.map((model) => {
      return (
        <option key={model} value={model}>
          Model:{model}
        </option>
      );
    });
  }
  if (categories === "model2") {
    return modelsByMaker2.map((model) => {
      return (
        <option key={model} value={model}>
          Model:{model}
        </option>
      );
    });
  }
  if (categories === "color1") {
    return colorsByModels1.map((color) => {
      return (
        <option key={color} value={color}>
          Color:{color}
        </option>
      );
    });
  }
  if (categories === "color2") {
    return colorsByModels2.map((color) => {
      return (
        <option key={color} value={color}>
          Color:{color}
        </option>
      );
    });
  }
  if (categories === "year1") {
    return yearsByModels1.map((year) => {
      return (
        <option key={year} value={year}>
          Year:{year}
        </option>
      );
    });
  }
  if (categories === "year2") {
    return yearsByModels2.map((year) => {
      return (
        <option key={year} value={year}>
          Year:{year}
        </option>
      );
    });
  }
}