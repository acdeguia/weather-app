import "../src/style.css";
import weather from "./modules/api";
import render from "./modules/render";

const searchForm = document.querySelector("#search-form");
const searchBtn = document.querySelector("#search-btn");
const locationInput = document.querySelector("#location-input");

window.addEventListener("load", async (event) => {
  if (locationInput.value === "") {
    const weatherData = await weather.getWeatherData("Manila");
    render.renderWeatherData(weatherData);
  }
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent the form from submitting normally
});

searchBtn.addEventListener("click", async () => {
  if (locationInput.value === "") {
    const weatherData = await weather.getWeatherData("Manila");
    render.renderWeatherData(weatherData);
  } else {
    const weatherData = await weather.getWeatherData(locationInput.value);
    console.log(weatherData);
    render.renderWeatherData(weatherData);
  }
});
