import React from "react";
import "./Card.scss";

/**
 * Using react component based on function
 * @param {*} props
 * @returns
 */
export const Card = (props) => {
  const { name, picture, price, isActive } = props;
  let divStyle = {};
  if (isActive !== "true") {
    divStyle = {
      filter: "grayscale(100%)",
      backgroundColor: "rgb(200, 200, 200)",
      pointerEvents: 'none',
    };
  }
  return (
    <div className="card-wrapper" style={divStyle}>
      <div className="card-margin">
        <div className="card-header">
          <p className="card-title">{name}</p>
          <span className="material-icons card-favorite">favorite_border</span>
        </div>
        <img className="card-img" src={picture} alt={name} />
        <div className="card-bottom">
          <p className="price">$ {price}</p>
        </div>
      </div>
    </div>
  );
};
