import { Additional } from './additional';
import { Essentials } from './essentials';
export function WeatherInfo({}) {
  return (
    <article className="weather-info">
      <Essentials />
      <Additional />
    </article>
  );
}
