import React from "react";
import "./OrderingInfo.scss";
import promocodeIcon from "../../Assets/Images/promocode-icon.svg";

import languages from "../../Localization/Localization";
import { Context as LongContext } from "../../Context/Localization/Localization";
import { Context as OrderedContext } from "../../Context/OrderedProducts/OrderedProducts";
import { Context as DeliveryContext } from "../../Context/HasDelivery/HasDelivery";
import {
  GenerateTotal,
  GenerateTotalWithDelivery,
} from "../../Functions/GenerateTotal";
import GeneratePrice from "../../Functions/GeneratePrice";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

function OrderingInfo() {
  const { lang } = React.useContext(LongContext);
  const { ordered, setOrdered } = React.useContext(OrderedContext);
  const { delivery } = React.useContext(DeliveryContext);
  const [method, setMethod] = React.useState("credit-bank");

  const navigate = useNavigate();

  const getNumberOfOrders = () => {
    let number = 0;

    ordered.forEach(order => (number += order.count));
    return number;
  };
  let handleEnd = () => {
    navigate("/ordered");
    setOrdered([]);
  };
  return (
    <div className="orderinginfo">
      <div className="orderinginfo__top">
        <h4 className="orderinginfo__top-title page__title">
          {languages[lang]?.ordering.yourOrder}
        </h4>
        <div className="orderinginfo__top-infobox">
          <p className="orderinginfo__top-info">
            <span>
              {languages[lang]?.ordering.products} ({getNumberOfOrders()}x)
            </span>
            <span>{GenerateTotal()}</span>
          </p>

          {delivery && (
            <p className="orderinginfo__top-info">
              <span>{languages[lang]?.ordering.delivery}</span>
              <span>{GeneratePrice("30000")}</span>
            </p>
          )}

          <p className="orderinginfo__top-info">
            <span>{languages[lang]?.ordering.payment}</span>
            <span>{GenerateTotalWithDelivery()}</span>
          </p>
        </div>
      </div>
      <div className="orderinginfo__middle">
        <h4 className="orderinginfo__top-title page__title">
          {languages[lang].ordering.method}
        </h4>
        <div>
          <div className="method__boxes">
            {method === "credit-bank" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={16}
                width={17}
                viewBox="0 0 576 512"
              >
                <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={16}
                width={17}
                viewBox="0 0 576 512"
              >
                <path d="M0 112.5V422.3c0 18 10.1 35 27 41.3c87 32.5 174 10.3 261-11.9c79.8-20.3 159.6-40.7 239.3-18.9c23 6.3 48.7-9.5 48.7-33.4V89.7c0-18-10.1-35-27-41.3C462 15.9 375 38.1 288 60.3C208.2 80.6 128.4 100.9 48.7 79.1C25.6 72.8 0 88.6 0 112.5zM128 416H64V352c35.3 0 64 28.7 64 64zM64 224V160h64c0 35.3-28.7 64-64 64zM448 352c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM384 256c0 61.9-43 112-96 112s-96-50.1-96-112s43-112 96-112s96 50.1 96 112zM252 208c0 9.7 6.9 17.7 16 19.6V276h-4c-11 0-20 9-20 20s9 20 20 20h24 24c11 0 20-9 20-20s-9-20-20-20h-4V208c0-11-9-20-20-20H272c-11 0-20 9-20 20z" />
              </svg>
            )}
            <select
              className="method__select"
              defaultValue="credit-bank"
              onChange={evt => setMethod(evt.target.value)}
            >
              <option value="credit-bank">
                {languages[lang].ordering.card}
              </option>
              <option value="cash">{languages[lang].ordering.cash}</option>
            </select>
          </div>
          <div className="method__boxes">
            <label htmlFor="method__input">
              <img src={promocodeIcon} alt="icon" />
            </label>
            <input
              className="method__input"
              type="text"
              placeholder={languages[lang].ordering.promocode}
            />
          </div>
        </div>
        <p></p>
      </div>
      <div className="orderinginfo__bottom">
        <h4 className="orderinginfo__bottom-title card__title">
          {languages[lang].ordering.numberOfRecipient}
        </h4>
        <div className="deliverycard__input-box">
          <input
            type="tel"
            className=" orderinginfo__bottom-input "
            placeholder="+998 __ ___ __ __"
            pattern="[0-9]{3}[0-9]{2}[0-9]{3}[0-9]{2}[0-9]{2}"
            required
          />
          <label
            htmlFor="orderinginfo__bottom-input"
            className=" deliverycard__label"
          ></label>
        </div>
      </div>

      <Button type="submit" variant="black end-btn" handleEnd={handleEnd}>
        {languages[lang].ordering.endButton}
      </Button>
    </div>
  );
}

export default OrderingInfo;
