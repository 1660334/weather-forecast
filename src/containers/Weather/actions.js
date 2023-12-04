// src/actions.js

import axios from "axios";
export const fetchDataRequest = () => ({
  type: "FETCH_DATA_REQUEST",
});

export const fetchDataSuccess = (data) => ({
  type: "FETCH_DATA_SUCCESS",
  payload: data,
});

export const fetchDataError = (error) => ({
  type: "FETCH_DATA_ERROR",
  payload: error,
});

export const weatherData = (city) => {
  const apiKey = "b52b09bae37659dd9fec469ad92374fa"; // Replace with your OpenWeatherMap API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  return (dispatch) => {
    dispatch(fetchDataRequest());
    axios
      .get(apiUrl)
      .then((response) => dispatch(fetchDataSuccess(response.data)))
      .catch((error) => dispatch(fetchDataError(error)));
  };
};
