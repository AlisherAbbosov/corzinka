import React from "react";
import "./InfoDelivery.scss";

import languages from "../../Localization/Localization";
import { Context } from "../../Context/Localization/Localization";
import GeneratePrice from "../../Functions/GeneratePrice";

import locationIcon from "../../Assets/Images/location-icon.svg";

function InfoDelivery() {
  const { lang } = React.useContext(Context);
  return (
    <div className="deliverycard">
      <div className="deliverycard__top">
        <h3 className="card__title deliverycard__title">
          {languages[lang]?.ordering.addressTitle}
        </h3>
        <p className="cart__delivery-price text__secondary">
          {GeneratePrice("30000")}
        </p>
      </div>
      <iframe
        className="contacts__map deliverycard__map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.626762389675!2d69.26962081519574!3d41.338728779268585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b5bc3472597%3A0xb7a352920b7c168a!2z0KLQvtGA0LPQvtCy0YvQtSDQoNGP0LTRiyAi0JzQsNC70LjQutCwIg!5e0!3m2!1sru!2s!4v1647167212785!5m2!1sru!2s"
        width={375.3}
        height={146}
        frameborder="0"
      ></iframe>
      <div className="deliverycard__body">
        <p className="deliverycard__body-title text__secondary">
          <img
            className="deliverycard__location-icon"
            src={locationIcon}
            alt="location icon"
          />
          {languages[lang]?.ordering.address}
        </p>
        <div>
          <select
            className="deliverycard__input deliverycard__select"
            required
            defaultValue=""
          >
            <option
              className="deliverycard__select-option-slected"
              value=""
              disabled
              hidden
            >
              {languages[lang]?.ordering.city}
            </option>
            <option value="tashkent" className="deliverycard__select-option">
              Tashkent
            </option>
            <option value="samarkhand" className="deliverycard__select-option">
              Samarkhand
            </option>
            <option value="bukhara" className="deliverycard__select-option">
              Bukhara
            </option>
          </select>
        </div>

        <div className="deliverycard__input-box">
          <input
            type="text"
            placeholder={languages[lang]?.ordering.street}
            className="deliverycard__input-street deliverycard__input"
            required
          />
          <label
            className="deliverycard__label deliverycard__label-street"
            htmlFor="deliverycard__input-street"
          ></label>
        </div>

        <div className="deliverycard__body-bottom">
          <div className="deliverycard__input-box">
            <input
              type="text"
              placeholder={languages[lang]?.ordering.house}
              className="deliverycard__input-house deliverycard__input"
              required
            />
            <label
              className="deliverycard__label deliverycard__label-house"
              htmlFor="deliverycard__input-house"
            ></label>
          </div>

          <div className="deliverycard__input-box">
            <input
              type="text"
              placeholder={languages[lang]?.ordering.entrance}
              className="deliverycard__input-entrance deliverycard__input"
              required
            />
            <label
              className="deliverycard__label deliverycard__label-entrance"
              htmlFor="deliverycard__input-entrance"
            ></label>
          </div>

          <div className="deliverycard__input-box">
            <input
              type="text"
              placeholder={languages[lang]?.ordering.apartment}
              className="deliverycard__input-apartment deliverycard__input"
              required
            />
            <label
              className="deliverycard__label deliverycard__label-apartment"
              htmlFor="deliverycard__input-apartment"
            ></label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoDelivery;
