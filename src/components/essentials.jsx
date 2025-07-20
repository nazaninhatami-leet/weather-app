import { useContext } from 'react';
import { appContext } from '../App';


export function Essentials() {
  const data = useContext(appContext);

  return (
    <section className="essentials">
      <article className="temperature">temp: {}</article>
      <article className="feels-like">feels like:</article>
      <article className="weather">
        <div className="icon">icon</div>
        <div className="description">{'weather'}</div>
      </article>
      <article className="big-icon">big icon</article>
    </section>
  );
}
