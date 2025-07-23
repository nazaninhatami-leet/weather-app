import { useContext } from 'react';
import { appContext } from '../App';
import Extra from './extra';

export function ExtraInfo() {
  const { data } = useContext(appContext);
  const { main, visibility, clouds, wind, sys } = data ? data : {};
  const infos = [
    { id: 1, label: 'humidity', code: main?.humidity, unit: '%' },
    { id: 2, label: 'visibility', code: visibility, unit: ' meters' },
    { id: 3, label: 'clouds', code: clouds?.all, unit: '%' },
    { id: 4, label: 'wind speed', code: wind?.speed, unit: 'm/s' },
    { id: 5, label: 'pressure', code: main?.pressure, unit: 'hPa' },
    { id: 6, label: 'sunrise', code: sys?.sunrise },
    { id: 7, label: 'sunset', code: sys?.sunset },
    { id: 8, label: 'ground level', code: main?.grnd_level, unit: ' meters' },
    { id: 9, label: 'sea level', code: main?.sea_level, unit: 'hPa' },
  ];

  return (
    <section className="extraInfo">
      {infos.map((info) => (
        // <li className="item humidity" key={id}>
        //   <span>{label}:</span>
        //   {data ? <span> {code}</span> : '......'}
        // </li>
        <Extra key={info.id} {...info} />
      ))}
      {/* <li className="item humidity">
        <span>{infos[0].label}:</span>
        {data ? <span> {infos[0].code}</span> : '......'}
      </li> */}
      {/* <li className="item visibility">
        <span>visibility:</span>
        {data ? <span> {visibility} meters</span> : '......'}
      </li> */}
      {/* <li className="item clouds">
        <span>clouds:</span>
        {data ? <span>{clouds?.all}%</span> : '......'}
      </li> */}
      {/* <li className="item wind">
        <span>wind speed:</span>
        {data ? <span>{wind?.speed}m/s</span> : '......'}
      </li> */}
      {/* <li className="item pressure">
        <span>pressure:</span>
        {data ? <span>{main?.pressure}hPa</span> : '......'}
      </li> */}
      {/* <li className="item sunrise">
        <span>sunrise:</span>
        {data ? <span>{sys?.sunrise}</span> : '......'}
      </li> */}
      {/* <li className="item sunset">
        <span>sunset:</span>
        {data ? <span>{sys?.sunset}</span> : '......'}
      </li> */}
      {/* <li className="item ground-level">
        <span>ground level:</span>
        {data ? <span>{main?.grnd_level} meters</span> : '......'}
      </li> */}
      {/* <li className="item sea-level">
        <span>sea level:</span>
        {data ? <span> {main?.sea_level}hPa</span> : '......'}
      </li> */}
    </section>
  );
}
