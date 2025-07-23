import { useContext } from 'react';
import { appContext } from '../App';

export function MainInfos() {
  const { data } = useContext(appContext);
  return (
    <section className="mainInfo">
      <article className="detail city">
        <span>{data ? data?.name : 'city'}</span>
      </article>
      <article className="detail temperature">
        <span>temperature</span>
        {data ? <span>:&nbsp;{data?.main?.temp}°F</span> : null}
      </article>
      <article className="detail feels-like">
        <span>feels like</span>
        {data ? <span>:&nbsp;{data?.main?.feels_like}°F</span> : null}
      </article>
      <article className="detail weather">
        <div className="weather">
          <span>{data ? data?.weather[0]?.description : 'weather'}</span>
          {data ? (
            <img
              src={`http://openweathermap.org/img/w/${data?.weather[0]?.icon}.png`}
            />
          ) : null}
        </div>
      </article>
    </section>
  );
}
