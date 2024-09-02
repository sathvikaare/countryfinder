import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchCountry from './countrysearch';
import EachCountryData from './eachCountryDetails';
import WhetherApp from './WhetherApp';
import About from './about';
import CurrencyConverter from './currencyconverter';


const CountrieStack= () => {
  return (
    <div>
       <BrowserRouter>
        <Routes>
        
            <Route path='/' element={<SearchCountry/>}></Route>
            <Route path='/country/:countryName' element={<EachCountryData/>}></Route>
            <Route path='/currency' element={<CurrencyConverter/>}></Route>
            <Route path='/whether' element={<WhetherApp/>}></Route>
            
            <Route path="/about" element={<About/>}></Route>
           <Route/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
export default CountrieStack;