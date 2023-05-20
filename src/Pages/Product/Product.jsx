import React from "react";

import "./Product.scss";

import BackedIcon from "../../Assets/Images/backet-light.svg";

import { useParams, useNavigate, Link } from "react-router-dom";
import { Context as ProductsContext } from "../../Context/Products/Products";
import { Context as LangContext } from "../../Context/Localization/Localization";
import { Context as SavedContext } from "../../Context/SavedProducts/SavedProducts";
import languages from "../../Localization/Localization";
import Button from "../../Components/Button/Button";

import { Context as OrderedProductsContext } from "../../Context/OrderedProducts/OrderedProducts";
import GeneratePrice from "../../Functions/GeneratePrice";

function Product() {
  const { products, setProducts } = React.useContext(ProductsContext);
  const { ordered, setOrdered } = React.useContext(OrderedProductsContext);
  const { saved, setSaved } = React.useContext(SavedContext);
  const { lang } = React.useContext(LangContext);
  const { product_id } = useParams();
  const [hasOrder, setHasOrder] = React.useState(false);
  const product = products.find(p => p?.id == product_id);

  const handleSave = evt => {
    let productId = evt.target.dataset.productId - 0;

    const foundProduct = products.find(p => p.id === productId);

    foundProduct.isSaved = !foundProduct.isSaved;
    setProducts([...products]);

    const savedProducts = products.filter(p => p.isSaved);

    setSaved([...savedProducts]);
  };

  const handleAddToBacked = () => {
    const newOrderedProduct = {
      count: 1,
      product,
    };

    if (ordered.length == 0) {
      setOrdered([...ordered, newOrderedProduct]);
    }

    for (let order of ordered) {
      if (order.product.id !== newOrderedProduct.product.id) {
        setHasOrder(false);
      } else {
        setHasOrder(true);
        alert("You have already added!");
        return;
      }
    }

    if (!hasOrder) {
      setOrdered([...ordered, newOrderedProduct]);
    }
  };

  const handleBuy = () => {
    const newOrderedProduct = {
      count: 1,
      product,
    };
    if (ordered.length == 0) {
      setOrdered([...ordered, newOrderedProduct]);
      return;
    } else {
      for (let order of ordered) {
        if (order.product.id != product.id) {
          setOrdered([...ordered, newOrderedProduct]);
        } else {
          setOrdered([...ordered]);
          return;
        }
      }
    }
  };

  return (
    <div className="product">
      <div className="product__top">
        <button
          className={`product__save-btn ${product.isSaved ? "active" : ""}`}
          data-product-id={product.id}
          onClick={evt => handleSave(evt)}
          title="Add product to saved"
        ></button>
        <div className="product__images-box">
          {product.images.map(img => (
            <img className="product__img" src={img} key={img} />
          ))}
        </div>
        <div className="product__title-box">
          <h3 className="product__title product__title-secondary">
            {product[lang]?.title}
          </h3>
          <p className="product__price">{GeneratePrice(product.price)}</p>
        </div>
      </div>
      <div className="product__bottom">
        <div className="product__characteristics">
          <div className="product__characteristics-top">
            <p>{languages[lang].product.characteristicsTitle}</p>
          </div>
          <ul className="product__characteristics-bottom">
            {Object.keys(product[lang].characteristics).map(key => (
              <li className="product__characteristics-item" key={key}>
                {key} : {product[lang]?.characteristics[key]}
              </li>
            ))}
          </ul>
        </div>
        <div className="product__btn-box">
          <Link to="/cart" onClick={() => handleBuy()}>
            <Button variant="black product-buy">
              {languages[lang]?.product.buttonBuy}
            </Button>
          </Link>
          <Button
            variant="black product-add"
            handleaddtobacked={handleAddToBacked}
          >
            <img
              className="product-add-icon"
              src={BackedIcon}
              alt="Backed icon"
            />
            {languages[lang].product.addToBacked}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Product;
