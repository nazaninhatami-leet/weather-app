import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchData = () => {
  const [data, setData] = useState();
  const [location, setLocation] = useState('');
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

  return { data, location, searchBoxChange, searchPressEnter };
};
export default useFetchData;
