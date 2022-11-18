import React from "react";
import noImage from "../utils/no-image-available.png";
import "../App.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { amber } from "@mui/material/colors";
const color = amber[500];

const Card = ({ image, title, year, addFavorite, isFavorite }) => {
  return (
    <div className="card">
      <div className="icon" onClick={addFavorite}>
        {isFavorite ? (
          <StarIcon sx={{ color: amber[500] }} checked />
        ) : (
          <StarBorderIcon sx={{ color: amber[500] }} />
        )}
      </div>
      {image === "N/A" ? (
        <img src={noImage} alt={title} />
      ) : (
        <img src={image} alt={title} />
      )}

      <div className="info">
        <span className="title">{title}</span>
        <span className="year">{year}</span>
      </div>
    </div>
  );
};

export default Card;
