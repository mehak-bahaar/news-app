import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NavBar extends Component {
  hoverStyling = {
    cursor: "pointer",
    transition: "scale 1s ease-in-out, color 1s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
      color: "#f2f2f2",
    },
    "&.focus": {
      transform: "scale(0.95)", // Adjust the scale value as needed
    },
  };


  render() {
    return (
      <div
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(46,39,103,1) 47%, rgba(65,44,128,1) 100%)",
        }}
      >
        <nav
          className="navbar navbar-expand-lg color-custom "
          style={{
            backgroundColor: "#2E2767",
            color: "#FCE8FF",
          }}
        >
          <div className="container-fluid">
            <a className="navbar-brand text-light" href="#">
              Hacker News
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
              <span className="navbar-toggler-icon light"></span>
            </button>
            <div
              className="collapse navbar-collapse text-light"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item" style={this.hoverStyling}>
                  <a
                    className="nav-link active text-light"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active text-light"
                    aria-current="page"
                    href="/"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active text-light"
                    aria-current="page"
                    href="/"
                  >
                    Business
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active text-light"
                    aria-current="page"
                    href="/"
                  >
                    Health
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active text-light"
                    aria-current="page"
                    href="/"
                  >
                    Entertainment
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active text-light"
                    aria-current="page"
                    href="/"
                  >
                    Sports
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active text-light"
                    aria-current="page"
                    href="/"
                  >
                    Technology
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active text-light"
                    aria-current="page"
                    href="/"
                  >
                    Science
                  </a>
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
