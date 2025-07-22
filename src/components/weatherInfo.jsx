import { MainInfo } from './mainInfo';
import { ExtraInfo } from './extraInfo';
export function WeatherInfo({}) {
  return (
    <article className="weather-info">
      <MainInfo />
      <ExtraInfo />
    </article>
  );
}
