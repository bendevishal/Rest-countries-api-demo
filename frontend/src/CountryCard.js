export default function CountryCard({ country }) {

  if (!country) return null;

  return (

    <div className="country-card card shadow-lg mt-4 p-4">

      <div className="row align-items-center">

        <div className="col-md-4 text-center">
          <img
            src={country.flags.png}
            alt="flag"
            className="country-flag img-fluid"
          />
        </div>

        <div className="col-md-8">

          <h3 className="country-title">{country.name.common}</h3>

          <p><b>Capital:</b> {country.capital?.[0]}</p>

          <p><b>Region:</b> {country.region}</p>

          <p><b>Population:</b> {country.population.toLocaleString()}</p>

          <p>
            <b>Currency:</b> {Object.values(country.currencies || {})[0]?.name}
          </p>

          <p>
            <b>Languages:</b> {Object.values(country.languages || {}).join(", ")}
          </p>

        </div>

      </div>

    </div>

  );
}