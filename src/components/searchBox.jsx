import { useContext } from 'react';
import { appContext } from '../App';

export function SearchBox({}) {
  const { fetchData } = useContext(appContext);
  return (
    <nav className="search-box">
      <i className="fas fa-search"></i>
      <input
        className="search-box"
        type="text"
        placeholder="search"
        onChange={fetchData}
      ></input>
    </nav>
  );
}
