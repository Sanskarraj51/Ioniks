import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../axios";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  // to show specific count of words
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies?.map((movie) => (
          <div className="row__poster">
            <img
              key={movie.id}
              className="row__img"
              src={`${baseUrl}${movie?.poster_path}`}
              alt={movie.name}
            />

            <h3 className="poster__title">
              {truncate(
                movie?.title || movie?.name || movie?.original_name,
                18
              )}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;
