import { useSelector } from "react-redux";
import Article from "./Article";

export default function AllCountries() {
  const countries = useSelector((state) => state.ui.countries);
  return (
    <>
      <section className="country-section">
        {countries.map((country) => (
          <Article key={country.name.common} {...country} />
        ))}
      </section>
    </>
  );
}
