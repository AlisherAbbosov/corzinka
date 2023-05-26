import React from "react";
import { Context as LangContext } from "../Context/Localization/Localization";

function usePrice(price) {
  const { lang } = React.useContext(LangContext);

  switch (lang) {
    case "en":
      return [`${price} Sum`];
    case "ru":
      return [`${price} Сум`];
    case "uz":
      return [`${price} So'm`];
  }
}

export default usePrice;
