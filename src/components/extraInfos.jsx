import { useContext } from 'react';
import { appContext } from '../App';
import Extra from './extraInfo';

export function ExtraInfos() {
  const { data } = useContext(appContext);
  const { main, visibility, clouds, wind, sys } = data ? data : {};
  const infos = [
    { id: 1, label: 'Humidity', code: main?.humidity, unit: '%' },
    { id: 2, label: 'Visibility', code: visibility, unit: 'm' },
    { id: 3, label: 'Clouds', code: clouds?.all, unit: '%' },
    { id: 4, label: 'Wind Speed', code: wind?.speed, unit: 'm/s' },
    { id: 5, label: 'Pressure', code: main?.pressure, unit: 'hPa' },
    // { id: 6, label: 'Sunrise', code: sys?.sunrise },
    // { id: 7, label: 'Sunset', code: sys?.sunset },
    { id: 8, label: 'Ground Level', code: main?.grnd_level, unit: 'm' },
    { id: 9, label: 'Sea Level', code: main?.sea_level, unit: 'hPa' },
  ];

  return (
    <section className="extraInfo">
      {infos.map((info) => (
        <Extra key={info.id} {...info} />
      ))}
    </section>
  );
}
