import React from "react";
import BackOfficeBoxesCard from "../components/BackOffice_boxes-card";
import BackOfficeHeader from "../components/BackOffice_header";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function BackOfficeBoxes() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/box");
        //   console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div>En cours de chargement...</div>
  ) : (
    <div>
      <BackOfficeHeader />
      <div className="back-office__link-container">
        <Link to="/add/box" className="back-office__links">
          Add
        </Link>
      </div>
      <BackOfficeBoxesCard data={data} />
    </div>
  );
}
