import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiGet } from "../api";
import BackOfficeHeader from "../components/BackOffice_header";
import BackOfficeLocationsCard from "../components/BackOffice_locations-card";
import Cookies from "js-cookie";

export default function BackOfficeLocations() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [token] = useState(Cookies.get("token") || null);
  const navigate = useNavigate();

  const fetchData = async () => {
    const response = await apiGet("/locations");
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (!token) {
      navigate("/backoffice");
    } else {
      fetchData();
    }
  }, [token, navigate]);

  return isLoading ? (
    <div>En cours de chargement...</div>
  ) : (
    <div>
      <BackOfficeHeader token={token} />
      <div className="back-office__link-container">
        <Link to="/add/location" className="back-office__links">
          Add
        </Link>
      </div>
      <BackOfficeLocationsCard data={data} />
    </div>
  );
}
