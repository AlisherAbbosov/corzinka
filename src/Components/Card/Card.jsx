import "./Card.scss";
import RatingIcon from "../../Assets/Images/rating-icon.svg";
import CardImg from "../../Assets/Images/card-img.jpg";
import { Context as LangContext } from "../../Context/Localization/Localization";
import { Link, useNavigate } from "react-router-dom";

import React from "react";
import GeneratePrice from "../../Functions/GeneratePrice";
import saveIcon from "../../Assets/Images/like-icon.svg";
import { Context as SavedContext } from "../../Context/SavedProducts/SavedProducts";
import { Context as ProductContext } from "../../Context/Products/Products";

function Card({ product }) {
  const navigate = useNavigate();
  const { lang } = React.useContext(LangContext);
  const { products, setProducts } = React.useContext(ProductContext);
  const { saved, setSaved } = React.useContext(SavedContext);

  const handleSave = evt => {
    let productId = evt.target.dataset.productId - 0;

    const foundProduct = products.find(p => p.id === productId);

    foundProduct.isSaved = !foundProduct.isSaved;
    setProducts([...products]);
    console.log(products);
  };

  return (
    <div className="card" onClick={() => navigate("/product/" + product.id)}>
      <button
        className={`card__save-btn ${product.isSaved ? "active" : ""}`}
        data-product-id={product.id}
        onClick={evt => handleSave(evt)}
        title="Add product to saved"
      ></button>
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
