import React from "react";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import About from "./About";

function HomePage(search, setSearch) {
  return (
    <nav class="navbar  navbar-expand-lg bg-primary fixed-top" data-bs-theme="dark">
      <div class="container-fluid">
        <h3>i-Donate</h3>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul
            class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="form">
                Donate
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="about" >
                About
              </a>
            </li>
          </ul>
          <form class="d-flex" role="search">
          <li className="nav-item btn btn-primary">
              <a className="nav-link active" aria-current="page" href="login">
                Login
              </a>
            </li>
          </form>
          
        </div>
      </div>
    </nav>
  );

}
export default HomePage;

