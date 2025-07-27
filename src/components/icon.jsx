import { useContext } from 'react';
import { appContext } from '../App';

export const Icon = () => {
  const { data } = useContext(appContext);

  return (
    <article className="icon">
      {data ? (
        <img
          className="icon"
          src={`http://openweathermap.org/img/w/${data?.weather[0]?.icon}.png`}
          title=""
        />
      ) : null}
    </article>
  );
};
