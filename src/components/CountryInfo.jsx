import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header";
import backArrowblack from "../assets/arrow-left-solid (1).svg";
import backArrowWhite from "../assets/arrow-left-solid.svg";

let baseUrl = "https://restcountries.com/v3.1/name/";

export default function CountryInfo() {
  const state = useSelector((state) => state.ui.theme);
  const [country, setCountry] = useState([]);

  const { name } = useParams();

  useEffect(() => {
    const getCountryInfo = async () => {
      try {
        const response = await fetch(baseUrl.concat(name));
        if (!response.ok) {
          throw new Error("Fetching data failed");
        }
        const data = await response.json();
        console.log(data);
        setCountry(data);
      } catch (error) {
        console.error("Fetching data failed:", error);
      }
    };

    getCountryInfo();
  }, [name]);
  return (
    <>
      <div className={state ? "dark-mode-bg" : ""}>
        <Header />
        <section className="countryinfo-section">
          <Link to={"/"} className="link-info">
            <div className={state ? "back-btn-dark" : "back-btn-container"}>
              <img
                className="back-icon"
                src={state ? backArrowblack : backArrowWhite}
                alt="back-arrow"
              />

              <button className={state ? "dark-mode-btn" : "back-btn"}>
                Back
              </button>
            </div>
          </Link>

          {country.map((item) => (
            <div key={item.population} className="country-info-container">
              <div>
                <img
                  src={item.flags.svg}
                  alt="flag image"
                  className="flag-img-info"
                />
              </div>

              <div className="country-info-box">
                <h2>{name}</h2>

                <div className="country-info">
                  <ul>
                    <li>
                      <span>Native Name </span>:{item.name.official}{" "}
                    </li>
                    <li>
                      <span>Population</span>: {item.population}
                    </li>
                    <li>
                      <span>Region</span>: {item.region}
                    </li>
                    <li>
                      <span>Sub Region</span>: {item.subregion}
                    </li>
                    <li>
                      <span>Capital</span>: {item.capital}
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <span>Top Level Domain</span>: {item.tld.join(",")}
                    </li>
                    <li>
                      <span>Currencies</span>:{" "}
                      {Object.values(item.currencies).map(
                        (currency) => currency.name
                      )}
                    </li>
                    <li>
                      <span>Languages</span>:{" "}
                      {Object.values(item.languages).join(",")}
                    </li>
                  </ul>
                </div>

                {item.borders && (
                  <>
                    <div className="border-container">
                      <h3>Border Countries:</h3>
                      <ul className="border-box-container">
                        {item.borders.map((border, index) => (
                          <li
                            key={index}
                            className={state ? "border-box-dark" : "border-box"}
                          >
                            {border}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
