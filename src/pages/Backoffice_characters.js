import React from "react";
import BackOfficeCharacterCard from "../components/BackOffice_character-card";
import BackOfficeHeader from "../components/BackOffice_header";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function BoCharacters() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/characters");
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.response);
    }
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
        <Link to="/add/character" className="back-office__links">
          Add
        </Link>
      </div>
      <BackOfficeCharacterCard data={data} />
    </div>
  );
}
