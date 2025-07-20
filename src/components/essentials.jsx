import { useContext } from 'react';
import { appContext } from '../App';

export function Essentials() {
  const { data } = useContext(appContext);
  return (
    <section className="essentials">
      <article className="temperature">
        temperature : {data?.main?.temp}
      </article>
      <article className="feels-like">
        feels like : {data?.main?.feels_like}
      </article>
      <article className="weather">
        <div className="icon">
          <img
            src={`http://openweathermap.org/img/w/${data?.weather[0]?.icon}.png`}
          />
        </div>
        <div className="description">{data?.weather[0]?.description}</div>
      </article>
      <article className="big-icon">
        {/* <img
          src={`http://openweathermap.org/img/w/${data?.weather[0]?.icon}.png`}
          style={{width:'30%'}}
        /> */}
        big icon
      </article>
    </section>
  );
}
