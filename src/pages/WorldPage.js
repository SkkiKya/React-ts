import React from 'react';

import Header from "../components/Header";
import Title from '../components/Title';
import Card from '../components/Card';

const WorldPage = (props) => {
  return (
    <>
      <Header />
      <Title />
      <Card allCountriesData={props.allCountriesData}  />
    </>
  );
};

export default WorldPage;
