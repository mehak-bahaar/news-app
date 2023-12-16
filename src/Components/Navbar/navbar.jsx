import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "./navbar.css"


export class NavBar extends Component {



  render() {
    return (
      <div
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(46,39,103,1) 47%, rgba(65,44,128,1) 100%)",
        }}
      >
        <nav
          className="navbar navbar-expand-lg"
          style={{
            backgroundColor: "#2E2767",
            color: "#FCE8FF",
          }}
        >
          <div className="container-fluid">
            <Link className="navbar-brand text-light " to="#">
              Hacker News
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon navbar-toggler-icon-light"></span>
            </button>
            <div
              className="collapse navbar-collapse text-light"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active text-light hoverClass"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active text-light hoverClass"
                    aria-current="page"
                    to="/business"
                  >
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active text-light hoverClass"
                    aria-current="page"
                    to="/health"
                  >
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active text-light hoverClass"
                    aria-current="page"
                    to="/entertainment"
                  >
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active text-light hoverClass"
                    aria-current="page"
                    to="/sports"
                  >
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active text-light hoverClass"
                    aria-current="page"
                    to="/technology"
                  >
                    Technology
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active text-light hoverClass"
                    aria-current="page"
                    to="/science"
                  >
                    Science
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar
