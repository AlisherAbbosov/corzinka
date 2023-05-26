import React from "react";
import "./Ordered.scss";

import { Context as OrderedContext } from "../../Context/OrderedProducts/OrderedProducts";
import { Context as LangContext } from "../../Context/Localization/Localization";

import languages from "../../Localization/Localization";

import { useNavigate } from "react-router-dom";

function Ordered() {
  const { lang } = React.useContext(LangContext);
  const { ordered } = React.useContext(OrderedContext);

  const [orderNumber, setOrderNumber] = React.useState(0);

  const navigate = useNavigate();

  React.useEffect(() => {
    setOrderNumber(Math.floor(Math.random() * 99999999));
  }, []);

  return (
    <div className="ordered">
      <div className="ordered__message-box">
        <p className="ordered__message card__title">
          {`${languages[lang].ordered.firstMessage}${orderNumber}, ${languages[lang].ordered.secondMessage}`}
        </p>
      </div>
    </div>
  );
}

export default Ordered;
