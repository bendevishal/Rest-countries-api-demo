export default function CountryCard({ country }) {

  if(!country) return null;

  return(

    <div className="card mt-3 p-3">

      <img
        src={country.flags.png}
        alt="flag"
        width="150"
      />

      <h3>{country.name.common}</h3>

      <p><b>Capital:</b> {country.capital?.[0]}</p>

      <p><b>Region:</b> {country.region}</p>

      <p><b>Population:</b> {country.population}</p>

      <p>
        <b>Currency:</b> {Object.values(country.currencies || {})[0]?.name}
      </p>

      <p>
        <b>Languages:</b> {Object.values(country.languages || {}).join(", ")}
      </p>

    </div>

  );
}