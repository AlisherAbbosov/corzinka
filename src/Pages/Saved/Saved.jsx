import React from "react";
import "./Saved.scss"

import languages from "../../Localization/Localization";
import { Context as LanguageContext } from "../../Context/Localization/Localization";
import { Context as ProductContext } from "../../Context/Products/Products";
import { Context as SavedContext } from "../../Context/SavedProducts/SavedProducts";
import Card from "../../Components/Card/Card";
import EmptySaved from "../../Components/EmptySaved/EmptySaved";

function Saved() {
  const { lang } = React.useContext(LanguageContext);
  const { saved, setSaved } = React.useContext(SavedContext);
  const { products, setProducts } = React.useContext(ProductContext);

  const handleSave = evt => {
    let productId = evt.target.dataset.productId - 0;

    const foundProduct = products.find(p => p.id === productId);

    foundProduct.isSaved = !foundProduct.isSaved;
    setProducts([...products]);

    const savedProducts = products.filter(p => p.isSaved);

    setSaved([...savedProducts]);
  };
  return (
    <div className="saved">
      {saved.length === 0 ? (
<EmptySaved/>
      ) : (
        <div>
          <h2 className="saved__title page__title">{languages[lang].saved.title}</h2>

          <ul className="product-list">
          {saved.length > 0 &&
            saved.map(product => (
              <li className="product-item" key={product.id}>

<button
        className={`card__save-btn ${product?.isSaved ? "active" : ""}`}
        data-product-id={product.id}
        onClick={evt => handleSave(evt)}
        title="Add product to saved"
      ></button>
                <Card product={product} />
              </li>
            ))}
        </ul>
        </div>
      )}
    </div>
  );
}

export default Saved;
