import { SearchBox } from './searchBox';
import { WeatherInfo } from './weatherInfo';
export function Container({}) {
  return (
    <div className="container">
      <div className="contain">
        <aside className="pt1">
          <SearchBox />
        </aside>
        <aside className="pt2">
          {/* <WeatherInfo /> */}
        </aside>
      </div>
    </div>
  );
}
