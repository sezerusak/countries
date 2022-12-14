import React from "react";

const Country = ({
  capitalCity,
  continent,
  firstLang,
  flag,
  population,
  countryName,
}) => {
  return (
    <article className="country">
      <div className="img-container">
        <img src={flag} alt={countryName} />
      </div>
      <div className="country-footer">
        <h2>{countryName}</h2>
        <h3>
          <span>ðïļ Capital:</span> {capitalCity}
        </h3>
        <h3>
          <span>ð Language:</span> {firstLang}
        </h3>
        <h3>
          <span>ð§âðĶē Population:</span> {Number(population).toLocaleString()}
        </h3>
        <h3>
          <span>ðŽ Continent:</span> {continent}
        </h3>
      </div>
    </article>
  );
};

export default Country;
