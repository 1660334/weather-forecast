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
      .then((response) => {
        console.log(response);
        dispatch(fetchDataSuccess(response.data));
      })
      .catch((error) => dispatch(fetchDataError(error)));
  };
};

//forecast Data
export const forecastDataRequest = () => ({
  type: "FORECAST_DATA_REQUEST",
});

export const forecastDataSuccess = (data) => ({
  type: "FORECAST_DATA_SUCCESS",
  payload: data,
});

export const forecastDataError = (error) => ({
  type: "FORECAST_DATA_ERROR",
  payload: error,
});

export const forecastData = (city) => {
  const apiKey = "b52b09bae37659dd9fec469ad92374fa"; // Replace with your OpenWeatherMap API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

  return (dispatch) => {
    dispatch(forecastDataRequest());
    axios
      .get(apiUrl)
      .then((response) => {
        console.log("aaaaaa", response.data.list);
        dispatch(forecastDataSuccess(response.data.list));
      })
      .catch((error) => dispatch(forecastData(error)));
  };
};
