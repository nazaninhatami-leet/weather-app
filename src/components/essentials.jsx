import React from "react";
export function Essentials({}) {
  return <section className="essentials">
        <article className="temperature">temp</article>
        <article className="feels-like">feels like</article>
        <article className="weather">
          <div className="icon">icon</div>
          <div className="description">desc</div>
        </article>
        <article className="icon">big icon</article>
      </section>;
}
  