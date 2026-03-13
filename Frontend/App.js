import { useState } from "react";
import api from "./api";
import SearchCountry from "./SearchCountry";
import CountryCard from "./CountryCard";
import "bootstrap/dist/css/bootstrap.min.css";

function App(){

  const [country,setCountry] = useState(null);

  const loadCountry = async(name)=>{

    const res = await api.get("/country",{params:{name}});

    setCountry(res.data[0]);
  };

  return(

    <div className="container mt-4">

      <h2>🌍 Country Search</h2>

      <SearchCountry onSearch={loadCountry}/>

      <CountryCard country={country}/>

    </div>
  );
}

export default App;