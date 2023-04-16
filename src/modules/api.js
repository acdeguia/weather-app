const weather = function () {
    function dataObject(data) {
      const {
        name: cityLocation,
        main: { temp: temp, humidity: humidity },
        wind: { speed: windSpeed },
      } = data;
      return { cityLocation, temp, humidity, windSpeed };
    }

  async function fetchLocationData(cityLocation) {
    try {
    //   const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=efc019cca96741a3aee74048231004&q=${cityLocation}`,{ mode: "cors" });
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=efc019cca96741a3aee74048231004&q=manila}`,{ mode: "cors" });
      const locationData = await response.json();
      console.log(locationData);

    } catch (error) {
      console.log(error);
    }
  }

  fetchLocationData()
    return {dataObject}
};

export default weather;
