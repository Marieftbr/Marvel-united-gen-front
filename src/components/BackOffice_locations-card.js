import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function BackOfficeLocationsCard(props) {
  const navigate = useNavigate();

  const deleteData = async (id) => {
    await axios.delete("http://localhost:3000/location", { data: { id: id } });
    window.location.reload();
  };
  return (
    <div className="back-office__location-cards-wrapper">
      {props.data.map((location) => {
        return (
          <div
            className="back-office__locations-card-container"
            key={location._id}
          >
            <div className="back-office__locations-card-icon-and-name-container">
              <FontAwesomeIcon
                icon="fa-solid fa-location-dot"
                className="back-office__locations-card-icon"
              />
              <FontAwesomeIcon
                icon="fa-solid fa-pen"
                className="back-office__card-pen-icon"
                onClick={() => {
                  navigate(`/update/location/${location._id}`);
                }}
              />
              <FontAwesomeIcon
                icon="fa-solid fa-trash"
                className="back-office__card-trash-icon"
                onClick={() => {
                  deleteData(location._id);
                }}
              />
              <span className="back-office__locations-card-name">
                {location.name}
              </span>
            </div>
            <img
              src={location.picture.url}
              alt="location"
              className="back-office__locations-card-img"
            />
          </div>
        );
      })}
    </div>
  );
}
