
import Title from '../components/Title';
import Selector from '../components/Selector';
import Result from '../components/Result';

const TopPage = (props) => {
  console.log("TagPageのprops:",props);
  return (
    <div>
      <Title />
      <Selector CountriesJson={props.CountriesJson} setCountry={props.setCountry} getCountryData={props.getCountryData} />
      <Result />
    </div>
  );
};

export default TopPage;
