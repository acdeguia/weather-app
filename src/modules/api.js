const weather = (function () {
  async function getWeatherData(city) {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=efc019cca96741a3aee74048231004&q=${city}}`
      );
      const data = await response.json();
      console.log(data)
      const processedData = processWeatherData(data);
      //console.log(processedData); // log the processed weather data to the console
      return processedData
    } catch (error) {
      alert("location not found")
    }
  }

  function processWeatherData(data) {
    const processedData = {
      city: data.location.name,
      condition: data.current.condition.text,
      temp: data.current.feelslike_c,
      feelsLike: data.current.feelslike_c,
      humidity: data.current.humidity,
      wind: data.current.wind_kph,
      chanceOfRain: data.current.precip_in,
      icon: data.current.condition.icon,
    };
    return processedData;
  }

  return { getWeatherData };
})();

export default weather;
