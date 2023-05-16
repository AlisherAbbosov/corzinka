import React from "react";
import { Context as LangContext } from "../../Context/Localization/Localization";
import { Context as BackedContext } from "../../Context/OrderedProducts/OrderedProducts";
import EmptyBacked from "../../Components/EmptyBacked/EmptyBacked";

function Cart() {
  const { lang } = React.useContext(LangContext);
  const { ordered, setOrdered } = React.useContext(BackedContext);
  return (
    <div className="ordered">
      {ordered.length == 0 ? (
        <EmptyBacked />
      ) : (
        <>
          <div className="ordered__container">Cart</div>
        </>
      )}
    </div>
  );
}

export default Cart;
