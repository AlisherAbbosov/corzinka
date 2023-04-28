import "./Header.scss";
import Logo from "../../Assets/Images/logo.svg";
import SavedIcon from "../../Assets/Images/saved-logo.svg";
import BasketIcon from "../../Assets/Images/basket-icon.svg";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={Logo} alt="Logo of the site" />
      </Link>
      <div className="header__icon-box">
        <NavLink to="/saved">
          <img
            className="header__saved-icon"
            src={SavedIcon}
            alt="Saved products icon"
          />
        </NavLink>
        <NavLink to="/ordered">
          <img src={BasketIcon} alt="Ordered products icon" />
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
