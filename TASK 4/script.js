var restCountryRequest = new XMLHttpRequest();
restCountryRequest.open("GET", "https://restcountries.eu/rest/v2/all", true);
let total,poparr=[];
restCountryRequest.send();
restCountryRequest.onload = function()
{
    let restCountryData =JSON.parse(this.response);
    
    //<--Countries in Asia Region-->
    let regionData=restCountryData.filter((asiaRegion)=>{
       return asiaRegion.region==='Asia'
   });
   console.log('Asian Countries:',regionData);
    //<--Countries in Asia Region-->

    //<--Countries with population less than 2 Lakhs-->
    let populationData=restCountryData.filter((lesspopulation)=>{
        return lesspopulation.population<=200000
    });
    console.log('Population Less than 2Lakh Countries:',populationData);
    //<--Countries with population less than 2 Lakhs-->
    
    //<--CountryName,Capital and Flag-->
    restCountryData.forEach(country => {
        console.log("Name: "+country.name+"Capital: "+country.capital+"Flag: "+country.flag);
    });
    //<--CountryName,Capital and Flag-->

    //<--Total Population of All Countries-->
    let totalPopulation=restCountryData.reduce((total,country)=>{
            return total+country.population
    },0);
    console.log("Total Population"+totalPopulation);
    //<--Total Population of All Countries-->

    //<--Countries with Currency symbol as '$'-->
   restCountryData.forEach(country=>{
       if(country.currencies[0].symbol=='$')
        console.log('US Dollar Currency Countries:',country.name);
    });
    //<--Countries with Currency symbol as '$'-->
    
}
