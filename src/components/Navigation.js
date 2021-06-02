import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Home.css";

function Navigation(props) {
  return (
    <div className="navigation">
     
        <div class="container">
          <Link class="navbar-brand" to="/">
            Bienvenue 
          </Link>

          <div>
            <ul className="liste">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                 
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      
    </div>
  );
}

export default withRouter(Navigation);