import React from "react";
import { Context } from "../Context/Localization/Localization";
function GeneratePrice(price) {
  const { lang } = React.useContext(Context);
  switch (lang) {
    case "en":
      return `${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} Sum`;
    case "ru":
      return `${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} Сум`;
    case "uz":
      return `${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} So'm`;
  }
}

export default GeneratePrice;
