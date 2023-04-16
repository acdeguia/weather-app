const search = function () {
  function searchLocation(weatherData) {
    if (!weatherData) return;

    const searchLocation = document.getElementById("search-location");
    searchLocation.classList.add("active");

    const cityLocation = document.getElementById("location");
    const temp = document.getElementById("temp");
    const humidity = document.getElementById("humidity");
    const wind = document.getElementById("wind");

    location.textContent = `${weatherData.cityLocation}`;
    temp.textContent = `${weatherData.temp} °C`;
    humidity.textContent = `Humidity: ${weatherData.humidity} %`;
    wind.textContent = `Wind: ${weatherData.windSpeed} km/h`;
  }
  return { searchLocation }
};

export default search;
