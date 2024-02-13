import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import AllCountries from "./components/AllCountries.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountriesData } from "./store/countries-Action.jsx";
export default function App() {
  const state = useSelector((state) => state.ui.theme);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountriesData());
  }, [dispatch]);

  return (
    <>
      <div className={state ? "dark-mode-bg" : ""}>
        <Header />
        <UserInput />
        <AllCountries />
      </div>
    </>
  );
}
