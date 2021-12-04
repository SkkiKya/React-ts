import React from 'react';

type SelelctorType = {
  setCountry: React.Dispatch<React.SetStateAction<string>>,
  CountriesJson: {
    Country: string;
    Slug: string;
  }[], // 配列構造の[]
};

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
