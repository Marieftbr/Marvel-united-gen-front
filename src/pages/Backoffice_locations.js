import axios from "axios";
import React, { useState, useEffect } from "react";
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
      <BackOfficeLocationsCard data={data} />
    </div>
  );
}
