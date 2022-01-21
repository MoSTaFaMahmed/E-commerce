import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "./axiosConfig";
import { Link } from "react-router-dom";
const Movies = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axiosInstance
      .get(
        `/${params.id}?api_key=5d9eb64d98fabdc9e09688e7adb4b129&language-en/`
      )
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="container">
        <div className="card">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path} `}
            className="img-thumbnail"
          />
          <div className="card-body">
            <h1 className="card-title">
              <span className="text-danger">Movie Name:</span> {movie.title}
            </h1>
            <p className="card-text ">
              <b className="text-danger">Overview:</b> {movie.overview}
            </p>
            <p className="card-text ">
              <b className="text-danger">Vot:</b> {movie.vote_average}
            </p>
            <p className="card-text ">
              <b className="text-danger">Original_language:</b>{" "}
              {movie.original_language}
            </p>

            <Link to="/">
              <button type="button" class="btn btn-dark">
                Back To Movies
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movies;
