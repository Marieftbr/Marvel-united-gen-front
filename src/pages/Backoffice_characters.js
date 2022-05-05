import React from "react";
import BackOfficeCharacterCard from "../components/BackOffice_character-card";
import BackOfficeHeader from "../components/BackOffice_header";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiGet } from "../api";
import Cookies from "js-cookie";

export default function BoCharacters() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [token] = useState(Cookies.get("token") || null);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await apiGet("/characters");
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.response);
    }
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
        <Link to="/add/character" className="back-office__links">
          Add
        </Link>
      </div>
      <BackOfficeCharacterCard data={data} />
    </div>
  );
}
