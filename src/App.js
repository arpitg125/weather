import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./components/CityComponent";
import WeatherComponent from "./components/WeatherComponent";

export const WeatherIcons = {"01d": "/Icons/day.svg",
  "01n": "/Icons/night.svg",
  "02d": "/Icons/cloudy-day-1.svg",
  "02n": "/Icons/cloudy-night-1.svg",
  "03d": "/Icons/cloudy.svg",
  "03n": "/Icons/cloudy-night.svg",
  "04d": "/Icons/day.svg",
  "04n": "/Icons/cloudy-night.svg",
  "09d": "/Icons/rainy-1.svg",
  "09n": "/Icons/rainy-6.svg",
  "10d": "/Icons/rain-3.svg",
  "10n": "/Icons/rain-7.svg",
  "11d": "/Icons/thunder.svg",
  "11n": "/Icons/thunder.svg",
};

const Container = styled.div`
  display: flex;
  padding-top:30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin-top:10em;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: gray;
  margin: 23px auto;
  font-size: 17px;
  font-weight: bold;
`;
const CloseButton = styled.span`
  padding: 2px 3px;
  background-color: black;
  border-radius: 50%;
  color: white;
  position: absolute;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8baca508a4f6b6592babe4a47e071fa8`,
    );
    updateWeather(response.data);
  };
  return (
    <Container>
      <AppLabel> Weather Data App</AppLabel>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;