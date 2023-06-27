import React from "react";
import BackOfficeBoxesCard from "../components/BackOffice_boxes-card";
import BackOfficeHeader from "../components/BackOffice_header";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiGet } from "../api";
import Cookies from "js-cookie";

export default function BackOfficeBoxes() {
  const [token] = useState(Cookies.get("token") || null);

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiGet("/box");
        //   console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };

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
        <Link to="/add/box" className="back-office__links">
          Add
        </Link>
      </div>
      <BackOfficeBoxesCard data={data} />
    </div>
  );
}
