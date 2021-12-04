import React from 'react';

import { SelelctorType } from '../type';


const Selector = ({ setCountry, CountriesJson }: SelelctorType) => {
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
