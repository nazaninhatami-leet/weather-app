import { useContext } from 'react';
import { appContext } from '../App';

export function Additional({}) {
  const { data } = useContext(appContext);
  console.log(data);
  return (
    <section className="additional">
      <article className="item humidity">
        humidity: {data?.main?.humidity}
      </article>
      <article className="item visibility">
        humidity: {data?.main?.humidity}
      </article>
      <article className="item clouds"></article>
      <article className="item wind"></article>
      <article className="item pressure"></article>
      <article className="item sunrise-sunset"></article>
      <article className="item ground-level"></article>
      <article className="item sea-level"></article>
    </section>
  );
}
