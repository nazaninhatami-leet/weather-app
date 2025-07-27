import { Container } from './components/container';
import './App.css';
import { createContext } from 'react';
import useFetchData from './components/useFetchData';

export const appContext = createContext();

function App() {
  const { data, searchIconClick, location, searchBoxChange, searchPressEnter } =
    useFetchData();

  return (
    <appContext.Provider
      value={{
        data,
        searchIconClick,
        location,
        searchBoxChange,
        searchPressEnter,
      }}
    >
      <Container />
    </appContext.Provider>
  );
}

export default App;
