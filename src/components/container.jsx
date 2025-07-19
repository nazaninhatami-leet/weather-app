import { WeatherInfo } from './weatherInfo';
export function Container({}) {
  return (
    <div className="container">
      <nav className="search-box">
        <i className="fas fa-search"></i>
        <input className="search-box" type="text" value={'search'}></input>
      </nav>
      <WeatherInfo />
    </div>
  );
}
