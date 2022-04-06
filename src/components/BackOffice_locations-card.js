import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function BackOfficeLocationsCard(props) {
  return (
    <div>
      {props.data.map((location) => {
        return (
          <div className="back-office__locations-card-container">
            <div className="back-office__locations-card-icon-and-name-container">
              <FontAwesomeIcon
                icon="fa-solid fa-location-dot"
                className="back-office__locations-card-icon"
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
