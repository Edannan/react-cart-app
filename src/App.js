import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import "./index.css";
import { Fragment } from "react";

function App() {
  const closehandleCart = () => {};
  return (
    <Fragment>
      <Cart closeCart={closehandleCart} />
      <Header />
      <Meals />
    </Fragment>
  );
}

export default App;
