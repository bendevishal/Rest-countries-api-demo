import { useState } from "react";

export default function SearchCountry({ onSearch }) {

  const [country, setCountry] = useState("");

  const handleChange = (e) => {

    const value = e.target.value;

    setCountry(value);

    onSearch(value);

  };

  return(

    <div className="mb-3">

      <input
        className="form-control"
        placeholder="Enter country name"
        value={country}
        onChange={handleChange}
      />

    </div>

  );

}