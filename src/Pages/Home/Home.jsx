import React from "react";
import "./Home.scss";

import Card from "../../Components/Card/Card";
import { Context as ProductsContext } from "../../Context/Products/Products";

function Home() {
  const { products } = React.useContext(ProductsContext);

  return (
    <div className="home">
      <div>
        <h2 className="category-name">Электроника</h2>
        <ul className="product-list">
          {products.length > 0 &&
            products.map(product => (
              <li className="product-item" key={product.id}>
                <Card product={product} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
