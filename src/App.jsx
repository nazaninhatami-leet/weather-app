import { Container } from './components/container';
import './App.css';
import axios from 'axios';
import { createContext, useState } from 'react';

export const appContext = createContext();

function App() {
  const [data, setData] = useState();
  const [location, setLocation] = useState('tehran');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;

  const fetchData = async () => {
    const response = await axios.get(url).then((response) => {
      setData(response.data);
      console.log(data);
    });
  };

  return (
    <appContext.Provider value={{ data, location, url, fetchData }}>
      <Container />
    </appContext.Provider>
  );
}

export default App;
