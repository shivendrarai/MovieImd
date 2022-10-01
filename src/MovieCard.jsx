import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <div className="movie">
        <div>
          <p>{movie.Year}</p>
        </div>
        <diV>
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/400"
            }
            alt={movie.Title}
          />
        </diV>
        <div>
          <span>{movie.Type}</span>
          <h3>{movie.Title}</h3>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
