import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { rmoveToFavorite } from "./store/action";
import { Link } from "react-router-dom";
import './Movie.css'
const Favorit = () => {
  //     var counter= useSelector ((state)=>state.counter )
  //     const dipatch= useDispatch()
  //    const toggleCounter=()=>{
  //      dipatch(changeCounter(++counter))

  //     }

  const dispatch = useDispatch();

  const remove = (id) => {
    dispatch(rmoveToFavorite(id));
  };

  const fav = useSelector((state) => state.fav);
  return (
    <>
      <div className="row  justify-content-center">
         {fav.length==0?<div class="alert alert-danger fs-1 text-center my-5 col-8" role="alert">
           You Have  NO Favorite Movies
       </div>:fav.map((movie) => {
          return (
            <div className="card col-3 text-center m-3 movie" key={movie.id}>
               <Link
                  to={`/moviedetails/${movie.id}`}
                  className="text-decoration-none text-dark"
                >
              <img
                className="img-fluid mt-3"
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              />

              <p className="fs-6">  <span className="text-danger">Date:</span> {movie.release_date}</p>

              {/* <p className="card-text">Vot: {movie.vote_average}</p> */}
             
               
                  <p className="fs-6"><span className="text-danger">Title:</span>{movie.title}</p>
                </Link>
             
              <button
                className="btn btn-danger col-3 m-auto mb-3 fs-6"
                onClick={() => remove(movie.id)}
              >
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
          );
        })}
        {/* {counter} */}
      </div>

      {/* <button className="btn btn-success btn-sm m-3" onClick={()=>{toggleCounter();}}>Chnge Count</button> */}
    </>
  );
};

export default Favorit;
