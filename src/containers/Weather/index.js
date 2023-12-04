import React from "react";
import { connect } from "react-redux";
import { weatherData } from "./actions";
import WeatherPage from "../../components/WeatherPage";

const Weather = ({ data, loading, error, weatherData }) => {
  const handleFetchData = (city) => {
    weatherData(city);
  };

  return (
    <div>
      <WeatherPage data={data} handleFetchData={handleFetchData} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = {
  weatherData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
