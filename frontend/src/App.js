import { useState } from "react";
import api from "./api";
import SearchCountry from "./SearchCountry";
import CountryCard from "./CountryCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App(){

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(null);
  const [error, setError] = useState("");

  /* Background based on region */
  const getBackground = (region) => {

    switch(region){
      case "Asia":
        return "linear-gradient(135deg, #ff9a9e, #fad0c4)";
      case "Europe":
        return "linear-gradient(135deg, #a1c4fd, #c2e9fb)";
      case "Africa":
        return "linear-gradient(135deg, #fbc2eb, #a6c1ee)";
      case "Americas":
        return "linear-gradient(135deg, #84fab0, #8fd3f4)";
      case "Oceania":
        return "linear-gradient(135deg, #fccb90, #d57eeb)";
      default:
        return "linear-gradient(135deg, #5f9cff, #6a5acd)";
    }

  };

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

    <div
      className="app-wrapper"
      style={{
        background: getBackground(country?.region)
      }}
    >

      <div className="container mt-4">

        <h2 className="text-center mb-4">🌍 Country Search</h2>

        <SearchCountry onSearch={loadCountry}/>

        {error && (
          <div className="alert alert-danger">{error}</div>
        )}

        {countries.length > 0 && (

          <table className="table table-bordered table-hover mt-3">

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

                  <td>{c.population.toLocaleString()}</td>

                </tr>

              ))}

            </tbody>

          </table>

        )}

        <CountryCard country={country}/>

      </div>

    </div>

  );

}

export default App;