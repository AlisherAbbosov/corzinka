import React from "react";
import "./Contacts.scss";
import PhoneIcon from "../../Assets/Images/phone-icon.svg";
import WhatsappIcon from "../../Assets/Images/Whatsapp.svg";
import VkIcon from "../../Assets/Images/VK.svg";
import InstagramIcon from "../../Assets/Images/Instagram.svg";
import TelegramIcon from "../../Assets/Images/Telegram.svg";

import languages from "../../Localization/Localization";
import { Context } from "../../Context/Localization/Localization";

function Contacts() {
  const { lang } = React.useContext(Context);
  return (
    <div className="contacts">
      <div className="contacts__container">
        <div className="contacts__map-box">
          <p className="contacts__map-title">
            {languages[lang].contacts.title}
          </p>
          <iframe
            className="contacts__map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.626762389675!2d69.26962081519574!3d41.338728779268585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b5bc3472597%3A0xb7a352920b7c168a!2z0KLQvtGA0LPQvtCy0YvQtSDQoNGP0LTRiyAi0JzQsNC70LjQutCwIg!5e0!3m2!1sru!2s!4v1647167212785!5m2!1sru!2s"
            width={722.52}
            height={424}
            frameBorder="0"
          ></iframe>
        </div>

        <div className="contacts__social-box">
          <a
            target="blank"
            className="contacts__social"
            href={"https://www.whatsapp.com/?lang=" + lang}
          >
            <img
              className="contacts__social-icon"
              src={WhatsappIcon}
              alt="What'sapp logo"
              width={39}
              height={39}
            />
          </a>
          <a target="blank" className="contacts__social" href="https://vk.com">
            <img
              className="contacts__social-icon"
              src={VkIcon}
              alt="What'sapp logo"
              width={53}
              height={36}
            />
          </a>
          <a
            target="blank"
            className="contacts__social"
            href="https://www.instagram.com/"
          >
            <img
              className="contacts__social-icon"
              src={InstagramIcon}
              alt="What'sapp logo"
              width={39}
              height={39}
            />
          </a>
          <a
            target="blank"
            className="contacts__social"
            href="https://telegram.org/"
          >
            <img
              className="contacts__social-icon"
              src={TelegramIcon}
              alt="What'sapp logo"
              width={48}
              height={48}
            />
          </a>
        </div>
      </div>

      <a className="contacts__phone" href="tel:+998944347319">
        <img
          className="contacts__phone-icon"
          src={PhoneIcon}
          alt="Phone icon"
        />
        +998 94 434 73 19
      </a>
    </div>
  );
}

export default Contacts;
