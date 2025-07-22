import { useContext } from 'react';
import { appContext } from '../App';

export function MainInfo() {
  const { data } = useContext(appContext);
  return (
    <section className="essentials">
      <article className="detail temperature">
        temperature : {data?.main?.temp}°F
      </article>
      <article className="detail feels-like">
        feels like : {data?.main?.feels_like}°F
      </article>
      <article className="detail weather">
        <div className="weather">
          {data ? (
            <img
              src={`http://openweathermap.org/img/w/${data?.weather[0]?.icon}.png`}
            />
          ) : null}
          <span>{data?.weather[0]?.description}</span>
        </div>
      </article>
      <article className="detail city">{data?.name}</article>
    </section>
  );
}
