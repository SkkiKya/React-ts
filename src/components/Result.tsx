import React from 'react';
import Loading from "./Loading";

type ResultType = {
  countryData: {
    date: string,
    newConfirmed: number,
    totalConfirmed: number,
    newRecovered: number,
    totalRecovered: number,
  },
  loading: boolean,
};

const Result = ({ countryData, loading }: ResultType) => {
  const { date, newConfirmed, totalConfirmed, newRecovered, totalRecovered } = countryData;
  return (
    <div className="results-container">
      {loading ?
        <Loading />
        :
        <div>
          <p>日付:{date.slice(0, 10)}</p>
          <p>新規感染者数:{newConfirmed.toLocaleString()}</p>
          <p>感染者総数:{totalConfirmed.toLocaleString()}</p>
          <p>新規回復者:{newRecovered.toLocaleString()}</p>
          <p>回復者総数:{totalRecovered.toLocaleString()}</p>
        </div>
      }
    </div>
  );
};

export default Result;
