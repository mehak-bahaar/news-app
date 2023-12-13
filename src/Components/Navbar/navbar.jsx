import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NavBar extends Component {
  static propTypes = {

  }

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
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active text-light" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-light" aria-current="page" href="/">
                    About
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
