import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarID"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarID">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/login">
                login
              </Link>
              <Link
                className="nav-link active"
                aria-current="page"
                to="/Signup"
              >
                SignUp
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
