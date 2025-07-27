// import { Time } from './time';
import { SearchBox } from './searchBox';
import { Temperature } from './temperature';
import { City } from './city';
import { ExtraInfos } from './extraInfos';
import { Weather } from './weather';

export function Container({}) {
  return (
    <div className="container">
      <div className="contain">
        <aside className="pt1">
          <SearchBox />
          <section className="main">
            <Temperature />
            <City />
            {/* <Time /> */}
            <Weather />
          </section>
        </aside>
        <aside className="pt2">
          <ExtraInfos />
        </aside>
      </div>
    </div>
  );
}
