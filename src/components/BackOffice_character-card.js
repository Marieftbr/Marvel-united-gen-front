import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ghostSpider from "../pictures/ghost-spider.jpg";

export default function BackOfficeCharacterCard(props) {
  return (
    <div className="back-office__character-card-container">
      <FontAwesomeIcon
        icon="fa-solid fa-user"
        className="back-office__character-card-icon"
      />
      <img
        src={ghostSpider}
        alt="character"
        className="back-office__character-card-img"
      />
      <span className="back-office__character-card-name">Ghost-spider</span>
      <span className="back-office__character-card-type">Hero</span>
    </div>
  );
}
