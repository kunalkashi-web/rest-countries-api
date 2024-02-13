import { uiActions } from "../store/ui-Slice.jsx";
import { useDispatch, useSelector } from "react-redux";

let currentRegion = "";
let baseUrl = "";

export default function RegionSelect() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.ui.theme);

  const getCountryByRegion = async (event) => {
    event.preventDefault;
    currentRegion = event.target.value;

    if (currentRegion === "all") {
      baseUrl = "https://restcountries.com/v3.1/all";
    } else {
      baseUrl = "https://restcountries.com/v3.1/region/".concat(currentRegion);
    }

    try {
      const response = await fetch(baseUrl);
      if (!response.ok) {
        throw new Error("Fetching data failed");
      }
      const Data = await response.json();
      dispatch(uiActions.replaceCountry({ countries: Data || [] }));
    } catch (error) {
      console.log("Fetching data failed");
    }
  };

  return (
    <section className="select-container">
    <select
      onChange={getCountryByRegion}
      className={state ? "dark-mode-select" : "region-select"}
      name="region"
      id="region-select"
    >
      <option value="">Filter by Region </option>
      <option value="all">All Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
    </section>
  );
}
