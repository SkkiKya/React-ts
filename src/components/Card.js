import React from 'react';


const Card = (props) => {

  return (
    <>
      {props.allCountriesData.map((singleData, index) =>
        <div key={index}>
          <h2>{singleData.Country}</h2>
          <p>新規感染者数:{singleData.NewConfirmed}</p>
          <p>感染者総数:{singleData.TotalConfirmed}</p>
        </div>
      )}
    </>
  );
};

export default Card;
