import React from "react";
import "./Home.scss";

import Card from "../../Components/Card/Card";
import { Context as ProductContext } from "../../Context/Products/Products";
import { Context as SavedContext } from "../../Context/SavedProducts/SavedProducts";
import { Context as LangContext } from "../../Context/Localization/Localization";

import Loading from "../../Components/Loading/Loading";
import languages from "../../Localization/Localization";

function Home() {
  const { products, setProducts } = React.useContext(ProductContext);
  const { setSaved } = React.useContext(SavedContext);
  const { lang } = React.useContext(LangContext);


 
  const handleSave = evt => {
    let productId = evt.target.dataset.productId - 0;

    const foundProduct = products.find(p => p.id === productId);

    foundProduct.isSaved = !foundProduct.isSaved;
    setProducts([...products]);

    const savedProducts = products.filter(p => p.isSaved);

    setSaved([...savedProducts]);
  };

  return (
    <div className="home">
      <div>
        <h2 className="category-name">{languages[lang]?.home?.category}</h2>
        <ul className="product-list">
          {products.length > 0 ?
            products.map(product => (
              <li className="product-item" key={product.id}>
                 <button
        className={`card__save-btn ${product.isSaved ? "active" : ""}`}
        data-product-id={product.id}
        onClick={evt => handleSave(evt)}
        title="Add product to saved"
      ></button>
                <Card product={product} />
              </li>
            )) : <Loading/>}
          
        </ul>
      </div>
    </div>
  );
}

export default Home;
