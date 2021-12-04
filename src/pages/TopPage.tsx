import React from 'react';

import Header from "../components/Header";
import Title from '../components/Title';
import Selector from '../components/Selector';
import Result from '../components/Result';

type TopPageType = {
  CountriesJson: {
    Country: string;
    Slug: string;
  }[], // 配列構造の[]
  setCountry: React.Dispatch<React.SetStateAction<string>>,
  countryData: {
    date: string,
    newConfirmed: number,
    totalConfirmed: number,
    newRecovered: number,
    totalRecovered: number,
  },
  loading: boolean,
};

const TopPage = ({ CountriesJson, setCountry, countryData, loading }: TopPageType ) => {
  return (
    <div className="top-page-container">
      <div>
        <Header />
        <Title />
        <Selector CountriesJson={CountriesJson} setCountry={setCountry} />
        <Result countryData={countryData} loading={loading} />
      </div>
    </div>
  );
};

export default TopPage;
