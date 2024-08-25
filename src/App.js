import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "./store/cartSlice";
import { useSelector } from "react-redux";
import Footer from "./components/Footer/Footer";

function App() {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.ui.showModal);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("cart"));
    dispatch(cartActions.replaceCart(localStorageData));
  }, [dispatch]);

  return (
    <Fragment>
      <ToastContainer />
      {showModal && <Cart />}
      <Header />
      <Meals />
      <Footer />
    </Fragment>
  );
}

export default App;
