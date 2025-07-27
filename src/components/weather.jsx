import { useContext } from 'react';
import { appContext } from '../App';

export const Weather = () => {
  const { data } = useContext(appContext);

  return (
    <div className="weather">
      <span>{data ? data?.weather[0]?.description : null}</span>
    </div>
  );
};
