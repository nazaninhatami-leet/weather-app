import { SearchBox } from './searchBox';
import { WeatherInfo } from './weatherInfo';
import { Temperature } from './temperature';
import { City } from './city';

export function Container({}) {
  return (
    <div className="container">
      <div className="contain">
        <aside className="pt1">
          <SearchBox />
          <section className="main">
            <Temperature />
            <City />
          </section>
        </aside>
        <aside className="pt2">{/* <WeatherInfo /> */}</aside>
      </div>
    </div>
  );
}
