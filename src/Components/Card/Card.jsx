import "./Card.scss";
import RatingIcon from "../../Assets/Images/rating-icon.svg";
import { Context as LangContext } from "../../Context/Localization/Localization";
import { useNavigate } from "react-router-dom";

import React from "react";
import GeneratePrice from "../../Functions/GeneratePrice";

function Card({ product }) {
  const navigate = useNavigate();
  const { lang } = React.useContext(LangContext);

  return (
    <div className="card" onClick={() => navigate("/product/" + product.id)}>
     
      <div className="card__img-box">
        <img className="card__img" src={product.images[0]} alt="the product" />
      </div>
      <div className="card__body">
        <h4 className="card__product-title card__title">
          {product[lang]?.title}
        </h4>
        <div className="card__body-bottom">
          <p className="card__product-rating">
            <img
              className="card__product-rating-icon"
              src={RatingIcon}
              alt="Rating icon"
            />
            {product.rating.rate}
          </p>
          <p className="card__product-cost">{GeneratePrice(product.price)}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
