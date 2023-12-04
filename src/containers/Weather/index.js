import React from "react";
import { connect } from "react-redux";
import { weatherData, forecastData } from "./actions";
import WeatherPage from "../../components/WeatherPage";

const Weather = ({
  data,
  loading,
  error,
  dataList,
  weatherData,
  forecastData,
}) => {
  const handleFetchData = (city) => {
    weatherData(city);
    forecastData(city);
  };

  return (
    <div>
      <WeatherPage
        data={data}
        dataList={dataList}
        handleFetchData={handleFetchData}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
  loading: state.loading,
  error: state.error,
  dataList: state.dataList,
});

const mapDispatchToProps = {
  weatherData,
  forecastData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
