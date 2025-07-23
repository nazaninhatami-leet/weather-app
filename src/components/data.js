import { useContext } from 'react';
import { appContext } from '../App';

const { data } = useContext(appContext);
const { main, visibility, clouds, wind, sys } = data ? data : {};

export const infos = [
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
