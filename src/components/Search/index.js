import React, { useState } from "react";
import styles from "./Search.module.css";
import { FaChevronCircleDown as DownArrow } from "react-icons/fa";
// import background from "../assets/main_background.jpg";
import { FaGithub as GithubIcon } from "react-icons/fa";
import { PropTypes } from "prop-types";

function Search({ data, handleFetchData }) {
  console.log("data", data);
  const [city, setCity] = useState("");

  const availableCities = ["Hanoi", "Ho Chi Minh", "Da lat", "Vung tau"];

  // To dynamically change the app background.
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Gọi hàm bạn muốn thực hiện khi nhấn Enter ở đây
      console.log("Enter key pressed. Running your function...");
      // Ví dụ: Gọi hàm xử lý với giá trị của ô input
      handleFetchData(city);
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.mob_styles}>
        <div className={styles.mob_header}>
          <a href="/">
            <h1>Weatherify</h1>
          </a>
          <a href="https://github.com/zxcodes/weatherify-web">
            <GithubIcon className={styles.github} />
          </a>
        </div>
        <div className={styles.mob_result}>
          {Object.keys(data).length > 0 ? (
            <>
              <h1 className={styles.temp}>{data.main.temp}°C</h1>
              <h1 className={styles.city_name}>{data.name}</h1>
            </>
          ) : (
            <p className={styles.no_data}>
              No data! Enter a city and hit enter.
            </p>
          )}
        </div>
      </div>
      <input
        type="text"
        placeholder="Enter a city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyPress}
        autoFocus
        required
      />
      <div className={styles.cities_holder}>
        <h3>Available Cities</h3>
        <DownArrow className={styles.down_arrow} />
      </div>
      {availableCities.map((city, index) => (
        <p
          key={index}
          onClick={() => {
            setCity(city);
            handleFetchData(city);
          }}
        >
          {city}
        </p>
      ))}
      <div className={styles.weather_detail}>
        {Object.keys(data).length > 0 ? (
          <>
            <h3>{data.name} data Brief</h3>
            <p>Feels like: {data.main.feels_like}</p>
            <p>Humidity: {data.main.humidity}</p>
            <p>Pressure: {data.main.pressure}</p>
          </>
        ) : (
          <p>No data available!</p>
        )}
      </div>
    </div>
  );
}

Search.propTypes = {
  data: PropTypes.object,
  city: PropTypes.string,
  setCity: PropTypes.func,
  handleFetchData: PropTypes.func,
};
export default Search;
