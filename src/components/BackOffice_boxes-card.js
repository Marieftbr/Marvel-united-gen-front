import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import { apiDelete } from "../api";

export default function BackOfficeBoxesCard(props) {
  const navigate = useNavigate();

  const deleteData = async (id) => {
    await apiDelete(`/box/${id}`);
    window.location.reload();
  };

  return (
    <div className="back-office__box-cards-wrapper">
      {props.data.map((box) => {
        return (
          <div className="back-office__boxes-card-container" key={box._id}>
            <FontAwesomeIcon
              icon="fa-solid fa-box"
              className="back-office__boxes-card-icon"
            />
            <FontAwesomeIcon
              icon="fa-solid fa-pen"
              className="back-office__card-pen-icon"
              onClick={() => {
                navigate(`/update/box/${box._id}`);
              }}
            />
            <FontAwesomeIcon
              icon="fa-solid fa-trash"
              className="back-office__card-trash-icon"
              onClick={() => {
                deleteData(box._id);
              }}
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
