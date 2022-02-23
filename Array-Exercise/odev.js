import data from "./data.js";
import { createTableElements } from "./main.js";

/*
  ALWAYS USE IMPORTED data ARRAY TO MAKE MANIPULATIONS

  ID for allcities table is #allcities
  ID for singlecity table is #singlecity
/*

/*
* PASS ARRAY TO createTableElements function to fill tables
* first argument - data
* second argument - tableId
* Example createTableElements([{name: "Istanbul"}], "allcities");
*/

/*
    ids for buttons and select

    Population - bigger than 500.000 => #populationBigger
    land area - less than 1000 => #landAreaLess
    Does any city has population less than 100.000? => #isPopulationLess
    Does every city has land area bigger than 100? => #isLandBigger
    city select => #selectcity
*/

/* RESET ACTION */
document.querySelector("#reset").addEventListener("click", () => {
  createTableElements(data, "allcities");
  createTableElements([], "singlecity");
});

/* START CODING HERE */

document.querySelector("#populationBigger").addEventListener("click", () => {
  let popResultb = data.filter((city) => city.population > 500000);
  createTableElements(popResultb, "allcities");
});

document.querySelector("#landAreaLess").addEventListener("click", () => {
  let landAreaResult = data.filter((city) => city.population < 1000);
  createTableElements(landAreaResult, "allcities");
});

document.querySelector("#isPopulationLess").addEventListener("click", () => {
  let lessPop = data.some((less) => less.population < 100000);
  if (lessPop) {
    alert("1");
  } else {
    alert("0");
  }
});

document.querySelector("#isLandBigger").addEventListener("click", () => {
  let biggerLand = data.every((city) => city.landArea > 100);
  if (biggerLand) {
    alert("yep");
  } else {
    alert("no");
  }
});

let cityName = data.map((cityName) => cityName.name);
let selectCity = document.querySelector(".custom-select");
cityName.forEach((element) => {
  let createCity = document.createElement("option");
  createCity.setAttribute("value", element);
  createCity.textContent = element;
  selectCity.appendChild(createCity);
});

selectCity.addEventListener("change", (e) => {
  let selectCities = data.filter((cities) => e.target.value === cities.name);
  createTableElements(selectCities, "singlecity");
});

/* other alternative */
/* const selectHTML = data.reduce((acc, city) => {
  return acc + `<option value=${city.name}>${city.name} </option>`;
}, ""); */
