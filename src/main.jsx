// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
// import WeatherSearchBox from './components/test.js';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <App />
  // <WeatherSearchBox />
  // </StrictMode>
);
