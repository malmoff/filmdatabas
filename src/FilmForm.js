import React, { useState } from "react";

function FilmForm({ film, onSubmit }) {
  const [title, setTitle] = useState(film ? film.title : "");
  const [year, setYear] = useState(film ? film.year : "");
  const [rating, setRating] = useState(film ? film.rating : "");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ title, year, rating });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Film:
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <label>
        År:
        <input
          type="number"
          value={year}
          onChange={(event) => setYear(event.target.value)}
        />
      </label>
      <label>
        Betyg:
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
        />
      </label>
      <button type="submit">Lägg till</button>
    </form>
  );
}

export default FilmForm;
