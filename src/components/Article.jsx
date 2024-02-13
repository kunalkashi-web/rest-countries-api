import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Article({ flags, name, population, region, capital }) {
  const state = useSelector((state) => state.ui.theme);

  
  return (
    <>
      <Link to={`/${name.common}`} className="link-info">
        <div className={state ? "country-card-dark" : "country-card"}>
          <div>
            <img src={flags.svg} alt="flag image" className="flag-img" />
          </div>

          <div className="country-discription">
            <h2>{name.common}</h2>
            <ul>
              <li>Population: {population}</li>
              <li>Region: {region}</li>
              <li>Capital: {capital}</li>
            </ul>
          </div>
        </div>
      </Link>
    </>
  );
}
