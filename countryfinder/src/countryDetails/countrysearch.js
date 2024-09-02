import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './countrySearch.css';

import CountriesNavBar from './navbarCountries';
import { NavLink } from 'react-router-dom';

const SearchCountry = () => {
  const [countryDetails, setCountryDetails] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 15;

  const fetchData = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      setCountryDetails(response.data);
    } catch (error) {
      console.error('Something went wrong');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const inputHandler = (e) => {
    setSearchValue(e.target.value);
    setCurrentPage(1); // Reset to the first page when the search value changes
  };

  const filteredUsersBySearch = countryDetails.filter((user) =>
    user.name.common.toLowerCase().includes(searchValue.toLowerCase())
  );

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = filteredUsersBySearch.slice(indexOfFirstCountry, indexOfLastCountry);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredUsersBySearch.length / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="background-container" >
      <div className="content-container"style={{backgroundColor:"black"}}>
        <CountriesNavBar />
        <br />
        <center>
          <input
            type="text"
            placeholder=" Enter Country Name"
            value={searchValue}
            onChange={inputHandler}
            style={{ width: '350px', border: 'none', borderRadius: '8px', height: '30px' }}
          />
        </center>
        <br />
        <br />
        <center>
          <div className="main">
            {currentCountries.map((each, index) => (
              <Card style={{ width: '16rem', border: 'none',height:"22rem" }} className="card" key={index}>
                <Card.Img variant="top" style={{height:"120px"}} src={each.flags.png} />
                <Card.Body>
                  <Card.Title>{each.name.common}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    <h6>Capital: {each.capital}</h6>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h6>Region: {each.region}</h6>
                  </ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <NavLink to={`/country/${each.name.common}`}>
                    <button style={{ backgroundColor: 'grey', border: 'none', width: '100px', height: '40px', borderRadius: '5px' }}>
                      View more
                    </button>
                  </NavLink>
                </Card.Body>
              </Card>
            ))}
          </div>
          <div className="pagination">
            {pageNumbers.map((number) => (
              <button key={number} onClick={() => paginate(number)} className="page-link">
                {number}
              </button>
            ))}
          </div>
        </center>
      </div>
    </div>
  );
};

export default SearchCountry;
