import React from "react";

import "./Footer.scss";

import Logo from "../../Assets/Images/logo.svg";
import VkLogo from "../../Assets/Images/VK.svg";
import InstagramLogo from "../../Assets/Images/Instagram.svg";
import TelegramLogo from "../../Assets/Images/Telegram.svg";
import WhatsappLogo from "../../Assets/Images/Whatsapp.svg";
import LanguageIcon from "../../Assets/Images/lang-icon.svg";
import { NavLink, Link } from "react-router-dom";

import { Context } from "../../Context/Localization/Localization";

import languages from "../../Localization/Localization";

function Footer() {
  const { lang, setLang } = React.useContext(Context);
  return (
    <footer className="footer">
      <div>
        <Link to="/">
          <img src={Logo} alt="Logo of the Site" />
        </Link>
      </div>
      <ul>
        <li className="footer__texts">
          <NavLink
            className={({ isActive }) =>
              "footer__texts " + (isActive ? "footer__texts--active" : "")
            }
            to="/saved"
          >
            {languages[lang]?.footer.saved}
          </NavLink>
        </li>
        <li className="footer__texts">
          <NavLink
            className={({ isActive }) =>
              "footer__texts " + (isActive ? "footer__texts--active" : "")
            }
            to="/cart"
          >
            {languages[lang]?.footer.backed}
          </NavLink>
        </li>
        <li className="footer__texts">
          <NavLink
            className={({ isActive }) =>
              "footer__texts " + (isActive ? "footer__texts--active" : "")
            }
            to="/contacts"
          >
            {languages[lang]?.footer.contacts}
          </NavLink>
        </li>
      </ul>
      <div>
        <NavLink
          className={({ isActive }) =>
            "footer__texts footer__service " +
            (isActive ? "footer__texts--active" : "")
          }
          to="/service-requirements"
        >
          {languages[lang]?.footer.service}
        </NavLink>
        <div>
          <ul className="language__list">
            <li className="language__item">
              <img src={LanguageIcon} alt="Language icon" />
            </li>
            <li className="language__item">
              <button
                className={`language__item ${
                  lang === "uz" ? "language__item--active" : ""
                } `}
                onClick={() => {
                  setLang("uz");
                }}
              >
                Uz
              </button>
            </li>
            <li className="language__item">
              <button
                className={`language__item ${
                  lang === "ru" ? "language__item--active" : ""
                } `}
                onClick={() => {
                  setLang("ru");
                }}
              >
                Рус
              </button>
            </li>
            <li className="language__item">
              <button
                className={`language__item ${
                  lang === "en" ? "language__item--active" : ""
                } `}
                onClick={() => {
                  setLang("en");
                }}
              >
                Eng
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__social-box">
        <a
          className="footer__social-icons"
          target="_blank"
          href="https://vk.com/"
        >
          <img src={VkLogo} alt="Vk logo" />
        </a>
        <a
          className="footer__social-icons"
          target="_blank"
          href="https://www.instagram.com/"
        >
          <img src={InstagramLogo} alt="Instagram logo" />
        </a>
        <a
          className="footer__social-icons"
          target="_blank"
          href="https://t.me/alisherabbosov"
        >
          <img src={TelegramLogo} alt="Telegram logo" />
        </a>
        <a
          className="footer__social-icons"
          target="_blank"
          href={"https://www.whatsapp.com/?lang=" + lang}
        >
          <img src={WhatsappLogo} alt="Whatsapp logo" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
