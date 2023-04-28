import "./Footer.scss";
import Logo from "../../Assets/Images/logo.svg";
import VkLogo from "../../Assets/Images/VK.svg";
import InstagramLogo from "../../Assets/Images/Instagram.svg";
import TelegramLogo from "../../Assets/Images/Telegram.svg";
import WhatsappLogo from "../../Assets/Images/Whatsapp.svg";
import { NavLink, Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <Link to="/">
          <img src={Logo} alt="Logo of the Site" />
        </Link>
      </div>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              "footer__texts " + (isActive ? "footer__texts--active" : "")
            }
            to="/saved"
          >
            Избранное
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              "footer__texts " + (isActive ? "footer__texts--active" : "")
            }
            to="/ordered"
          >
            Корзина
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              "footer__texts " + (isActive ? "footer__texts--active" : "")
            }
            to="/contacts"
          >
            Контакты
          </NavLink>
        </li>
      </ul>
      <div>
        <NavLink
          className={({ isActive }) =>
            "footer__texts " + (isActive ? "footer__texts--active" : "")
          }
          to="/service-requirements"
        >
          Условия сервиса
        </NavLink>
        <div></div>
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
        <a className="footer__social-icons" target="_blank" href="#link">
          <img src={TelegramLogo} alt="Telegram logo" />
        </a>
        <a className="footer__social-icons" target="_blank" href="#link">
          <img src={WhatsappLogo} alt="Whatsapp logo" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
