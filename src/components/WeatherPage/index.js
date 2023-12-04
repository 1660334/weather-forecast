import Search from "../Search";
import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./Home.module.css";
import { FaGithub as GithubIcon } from "react-icons/fa";
import { ErrorBoundary } from "react-error-boundary";
import ErrorScreen from "../ErrorScreen/ErrorScreen";
import background from "../assets/main_background.jpg";

function WeatherPage({ data, handleFetchData }) {
  const [image, setImage] = useState(background);

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
      {data === "" ? NoData : WeatherResults}
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
  city: PropTypes.string,
  setCity: PropTypes.func,
  handleFetchData: PropTypes.func,
};

export default WeatherPage;
