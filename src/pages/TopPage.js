import React from 'react';

import Title from '../components/Title';
import Selector from '../components/Selector';
import Result from '../components/Result';

const TopPage = (props) => {
  return (
    <div>
      <Title />
      <Selector CountriesJson={props.CountriesJson} setCountry={props.setCountry} getCountryData={props.getCountryData} />
      <Result countryData={props.countryData} />
    </div>
  );
};

export default TopPage;
