import { MainInfos } from './mainInfos';
import { ExtraInfos } from './extraInfos';
export function WeatherInfo({}) {
  return (
    <article className="weather-info">
      <MainInfos />
      <ExtraInfos />
    </article>
  );
}
