import React from "react";

import "./EmptySaved.scss"

import SavedIcon from "../../Assets/Images/like-icon.svg"
import languages from "../../Localization/Localization"

import { Context as LangContext } from "../../Context/Localization/Localization";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

function EmptySaved () {
  const { lang } = React.useContext(LangContext);


  return <div className="emptysaved">
      <img
        className="emptysaved__icon"
        src={SavedIcon}
        alt="Empty backed icon"
      />
      <h2 className="emptysaved__title">
        {languages[lang].emptysaved.title}
      </h2>
      <p className="emptysaved__text">{languages[lang].emptysaved.text}</p>
      <NavLink to="/">
        <Button variant="black">{languages[lang].emptysaved.button}</Button>
      </NavLink>
    </div>

}

export default EmptySaved