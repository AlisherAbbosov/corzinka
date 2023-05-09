import "./Card.scss";
import RatingIcon from "../../Assets/Images/rating-icon.svg";
import CardImg from "../../Assets/Images/card-img.jpg";
import { Context as LangContext } from "../../Context/Localization/Localization";
import { Navigate } from "react-router-dom";
import React from "react";

function Card({ product }) {
  const { lang } = React.useContext(LangContext);

  const generatePrice = () => {
    switch (lang) {
      case "en":
        return `${product.price} Sum`;
      case "ru":
        return `${product.price} Сум`;
      case "uz":
        return `${product.price} So'm`;
    }
  };
  return (
    <div className="card">
      <div className="card__img-box">
        <img className="card__img" src={product.images[0]} alt="the product" />
      </div>
      <div className="card__body">
        <h4 className="card__product-title">{product[lang]?.title}</h4>
        <div className="card__body-bottom">
          <p className="card__product-rating">
            <img
              className="card__product-rating-icon"
              src={RatingIcon}
              alt="Rating icon"
            />
            {product.rating.rate}
          </p>
          <p className="card__product-cost">{generatePrice()}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
