

const Selector = (props) => {
  console.log("Selectorのprops:", props);
  return (
    <>
      <select onChange={e => props.setCountry(e.target.value)}>
        <option>Select A Counrty</option>
        {/* {}がJS世界となる */}
        {props.CountriesJson.map((country, index) =>
          <option key={index} value={country.Slug}>{country.Country}</option>
        )}
      </select>
      <button onClick={props.getCountryData}>get Data</button>
    </>
  );
};

export default Selector;
