import React, { useState } from "react";
import styles from "./Search.module.css";
import { FaChevronCircleDown as DownArrow } from "react-icons/fa";
// import background from "../assets/main_background.jpg";
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
      <div className={styles.cities_holder_item}>
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
      </div>
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
  handleFetchData: PropTypes.func,
};
export default Search;
