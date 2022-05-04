import React from "react";
import { Link } from "react-router-dom";

export default function HomeHeader() {
  return (
    <div className="home__header-wrapper">
      <Link to="/home">Home</Link>
      <Link to="/backoffice" className="home__header-links">
        Back Office
      </Link>
    </div>
  );
}
