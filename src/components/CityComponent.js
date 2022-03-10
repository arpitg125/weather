import styled from "styled-components";
import React from "react";

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
  border: black solid 1px;
  border-radius: 2px;
  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-family: Montserrat;
    font-weight: bold;
  }
  & button {
    background-color: black;
    font-size: 14px;
    padding: 0 10px;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    font-family: Montserrat;
    font-weight: bold;
  }
`;
const ChooseCityLabel = styled.span`
  color: green;
  margin: 22px auto;
  font-size: 20px;
  font-weight: bold;
`;
const WelcomeWeatherLogo = styled.img`
  width: 120px;
  height: 120px;
  margin: 10px auto;
`;
const CityComponent = (props) => {
  const { updateCity, fetchWeather } = props;
  return (
    <>
      <WelcomeWeatherLogo src={"/Icons/day.svg"} />
      <ChooseCityLabel> Weather Search</ChooseCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <input
          onChange={(e) => updateCity(e.target.value)}
          placeholder="City"
        />
        <button type={"submit"}>Search</button>
      </SearchBox>
    </>
  );
};
export default CityComponent;