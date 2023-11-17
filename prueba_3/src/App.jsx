import { Header, Products } from "./components";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Products />
    </div>
  );
};

export default App;
