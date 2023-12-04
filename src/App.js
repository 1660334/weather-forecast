import styles from "./App.module.css";
import Weather from "./containers/Weather";

function App() {
  return (
    <div className={styles.App}>
      <Weather />
    </div>
  );
}

export default App;
