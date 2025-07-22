import { useContext } from 'react';
import { appContext } from '../App';

export function Additional({}) {
  const { data } = useContext(appContext);
  console.log('from additional'+data);
  return (
    <section className="additional">
      <li className="item humidity">humidity: {data?.main?.humidity}</li>
      <li className="item visibility">visibility: {data?.visibility}</li>
      <li className="item clouds">clouds: {data?.clouds?.all}</li>
      <li className="item wind">wind speed: {data?.wind?.speed}</li>
      <li className="item pressure">pressure: {data?.main?.pressure}</li>
      <li className="item sunrise">sunrise: {data?.sys?.sunrise}</li>
      <li className="item sunset">sunset: {data?.sys?.sunset}</li>
      <li className="item ground-level">
        ground level: {data?.main?.grnd_level}
      </li>
      <li className="item sea-level">sea level: {data?.main?.sea_level}</li>
    </section>
  );
}
