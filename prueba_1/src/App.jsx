import { Search, Details } from "./components";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="title"> Vehículos. </h1>
      <Search />
      <main className="content">
        <Details />
      </main>
    </div>
  );
}
