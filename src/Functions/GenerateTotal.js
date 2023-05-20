import React from "react";

import { Context as OrderedContext } from "../Context/OrderedProducts/OrderedProducts";

import { Context as DeliveryContext } from "../Context/HasDelivery/HasDelivery";
import GeneratePrice from "./GeneratePrice";

function GenerateTotalWithDelivery() {
  const { ordered } = React.useContext(OrderedContext);
  const { delivery } = React.useContext(DeliveryContext);

  let total = 0;

  ordered.forEach(order => (total += order.product.price * order.count));

  if (delivery) {
    return GeneratePrice(total + 30000);
  } else if (!delivery) {
    return GeneratePrice(total);
  }
}

function GenerateTotal() {
  const { ordered } = React.useContext(OrderedContext);
  let total = 0;

  ordered.forEach(order => (total += order.product.price * order.count));
  return GeneratePrice(total);
}

export { GenerateTotalWithDelivery, GenerateTotal };
