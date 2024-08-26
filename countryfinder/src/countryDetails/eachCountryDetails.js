import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EachCountryData = () => {
  const {countryName} = useParams();
  
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetchCountryDetails();

  }, []);

  const fetchCountryDetails = async () => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
    //   console.log(response.data, "response");
    //   const filtered=response.data.filter((each,index)=>index===id)
      setCountry(response.data[0]);
      console.log(response.data[0]);
   
    } catch (error) {
      console.error(" Country Details", error);
    }
  };

  if (!country) return <div>Loading...</div>;

  return (
    <div style={{ padding: "20px", display: "flex", justifyContent: "center",backgroundImage:'url("https://cdn.pixabay.com/photo/2016/12/27/17/10/pendulum-1934311_1280.jpg")'}}>
    <center>
        <div style={{paddingBottom:"20px",margin:"50px",fontWeight:"normal",display:"flex",alignContent:"center" ,justifyContent:"center",backgroundColor:"white",width:"750px",flexDirection:"column",borderRadius:"10px", fontStyle:"oblique",fontSize:"10px"}}>
        <h1>{country.name.common}</h1>
       <center> <img src={country.flags.png}  alt={country.name.official} width={"300px"} borderRadius={"100%"} /></center><br/>
        <h6>Official Name : " {country.name.official} "</h6>
        <h6>Capital :<span style={{fontWeight:"normal"}}> {country.capital}</span></h6>
        <h6>Region :<span style={{fontWeight:"normal"}}> {country.region}</span></h6>
        <h6>Signs as :<span style={{fontWeight:"normal"}}> {country.car.signs}</span></h6>
        <h6>Currencies :<span style={{fontWeight:"normal"}}> {country.currencies ? Object.values(country.currencies).map((currency, index) => <span key={index}>{currency.name}, " {currency.symbol} " </span>) : "N/A"}</span></h6>
        {/* <h6>PostalCode :<span style={{fontWeight:"normal"}}> {country.postalCode.format?(<span>{country.postalCode.format}</span>):'N/A-'}</span></h6> */}
        <h6>Borders :<span style={{fontWeight:"normal"}}> {country.borders ? country.borders.map(each => <span key={each}>{each}, </span>) : 'N/A'}</span></h6>
        <h6>Population :<span style={{fontWeight:"normal"}}> {country.population}</span></h6>
        <h6>Subregion :<span style={{fontWeight:"normal"}}> {country.subregion}</span></h6>
        <h6>Total Area :<span style={{fontWeight:"normal"}}> {country.area}</span></h6>
        <h6>Start Of Week :<span style={{fontWeight:"normal"}}> {country.startOfWeek}</span></h6>
        <h6>Time Zone :<span style={{fontWeight:"normal"}}> " {country.timezones} "</span></h6>
        <h6>AlternativeName :<span style={{fontWeight:"normal"}}> {country.altSpellings ? country.altSpellings.map(each => <span key={each}>{each}, </span>) : 'N/A'}</span></h6>
        <center><img src={country.coatOfArms.png}  alt={country.name.official} borderRadius="100px" width={"70px"}/></center>

       </div>
      </center>
    </div>
  );
};

export default EachCountryData;

