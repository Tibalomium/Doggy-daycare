import { useState } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="Navigation">
      <Link to="/">
        <a href="#">Start</a>
      </Link>
      <Link to="/catalog">
        <a href="#">Catalog</a>
      </Link>
    </div>
  );
}

export default Navigation;
