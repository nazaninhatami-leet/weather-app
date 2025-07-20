import { useContext } from 'react';
import { appContext } from '../App';

export function Essentials() {
  const { data } = useContext(appContext);
  return (
    <section className="essentials">
      <article className="detail temperature">
        temperature : {data?.main?.temp}
      </article>
      <article className="detail feels-like">
        feels like : {data?.main?.feels_like}
      </article>
      <article className="detail weather">
        <img
          src={`http://openweathermap.org/img/w/${data?.weather[0]?.icon}.png`}
        />
        {data?.weather[0]?.description}
      </article>
      <article className="detail big-icon">{data?.name}</article>
    </section>
  );
}
