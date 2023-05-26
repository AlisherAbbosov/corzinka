import React from "react";
import "./Ordering.scss";
import InfoDelivery from "../../Components/InfoDelivery/InfoDelivery";

import { Context as DeliveryContext } from "../../Context/HasDelivery/HasDelivery";
import { Context as OrderContext } from "../../Context/OrderedProducts/OrderedProducts";
import OrderingInfo from "../../Components/OrderingInfo/OrderingInfo";
import { useNavigate } from "react-router-dom";

function Ordering() {
  const { delivery } = React.useContext(DeliveryContext);
  const { ordered } = React.useContext(OrderContext);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (ordered.length == 0) {
      navigate("/");
    }
  }, []);
  return (
    <div className={`ordering ${delivery ? "center" : ""}`}>
      <div className="ordering__container">
        <h2 className="page__title">Оформление заказа</h2>
        <form className="ordering__wrapper">
          {delivery && <InfoDelivery />}
          <OrderingInfo />
        </form>
      </div>
    </div>
  );
}

export default Ordering;
