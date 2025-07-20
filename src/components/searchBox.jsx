import { useContext } from 'react';
import { appContext } from '../App';

export function SearchBox({}) {
  const { location, searchBoxChange, searchPressEnter } =
    useContext(appContext);
  return (
    <nav className="search-box">
      <i className="fas fa-search"></i>
      <input
        className="search-box"
        type="text"
        value={location}
        placeholder="search"
        onChange={searchBoxChange}
        onKeyUp={searchPressEnter}
      ></input>
    </nav>
  );
}
