import React from "react";
import "./OrderedCard.scss";

import { Context as LangContext } from "../../Context/Localization/Localization";
import { Context as OrderedContext } from "../../Context/OrderedProducts/OrderedProducts";
import GeneratePrice from "../../Functions/GeneratePrice";

function OrderedCard({ data }) {
  const { lang } = React.useContext(LangContext);
  const { ordered, setOrdered } = React.useContext(OrderedContext);

  const handleRemover = evt => {
    let productId = evt.target.dataset.productId - 0;
    if (data.count > 1) {
      const fountProduct = ordered.find(
        order => order.product.id === productId
      );
      fountProduct.count -= 1;
      setOrdered([...ordered]);
    }
  };

  const handleAdd = evt => {
    let productId = evt.target.dataset.productId - 0;

    const fountProduct = ordered.find(order => order.product.id === productId);
    fountProduct.count += 1;
    setOrdered([...ordered]);
  };

  let handleDelete = evt => {
    let productId = evt.target.dataset.productId - 0;

    let filteredOrders = ordered.filter(
      order => order.product.id !== productId
    );

    setOrdered([...filteredOrders]);
  };

  return (
    <div className="cart__card">
      <div className="cart__card-top">
        <img
          className="cart__card-img"
          width={146.53}
          height={136}
          src={data.product.images[0]}
          alt={data.product.title}
        />
        <div>
          <h4 className="cart__card-title">{data.product[lang].title}</h4>
          <p className="cart__card-price">
            {GeneratePrice(data.product.price)}
          </p>
        </div>

        <button
          className="cart__card-delete"
          data-product-id={data.product.id}
          onClick={evt => handleDelete(evt)}
          title="Delete product from the cart"
        ></button>
      </div>
      <div className="cart__card-bottom">
        <div className="cart__card-quantity-box">
          <button
            className={`cart__card-quantity-minus cart__card-quantity-btn ${
              data.count === 1 ? "disabled" : ""
            }`}
            data-product-id={data.product.id}
            onClick={evt => handleRemover(evt)}
          ></button>

          <p className="cart__card-quantity">{data.count}</p>

          <button
            className="cart__card-quantity-plus cart__card-quantity-btn"
            data-product-id={data.product.id}
            onClick={evt => handleAdd(evt)}
          ></button>
        </div>
        <p className="cart__card-totalprice">
          {GeneratePrice(data.product.price * data.count)}
        </p>
      </div>
    </div>
  );
}

export default OrderedCard;
