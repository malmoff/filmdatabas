import React, { useState } from "react";
import FilmList from "./FilmList";
import FilmForm from "./FilmForm";
import "./App.css";

function App() {
  const [films, setFilms] = useState([
    {
      title: "Jurassic Park",
      year: 1993,
      rating: 5,
    },
    { title: "Avengers: Endgame", year: 2019, rating: 4 },
  ]);

  const addFilm = (film) => {
    setFilms([...films, film]);
  };

  const updateFilm = (index, updatedFilm) => {
    const updatedFilms = [...films];
    updatedFilms[index] = updatedFilm;
    setFilms(updatedFilms);
  };

  const deleteFilm = (index) => {
    const updatedFilms = [...films];
    updatedFilms.splice(index, 1);
    setFilms(updatedFilms);
  };

  return (
    <div>
      <FilmList films={films} onEdit={updateFilm} onDelete={deleteFilm} />
      <FilmForm onSubmit={addFilm} />
    </div>
  );
}

export default App;
