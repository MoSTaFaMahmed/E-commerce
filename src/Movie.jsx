import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "./axiosConfig";
import { useSelector, useDispatch } from "react-redux";
import { addToFavorite, getMovies,getFilter} from "./store/action";
import axios from "axios";
import './Movie.css'

const Movie = () => {
   const dispatch = useDispatch();
  // const [movie, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [movName, setmovName] = useState("");
  let movie=useSelector((state)=>state.mov)
  const search = (event) => {
    setmovName(event.target.value);
   // OpenSelected(movName);
   dispatch(getFilter(movName))
  };
  useEffect(() => {
    OpenSelectedPage(1);
  }, []);

  function Nextpage() {
    setPageCount(pageCount + 1);
    OpenSelectedPage(pageCount + 1);
  }

  function Prevpage() {
    if (pageCount > 1) {
      setPageCount(pageCount - 1);
    }

    OpenSelectedPage(pageCount - 1);
  }
  const OpenSelectedPage = (page) => {
    dispatch(getMovies(page))
    // axiosInstance
    //   .get(`/popular?api_key=5d9eb64d98fabdc9e09688e7adb4b129&page=${page}`)

    //   .then((res) => {
    //     setMovies(res.data.results);
    //     console.log(res.data.page);
    //   })
    //   .catch((err) => console.log(err));
  };

  // const OpenSelected = (key) => {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/search/movie?api_key=5d9eb64d98fabdc9e09688e7adb4b129&query=${key}`
  //     )

  //     .then((res) => {
        
  //       //setMovies(res.data.results);
  //       console.log(res.data.page);
  //     })
  //     .catch((err) => console.log(err));
  // };

  
console.log(movie);
  
  let fav = useSelector((state) => state.fav);
 

  const toggleFav = (item) => {
    dispatch(addToFavorite(item));
    //console.log(fav);
  };

  const isFavorite = (id) => {
    console.log(fav.find((el) => el.id == id) ? true : false);
    return fav.find((el) => el.id == id) ? true : false;
  };
  const bgcolor = "text-warning";
  
  return (
    <>
     
       <div className="row justify-content-center">
       <h1 className="text-center mt-3 col-12">Movies</h1>

<input
 className=" mr-sm-2 m-3 col-4 p-3 text-center"
 type="search"
 placeholder="Search"
 aria-label="Search"
 // value={movName}
 onChange={(e) => search(e)}
/> 
       </div>
       <div className="container-fluid">

          
        <div className="row justify-content-center">
          {movie&&movie.map((movi) => {
             console.log(movi.id);
            return (
              
              <div className="col-lg-3 col-md-4 col-sm-12 sm-m-auto  text-center movie" key={movi.id}>
                <Link
                    to={`/moviedetails/${movi.id}`}
                    className="text-decoration-none text-dark "
                  >
                <img
                  className="img-fluid mt-3"
                  src={`https://image.tmdb.org/t/p/w500/${movi.backdrop_path}`}
                />
                 </Link>
                {/* <p className="fs-6">Date: {movi.release_date}</p> */}
                <p
                  className="fs-6 btn"
                  onClick={() => {
                    toggleFav(movi);
                  }}
                >
                  <i
                    className={`fas fa-star ${
                      isFavorite(movi.id) ? bgcolor : ""
                    } fav`}
                  ></i>
                </p>
                {/* <p className="card-text">Vot: {movi.vote_average}</p> */}

                <h1 className="fs-6">
                  <span className="text-danger">Movie Name:</span> {movi.title}
                </h1>
{/* 
                <p className="card-text ">
                  <b className="text-danger">Vot:</b> {movi.vote_average}
                </p>
                <p className="card-text ">
                  <b className="text-danger">Original_language:</b>{" "}
                  {movi.original_language}
                </p> */}

               
                  
                    {/* <p>{movi.title}</p> */}
                  
                
               
              </div>
            );
          })}
        </div>
      </div>
      <div className="row justify-content-center">
        <button
          type="button "
          className="col-1 p-3 btn btn-outline-dark btn btn-danger m-5"
          onClick={() => {
            Prevpage();
          }}
        >
          Prev
        </button>
        <span className="mt-5 text-center col-8 ">  <button
          type="button"disabled
          className="btn btn-outline-dark  bg-danger mt-2 text-white"
          
        >{pageCount}</button></span>
        <button
          type="button" 
          className="col-1 btn btn-outline-dark m-5 btn-danger"
          onClick={() => {
            Nextpage();
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Movie;
