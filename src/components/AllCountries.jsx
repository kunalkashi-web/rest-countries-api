import { useSelector } from "react-redux";
import Article from "./Article";

export default function AllCountries() {
  const countries = useSelector((state) => state.ui.countries);
  const isLoading = useSelector((state) => state.ui.loading);
  const error = useSelector((state) => state.ui.error);
  
  return (
    <>
      <section className="country-section">
       {isLoading &&<h4>Loading...</h4>}
       {error && <h4>Fetching data failed...</h4>} 
       {countries.map((country) => (
          <Article key={country.name.common} {...country} />
        ))}
      </section>
    </>
  );
}
