import React from "react";

import "./ServiceContent.scss";

import languages from "../../Localization/Localization";
import { Context } from "../../Context/Localization/Localization";

function ServiceContent() {
  const { lang } = React.useContext(Context);
  return (
    <div className="service__content">
      <h4 className="service__content-title">
        {languages[lang].service.title}
      </h4>
      <p className="service__content-text">{languages[lang].service.text}</p>
    </div>
  );
}

export default ServiceContent;
