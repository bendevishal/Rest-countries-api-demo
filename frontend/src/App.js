import { useState } from "react";
import api from "./api";
import SearchCountry from "./SearchCountry";
import CountryCard from "./CountryCard";
import "bootstrap/dist/css/bootstrap.min.css";

function App(){

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(null);
  const [error, setError] = useState("");

  const loadCountry = async (name) => {

    if(!name){
      setCountries([]);
      return;
    }

    try{

      const res = await api.get(`name/${name}`);

      setCountries(res.data);
      setError("");

    }
    catch(err){

      console.error(err);

      setError("❌ Country not found");

      setCountries([]);

    }

  };

  const selectCountry = (c) => {

    setCountry(c);

  };

  return(

    <div className="container mt-4">

      <h2>🌍 Country Search</h2>

      <SearchCountry onSearch={loadCountry}/>

      {error && (
        <div className="alert alert-danger">{error}</div>
      )}

      {countries.length > 0 && (

        <table className="table table-bordered mt-3">

          <thead>

            <tr>
              <th>Flag</th>
              <th>Name</th>
              <th>Capital</th>
              <th>Region</th>
              <th>Population</th>
            </tr>

          </thead>

          <tbody>

            {countries.map(c => (

              <tr
                key={c.cca3}
                onClick={() => selectCountry(c)}
                style={{cursor:"pointer"}}
              >

                <td>
                  <img src={c.flags.png} width="40" alt="flag"/>
                </td>

                <td>{c.name.common}</td>

                <td>{c.capital?.[0]}</td>

                <td>{c.region}</td>

                <td>{c.population}</td>

              </tr>

            ))}

          </tbody>

        </table>

      )}

      <CountryCard country={country}/>

    </div>

  );
}

export default App;