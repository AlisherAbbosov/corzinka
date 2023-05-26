import React from "react";
import "./Cart.scss";

import { Link } from "react-router-dom";

import { Context as LangContext } from "../../Context/Localization/Localization";
import { Context as BackedContext } from "../../Context/OrderedProducts/OrderedProducts";
import languages from "../../Localization/Localization";
import { Context as DeliveryContext } from "../../Context/HasDelivery/HasDelivery";

import EmptyBacked from "../../Components/EmptyBacked/EmptyBacked";

import deliveryIcon from "../../Assets/Images/deliver-icon.svg";
import Button from "../../Components/Button/Button";
import OrderedCard from "../../Components/OrderedCard/OrderedCard";
import GeneratePrice from "../../Functions/GeneratePrice";
import { GenerateTotalWithDelivery } from "../../Functions/GenerateTotal";

function Cart() {
  const { lang } = React.useContext(LangContext);
  const { ordered, setOrdered } = React.useContext(BackedContext);
  const { delivery, setDelivery } = React.useContext(DeliveryContext);

  const hasDelivery = evt => {
    if (evt.target.value === "with") {
      setDelivery(true);
    } else if (evt.target.value === "without") {
      setDelivery(false);
    }
  };

  return (
    <div className="cart">
      {ordered.length == 0 ? (
        <EmptyBacked />
      ) : (
        <>
          <h2 className="page__title">{languages[lang]?.cart.title}</h2>
          <div className="cart__container">
            <div className="cart__left">
              <ul className="cart__list">
                {ordered.map(data => (
                  <li key={data.product.id} className="cart__item">
                    <OrderedCard data={data} />
                  </li>
                ))}
              </ul>
              <div className="cart__delivery-box">
                <h3 className="cart__delivery-title page__title">
                  {languages[lang]?.cart.delivery}
                </h3>
                <iframe
                  className="contacts__map cart__map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.626762389675!2d69.26962081519574!3d41.338728779268585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b5bc3472597%3A0xb7a352920b7c168a!2z0KLQvtGA0LPQvtCy0YvQtSDQoNGP0LTRiyAi0JzQsNC70LjQutCwIg!5e0!3m2!1sru!2s!4v1647167212785!5m2!1sru!2s"
                  width={584.94}
                  height={173}
                  frameBorder="0"
                ></iframe>
                <div className="cart__delivery-bottom">
                  <img
                    className="cart__delivery-icon"
                    src={deliveryIcon}
                    width={21.1}
                    height={13}
                    alt="icon"
                  />
                  <select
                    className="cart__select"
                    onChange={evt => hasDelivery(evt)}
                    value={delivery ? "with" : "without"}
                  >
                    <option value="with">
                      {languages[lang]?.cart.byCourier}
                    </option>
                    <option value="without">
                      {languages[lang]?.cart.noDelivery}
                    </option>
                  </select>
                  <p className="cart__delivery-price text__secondary">
                    {delivery ? GeneratePrice("30 000") : ""}
                  </p>
                </div>
              </div>
            </div>

            <div className="cart__right">
              <div className="cart__right-wrapper">
                <div className="cart__right-top">
                  <p className="cart__right-total">
                    {languages[lang]?.cart.total}
                  </p>
                  <p className="cart__right-total">
                    {GenerateTotalWithDelivery()}
                  </p>
                </div>
                <Link to="/ordering">
                  <Button variant="black cart__btn">
                    {languages[lang]?.cart.button}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
