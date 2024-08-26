
import React from 'react';
import './About.css';
import { Navbar } from 'react-bootstrap';
import CountriesNavBar from './navbarCountries';

const About = () => {

    return (
        <div>
        <CountriesNavBar/>
        <div className='main2'>
        <div className="about-container">
            <h1 className="about-title">About Counties Search App</h1>
            <p className="about-description">
                <span style={{fontWeight:"bold"}}>Description :</span>The Counties Search App is a user-friendly platform designed to provide comprehensive information about counties across various regions. Whether you're looking to learn more about the demographics, geography, or key statistics of a specific county, our app offers a seamless and intuitive search experience.
            </p>
            <p className="about-description">
            <span style={{fontWeight:"bold"}}>Objective :</span>Our mission is to make county information accessible and easy to find for researchers, students, and anyone interested in learning more about different areas. With real-time data updates and a sleek interface, the Counties Search App is your go-to resource for county-related information.
            </p>
            <p className="about-description">
                We are committed to continuously improving our app by adding new features and updating our database to ensure the most accurate and relevant information is available to our users.<br/>
            </p>
        </div>
        </div>
        </div>
    );
}

export default About;