export type CountryDataType = {
  date: string;
  newConfirmed: number;
  totalConfirmed: number;
  newRecovered: number;
  totalRecovered: number;
}

type CountriesJson = {
  Country: string,
  Slug: string,
}[]// 配列構造の[]


export type TopPageType = {
  CountriesJson: CountriesJson,
  setCountry: React.Dispatch<React.SetStateAction<string>>,
  countryData: CountryDataType,
  loading: boolean,
};

export type SelelctorType = {
  setCountry: React.Dispatch<React.SetStateAction<string>>,
  CountriesJson: CountriesJson,
};

export type ResultType = {
  countryData: CountryDataType,
  loading: boolean,
};

interface SingleCountriesDataType {
  Country: string,
  NewConfirmed: number,
  TotalConfirmed: number
}

export interface allCountriesDataTypeArray extends Array<SingleCountriesDataType> { }

export interface WorldPageType {
  allCountriesData: Array<SingleCountriesDataType>
}

export interface CardType {
  allCountriesData: Array<SingleCountriesDataType>
}
