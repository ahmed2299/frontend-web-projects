import React from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

export default function Navbar({ userData,logout}) {
  return (
    //   <>
    //   <nav className={`navbar navbar-expand-lg ${styles.bgNavbar}`}>
    // <div className="container-fluid">
    //   <a className="navbar-brand" href="#">Noxe</a>
    //   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //     <span className="navbar-toggler-icon"></span>
    //   </button>
    //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //     {userData?
    //           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //           <li className="nav-item">
    //             <Link className="nav-link active" aria-current="page" to="">Home</Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link active" aria-current="page" to="movies">Movies</Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link active" aria-current="page" to="tvshows">Tv shows</Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link active" aria-current="page" to="people">People</Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link active" aria-current="page" to="about">About</Link>
    //           </li>
    //         </ul>:''}

    //     <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    //       <div className='social-media d-flex align-items-center'>
    //         <i className='fab fa-facebook mx-2'></i>
    //         <i className='fab fa-spotify mx-2'></i>
    //         <i className='fab fa-instagram mx-2'></i>
    //         <i className='fab fa-youtube mx-2'></i>
    //       </div>

    //       {userData?
    //               <li className="nav-item">
    //         <Link className="nav-link active" aria-current="page" onClick={logout}>Logout</Link>
    //       </li>:
    //       <>
    //       <li className="nav-item">
    //         <Link className="nav-link active" aria-current="page" to="login">Login</Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link active" aria-current="page" to="register">Register</Link>
    //       </li>
    //       </>

    <>
      <nav className={`navbar navbar-expand-lg ${styles.bgNavbar}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Noxe
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="movies"
                >
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="tvshows"
                >
                  Tv shows
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="people"
                >
                  People
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="about"
                >
                  About
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <div className="social-media d-flex align-items-center">
                <i className="fab fa-facebook mx-2"></i>
                <i className="fab fa-spotify mx-2"></i>
                <i className="fab fa-instagram mx-2"></i>
                <i className="fab fa-youtube mx-2"></i>
              </div>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="login"
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="register"
                >
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="login"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
