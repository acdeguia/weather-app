import "../src/style.css";
import weather from "./modules/api";
import search from "./modules/search";


const searchForm = document.querySelector('#search-form');
const searchBtn = document.querySelector('#search-btn')
const locationInput = document.querySelector('#location-input')

  searchForm.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent the form from submitting normally
  });

  searchBtn.addEventListener("click", async () => {
    if (locationInput.value === "") return;
    const weatherData = await weather.getWeatherData(locationInput.value);
    // search.setSearchResult(weatherData);
  });
