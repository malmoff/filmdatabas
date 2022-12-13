import React, { useState } from "react";
import FilmForm from "./FilmForm";

function FilmList({ films, onEdit, onDelete }) {
  const [editIndex, setEditIndex] = useState(-1);

  return (
    <React.Fragment>
      {films.map((film, index) => {
        if (index === editIndex) {
          // Show the FilmForm component
          return (
            <div className="film" key={film.title}>
              <h2>Edit {film.title}</h2>
              <FilmForm
                film={film}
                onSubmit={(updatedFilm) => {
                  onEdit(index, updatedFilm);
                  setEditIndex(-1);
                }}
              />
              <button
                type="button"
                onClick={() => {
                  setEditIndex(-1);
                }}
              >
                Cancel
              </button>
            </div>
          );
        } else {
          // Show the film information
          return (
            <div className="film" key={film.title}>
              <h2>{film.title}</h2>
              <p>Year: {film.year}</p>
              <p>Rating: {film.rating}</p>
              <button
                onClick={() => {
                  setEditIndex(index);
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  onDelete(index);
                }}
              >
                Delete
              </button>
            </div>
          );
        }
      })}
    </React.Fragment>
  );
}

export default FilmList;
