import React from 'react';

import Header from "../components/Header";
import Title from '../components/Title';
import Selector from '../components/Selector';
import Result from '../components/Result';

const TopPage = ({ CountriesJson, setCountry, getCountryData, countryData, loading }) => {
  return (
    <div className="top-page-container">
      <div>
        <Header />
        <Title />
        <Selector CountriesJson={CountriesJson} setCountry={setCountry} getCountryData={getCountryData} />
        <Result countryData={countryData} loading={loading} />
      </div>
    </div>
  );
};

export default TopPage;
