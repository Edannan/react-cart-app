import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import "./index.css";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "./store/uiSlice";
import { useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.ui.showModal)

  const closehandleCart = () => {
    dispatch(uiActions.toggleModal())
  };

  return (
    <Fragment>
      { showModal && <Cart closeCart={closehandleCart} />}
      <Header />
      <Meals />
    </Fragment>
  );
}

export default App;
