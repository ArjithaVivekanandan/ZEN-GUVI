var restCountryRequest = new XMLHttpRequest();
restCountryRequest.open("GET", "https://restcountries.eu/rest/v2/all", true);
restCountryRequest.send();
restCountryRequest.onload = function()
{
    let restCountryData =JSON.parse(this.response);
    for(let countryData in restCountryData)
    {
    let latitude=restCountryData[countryData].latlng[0];
    let longitude=restCountryData[countryData].latlng[1];
    weather(restCountryData[countryData].name,latitude,longitude);
    }
}
function weather(name,latitude,longitude)
{
    var weatherRequest = new XMLHttpRequest();
    weatherRequest.open("GET", `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=ef5fc92fdb2dbc2f9878ff9305462665` ,true);
    weatherRequest.send();

    weatherRequest.onload = function()
    {
    let weatherData=JSON.parse(weatherRequest.response);
        console.log(name,weatherData.main.temp);
    }
}
