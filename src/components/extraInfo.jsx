import { useContext } from 'react';
import { appContext } from '../App';

export function ExtraInfo() {
  const { data } = useContext(appContext);
  console.log('from additional' + data);
  return (
    <section className="extraInfo">
      <li className="item humidity">
        <span>humidity:</span>
        {data ? <span> {data?.main?.humidity}%</span> : '......'}
      </li>
      <li className="item visibility">
        <span>visibility:</span>
        {data ? <span> {data?.visibility} meters</span> : '......'}
      </li>
      <li className="item clouds">
        <span>clouds:</span>
        {data ? <span>{data?.clouds?.all}%</span> : '......'}
      </li>
      <li className="item wind">
        <span>wind speed:</span>
        {data ? <span>{data?.wind?.speed}m/s</span> : '......'}
      </li>
      <li className="item pressure">
        <span>pressure:</span>
        {data ? <span>{data?.main?.pressure}hPa</span> : '......'}
      </li>
      <li className="item sunrise">
        <span>sunrise:</span>
        {data ? <span>{data?.sys?.sunrise}</span> : '......'}
      </li>
      <li className="item sunset">
        <span>sunset:</span>
        {data ? <span>{data?.sys?.sunset}</span> : '......'}
      </li>
      <li className="item ground-level">
        <span>ground level:</span>
        {data ? <span>{data?.main?.grnd_level} meters</span> : '......'}
      </li>
      <li className="item sea-level">
        <span>sea level:</span>
        {data ? <span> {data?.main?.sea_level}hPa</span> : '......'}
      </li>
    </section>
  );
}
