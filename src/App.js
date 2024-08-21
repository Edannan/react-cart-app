import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import "./index.css";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header />
      <Meals />
    </Fragment>
  );
}

export default App;
