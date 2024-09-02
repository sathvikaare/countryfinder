import  { useState } from "react"
import "./whether.css"
import CountriesNavBar from "../countryDetails/navbarCountries";

function WhetherApp() {
    const apiKey='30d4741c779ba94c470ca1f63045390a';
    const [weatherData,setWeatherData]=useState([{}]);
    const [city,setCity]=useState("")
    const getWether=(event)=>{
        if(event.key === "Enter"){
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`).then(
            response=>response.json()).then(data=>{
                setWeatherData(data)
                console.log(data);
                setCity("")
            })}}
  return (
    <div style={{ 
        position: 'fixed',
        width: '100%',
        height: '100%',
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        backgroundImage:'url("https://img.freepik.com/free-photo/beautiful-cloudscape_23-2151604646.jpg?size=626&ext=jpg&ga=GA1.1.1906342731.1707989659&semt=ais_hybrid")'}}>
        <CountriesNavBar/>

    <div className="container">
        
        <input 
        className="input" 
        placeholder="Enter City...."
        onChange={e=>setCity(e.target.value)}
        value={city}
        // onKeyPress={getWeather}
        onKeyPress={getWether}
        />
        {typeof weatherData.main === "undefined" ? (
            <div>
                <p style={{margin:"40px"}}>Welcome to Weather App! Enter the name of  city to get the weather....</p>
            </div>
        ):(
            <div className="weather-data">
                <p className="city">{weatherData.name}, {weatherData.sys.country}</p>
                <p className="temp">{Math.round(weatherData.main.temp)}F</p>
                <p className="weather">{weatherData.weather[0].main}</p>
            </div>
        )}
        {
            weatherData.cod ==="404" ? (<h2 className="error">City not found..</h2>):(<></>)
        }

    </div>
    </div>
  );
}

export default WhetherApp;