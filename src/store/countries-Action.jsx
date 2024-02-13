import { uiActions } from "./ui-Slice.jsx";

export const fetchCountriesData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (!response.ok) {
        throw new Error("Fetching data failed");
      }
      const Data = await response.json();

      return Data;
    };
    try {
      const countriesData = await fetchData();
      dispatch(uiActions.replaceCountry({ countries: countriesData || [] }));
    } catch (error) {
      console.log("Fetching data failed");
    }
  };
};

