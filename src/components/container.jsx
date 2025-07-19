export function Container({}) {
  return (
    <div className="container">
      <nav>search box</nav>
      <article className="weather-info">
        <section className="essentials">
          <div className="temperature">temp</div>
          <div className="feels-like">feels like</div>
          <div className="weather">
            <div className="icon">icon</div>
            <div className="description">desc</div>
          </div>
          <div className="icon">big icon</div>
        </section>
        <section className="additional"></section>
      </article>
    </div>
  );
}
