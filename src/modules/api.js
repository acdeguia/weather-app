const weather = function () {

    function filterData(data) {
        const filteredData = data.map(item => ({
          city: locationData.location.name,
          condition: locationData.current.condition.text,
          temp: locationData.current.feelslike_c,
          humidity: locationData.current.humidity,
        }));
        return filteredData;
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
    // return {dataObject}
};

export default weather;
