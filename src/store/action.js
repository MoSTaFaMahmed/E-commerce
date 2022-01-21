import axiosInstance from "../axiosConfig"
import axios from "axios";
export default function changeCounter(data){
     return{
          type:"SET_MOVIE",
          payload:data  
     }
}


export  function addToFavorite(movieItem){
     return{
          type:"ADD_MOVIE",
          payload:movieItem
     }
}

export  function rmoveToFavorite(id){
     return{
          type:"REMOVE_MOVIE",
          payload:id
      
     }
}

export function getMovies(page){
     return(dispatch)=>{
          axiosInstance
          .get(`/popular?api_key=5d9eb64d98fabdc9e09688e7adb4b129&page=${page}`)
    
          .then((res) => {
          //   setMovies(res.data.results);
            console.log(res.data);
          dispatch({type:"GET_MOVIE",payload:res.data.results})
          })
          .catch((err) => console.log(err));
     }
}
export function getFilter(key){
     return(dispatch)=>{
          axios
              .get(
                `https://api.themoviedb.org/3/search/movie?api_key=5d9eb64d98fabdc9e09688e7adb4b129&query=${key}`
              )
        
              .then((res) => {
               console.log(res.data);
               dispatch({type:"GET_FILTER",payload:res.data.results})
               
                
                //setMovies(res.data.results);
                console.log(res.data.page);
              })
              .catch((err) => console.log(err));
     }
}