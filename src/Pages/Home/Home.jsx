import React from "react";
import "./Home.scss";

import Card from "../../Components/Card/Card";
import RatingIcon from "../../Assets/Images/rating-icon.svg";
import CardImg from "../../Assets/Images/card-img.jpg";
import { Link, useNavigate } from "react-router-dom";
import { Context as ProductsContext } from "../../Context/Products/Products";

function Home() {
  const { products } = React.useContext(ProductsContext);
  const navigate = useNavigate();
  return (
    <div className="home">
      <div>
        <h2 className="category-name">Электроника</h2>
        <ul className="product-list">
          {products.length > 0 &&
            products.map(product => (
              <li
                onClick={() => navigate("/product/" + product.id)}
                className="product-item"
                key={product.id}
              >
                <Card product={product} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
