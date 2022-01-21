import axios from 'axios';


const axiosInstance = axios.create({

    baseURL: 'https://api.themoviedb.org/3/movie'



})

// axiosInstance.interceptors.request.use(function(config){
// config.params={
//     api_key
// }

// },function(){

// })

export default axiosInstance