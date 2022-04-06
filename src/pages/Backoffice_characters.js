import React from "react";
import BackOfficeCharacterCard from "../components/BackOffice_character-card";
import BackOfficeHeader from "../components/BackOffice_header";
import axios from "axios";
import { useState, useEffect } from "react";

export default function BoCharacters() {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/characters");
      setData(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <BackOfficeHeader />
      <BackOfficeCharacterCard data={data} />
    </div>
  );
}
