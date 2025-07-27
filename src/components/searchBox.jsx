import { useContext } from 'react';
import { appContext } from '../App';

export function SearchBox({}) {
  const { searchIconClick, location, searchBoxChange, searchPressEnter } =
    useContext(appContext);
  return (
    <nav className="search-box">
      <i
        className="fas fa-search"
        onClick={() => searchIconClick(location)}
        title='search'
      ></i>
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
