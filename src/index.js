import "../src/style.css";
import weather from "./modules/api";
// import search from "./modules/search";

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-location");
const searchBtn = document.getElementById("search-btn");

// searchForm.addEventListener("submit", (e) => {
//   e.preventDefault();
// });

// searchBtn.addEventListener("click", async () => {
//   if (searchInput.value === "") return;
//   const weatherData = await weather.getData(searchInput.value);
//   search.setSearchResult(weatherData);
//   console.log(searchInput.value)
// });

weather()