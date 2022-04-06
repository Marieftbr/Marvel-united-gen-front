import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function BackOfficeBoxesCard(props) {
  return (
    <div>
      {props.data.map((box) => {
        return (
          <div className="back-office__boxes-card-container">
            <FontAwesomeIcon
              icon="fa-solid fa-box-open"
              className="back-office__boxes-card-icon"
            />
            <img
              src={box.picture.url}
              alt="box"
              className="back-office__boxes-card-img"
            />
            <span className="back-office__boxes-card-name">{box.name}</span>
          </div>
        );
      })}
    </div>
  );
}
