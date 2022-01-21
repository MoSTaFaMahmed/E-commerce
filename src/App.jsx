import React from 'react';
import  ReactDOM   from 'react-dom';
import {
     BrowserRouter as Router,
     Switch,
     Route,
     Link
   } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Form from './Form';
import Todo from './Todo'
import './Style.css'
import Nav from './Nav'
import Movie from './Movie'
import MovieDetails from './MovieDetails'
import Favorite from "./Favorits"
import {languageContext,LanguageProvidor} from './languagecontext'
import { useState } from "react";

const App = () => {
     const [lang,setLang]=useState("en")
return(<>

  
  <Router >
    <LanguageProvidor value={{lang,setLang}}>
  <Nav/>
  <Switch>
       
  <Route path="/todo" exact component={Todo}/>
  <Route path="/form" exact component={Form}/>
  <Route path="/" exact component={Movie}/>
  <Route path="/favorite" exact component={Favorite}/>
  <Route path="/moviedetails/:id" exact component={MovieDetails}></Route>
  
  </Switch>
  
  </LanguageProvidor>
  
  </Router>
 
</>)

}
export default App;