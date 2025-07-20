import { SearchBox } from './searchBox';
import { WeatherInfo } from './weatherInfo';
export function Container({}) {
  return (
    <div className="container">
      <SearchBox />
      <WeatherInfo />
    </div>
  );
}
