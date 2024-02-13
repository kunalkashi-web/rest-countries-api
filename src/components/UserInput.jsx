import { useDispatch, useSelector } from "react-redux";
import RegionSelect from "../components/RegionSelect";
import { uiActions } from "../store/ui-Slice.jsx";
import lightSearchIcon from "../assets/magnifying-glass-solid.svg"
import darkSearchIcon from "../assets/magnifying-glass-solid (1).svg"

let currentName = "";
let baseUrl = "https://restcountries.com/v3.1/name/";

export default function UserInput() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.ui.theme);

  const getCountryByName = async (event) => {
    event.preventDefault();
    currentName = event.target.value;

    try {
      const response = await fetch(baseUrl.concat(currentName));
      if (!response.ok) {
        throw new Error("Fetching data failed");
      }
      const Data = await response.json();
      
      dispatch(uiActions.replaceCountry({ countries: Data || [] }));
    } catch (error) {
      console.log("Fetching data failed");
    }
    
  };
  const getCountryByName2 = (event) => {
    event.preventDefault();
 
  };
  return (
    <section className="search-section">
      <div className="country-search-box">
        <form onSubmit={getCountryByName2} className={state ? "dark-input-bg" : ""}>
          <div>
            <img
              className="search-icon"
              src={state ? darkSearchIcon:lightSearchIcon}
              alt=""
            />
          </div>

          <input
            onChange={getCountryByName}
            
            type="text"
            name="name"
            placeholder="Search for a country..."
            className={state ? "dark-input-bg" : ""}
          />
        </form>
       
          <RegionSelect />
        
      </div>
    </section>
  );
}
