import Search from "../Search";
import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./Home.module.css";
import { FaGithub as GithubIcon } from "react-icons/fa";
import { ErrorBoundary } from "react-error-boundary";
import ErrorScreen from "../ErrorScreen/ErrorScreen";
import background from "../assets/main_background.jpg";
import { Box, Grid, Typography } from "@mui/material";
import {
  WiDaySunny,
  WiRain,
  WiCloudy,
  WiSnow,
  WiThunderstorm,
} from "react-icons/wi";

function WeatherPage({ data, dataList, handleFetchData }) {
  const [image, setImage] = useState(background);
  console.log("list,list", dataList);

  const filteredForecast = Array.isArray(dataList)
    ? dataList.reduce((acc, item) => {
        const date = new Date(item.dt * 1000).toLocaleDateString();
        if (
          !acc.some(
            (dayItem) =>
              new Date(dayItem.dt * 1000).toLocaleDateString() === date
          )
        ) {
          acc.push(item);
        }
        return acc;
      }, [])
    : [];

  const getWeatherIcon = (weatherCode) => {
    switch (weatherCode) {
      case "01d":
        return <WiDaySunny />;
      case "01n":
        return <WiDaySunny />;
      case "02d":
        return <WiCloudy />;
      case "02n":
        return <WiCloudy />;
      case "03d":
      case "03n":
        return <WiCloudy />;
      case "04d":
      case "04n":
        return <WiCloudy />;
      case "09d":
      case "09n":
        return <WiRain />;
      case "10d":
      case "10n":
        return <WiRain />;
      case "11d":
      case "11n":
        return <WiThunderstorm />;
      case "13d":
      case "13n":
        return <WiSnow />;
      default:
        return null;
    }
  };
  // Receiving image from child by lifting state up. (Search component).
  function getBackgroundImage(image) {
    setImage(image);
  }
  const NoData = (
    <div className={styles.no_data}>
      <p>No data! Enter a city name and hit enter.</p>
    </div>
  );
  const WeatherResults = (
    <div className={styles.weather_result}>
      {Object.keys(data).length > 0 ? (
        <h1 className={styles.temp}>{data.main.temp}°C</h1>
      ) : (
        ""
      )}
      <div>
        <h1 className={styles.city}>{data.name}</h1>
      </div>
    </div>
  );
  const homeStyles = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
  };
  return (
    <div className={styles.wrapper} id={styles.wrapper} style={homeStyles}>
      <div className={styles.header}>
        <a href="/">
          <header>Weather forecast</header>
        </a>
        <a href="https://github.com/1660334/weather-forecast">
          <GithubIcon className={styles.github} />
        </a>
      </div>
      {data !== "" ? WeatherResults : NoData}
      <div className={styles.weather_list_bgcolor}>
        {Object.keys(dataList).length > 0 && (
          <div className={styles.weather_list}>
            <Typography variant="h4" paragraph>
              5-Day Weather Forecast
            </Typography>
            <Grid
              container
              spacing={{ md: 2, xs: 1 }}
              justifyContent={{ xs: "center" }}
              className={styles.weather_list_item}
            >
              {filteredForecast.map((item) => (
                <Grid item xs={12} sx={6} md="auto" key={item.dt}>
                  <Box
                    key={item.dt}
                    sx={{
                      padding: 2,
                      background:
                        "linear-gradient(to top, #52cffeb8, hsla(0, 0%, 0%, 0))",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={(theme) => ({ color: theme.palette.common.white })}
                    >
                      {new Date(item.dt * 1000).toLocaleDateString()}
                    </Typography>
                    <div className={styles.icon}>
                      {getWeatherIcon(item.weather[0].icon)}
                    </div>
                    <Typography>
                      Condition: {item.weather[0].description}
                    </Typography>
                    <Typography>High: {item.main.temp_max} °C</Typography>
                    <Typography>Low: {item.main.temp_min} °C</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </div>
        )}
      </div>

      <div className={styles.search_section}>
        <ErrorBoundary FallbackComponent={ErrorScreen}>
          <Search
            data={data}
            image={getBackgroundImage}
            handleFetchData={handleFetchData}
          />
        </ErrorBoundary>
      </div>
    </div>
  );
}
WeatherPage.propTypes = {
  data: PropTypes.object,
  list: PropTypes.array,
  handleFetchData: PropTypes.func,
};

export default WeatherPage;
