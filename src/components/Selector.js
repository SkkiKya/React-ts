import React from 'react';

const Selector = ({ setCountry, CountriesJson, getCountryData }) => {
  return (
    <div className="selector-container">
      <select onChange={e => setCountry(e.target.value)}>
        {/* {}がJS世界となる */}
        {CountriesJson.map((country, index) =>
          <option key={index} value={country.Slug}>{country.Country}</option>
        )}
      </select>
    </div>
  );
};

export default Selector;
