const render = function () {
  function renderWeatherData(weatherData) {

    if (!weatherData) return;

    const city = document.getElementById("location");
    const temp = document.getElementById("temp");
    const feelsLike = document.getElementById("feels-like");
    const humidity = document.getElementById("humidity");
    const wind = document.getElementById("wind");
    const chanceOfRain = document.getElementById("chance-of-rain")
    const condition = document.getElementById("condition")


    city.textContent = weatherData.city;
    temp.textContent = `${weatherData.temp} °C`;
    feelsLike.textContent = `${weatherData.feelsLike} °C`;
    humidity.textContent = `${weatherData.humidity} %`;
    wind.textContent = `${weatherData.wind} km/h`;
    chanceOfRain.textContent = `${weatherData.chanceOfRain} %`;
    condition.textContent = `${weatherData.condition}`
  }

  return { renderWeatherData };
}();

export default render;
