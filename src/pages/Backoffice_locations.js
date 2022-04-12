import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BackOfficeHeader from "../components/BackOffice_header";
import BackOfficeLocationsCard from "../components/BackOffice_locations-card";

export default function BackOfficeLocations() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/locations");
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <div>En cours de chargement...</div>
  ) : (
    <div>
      <BackOfficeHeader />
      <div className="back-office__link-container">
        <Link to="/add/location" className="back-office__links">
          Add
        </Link>
      </div>
      <BackOfficeLocationsCard data={data} />
    </div>
  );
}
