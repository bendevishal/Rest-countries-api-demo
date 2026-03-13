import { useState } from "react";

export default function SearchCountry({ onSearch }) {

  const [country, setCountry] = useState("");

  const handleSearch = () => {
    if(country){
      onSearch(country);
    }
  };

  return (
    <div className="mb-4">

      <input
        className="form-control mb-2"
        placeholder="Enter country name"
        onChange={(e)=>setCountry(e.target.value)}
      />

      <button
        className="btn btn-primary"
        onClick={handleSearch}
      >
        Search
      </button>

    </div>
  );
}