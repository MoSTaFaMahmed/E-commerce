import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";




const Nav=()=> {
  const fav= useSelector ((state)=>state.fav)
     return ( <>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/todo">ToDo</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/todo">ToDo</Link>
        </li>
        <li className="nav-item">
         <p className="nav-link active"><i className="fas fa-star text-warning"></i>{fav.length}</p>
          
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/form">Form</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Movies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/favorite">Favorite</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
     </> );
}
 
export default Nav;