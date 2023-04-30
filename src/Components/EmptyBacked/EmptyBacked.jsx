import React from "react";
import "./EmptyBacked.scss";
import EmptyBackedIcon from "../../Assets/Images/empty-backet.png";
import languages from "../../Localization/Localization";
import { Context } from "../../Context/Localization/Localization";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

function EmptyBacked() {
  const { lang } = React.useContext(Context);
  return (
    <div className="emptybacked">
      <img
        className="emptybacked__icon"
        src={EmptyBackedIcon}
        alt="Empty backed icon"
      />
      <h2 className="emptybacked__title">
        {languages[lang].emptybacked.title}
      </h2>
      <p className="emptybacked__text">{languages[lang].emptybacked.text}</p>
      <NavLink to="/">
        <Button variant="black">{languages[lang].emptybacked.button}</Button>
      </NavLink>
    </div>
  );
}

export default EmptyBacked;
