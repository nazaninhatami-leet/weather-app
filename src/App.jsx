import { Container } from './components/container';
import './App.css';
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const appContext = createContext();

function App() {
  const [data, setData] = useState();
  const [location, setLocation] = useState('new york');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;

  const fetchData = async () => {
    const response = await axios.get(url).then((response) => {
      setData(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchBoxChange = (e) => {
    setLocation(e.target.value);
  };

  const searchPressEnter = (e) => {
    if (e.code === 'Enter') {
      fetchData();
    }
  };

  return (
      <appContext.Provider
        value={{ data, location, url, searchBoxChange, searchPressEnter }}
      >
        <Container />
      </appContext.Provider>
  );
}

export default App;
