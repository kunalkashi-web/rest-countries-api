import { uiActions } from "./ui-Slice.jsx";

export const fetchCountriesData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("https://restcountries.com/v2/all");
      if (!response.ok) {
        dispatch(uiActions.errorStatus());
      }
      const Data = await response.json();
      dispatch(uiActions.dataStatus());
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
