import React from "react";
import "./Header.scss";
import Logo from "../../Assets/Images/logo.svg";
import SavedIcon from "../../Assets/Images/saved-logo.svg";
import BasketIcon from "../../Assets/Images/basket-icon.svg";
import { Link, NavLink } from "react-router-dom";
import { Context as SavedContext } from "../../Context/SavedProducts/SavedProducts";
import { Context as OrderedContext } from "../../Context/OrderedProducts/OrderedProducts";

function Header() {
  const { saved } = React.useContext(SavedContext);
  const { ordered } = React.useContext(OrderedContext);
  return (
    <header className="header">
      <Link to="/">
        <img src={Logo} alt="Logo of the site" />
      </Link>
      <div className="header__icon-box">
        <NavLink className="header__saved-link" to="/saved">
          <img
            className="header__saved-icon"
            src={SavedIcon}
            alt="Saved products icon"
          />
          <span className="header__saved-count header__counts">
            {saved.length}
          </span>
        </NavLink>
        <NavLink className="header__saved-link" to="/cart">
          <img src={BasketIcon} alt="Ordered products icon" />
          <span className="header__order-count header__counts">
            {ordered.length}
          </span>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
