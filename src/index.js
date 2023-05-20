import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider as LangProvider } from "./Context/Localization/Localization";
import { Provider as SavedProvider } from "./Context/SavedProducts/SavedProducts";
import { Provider as BackedProvider } from "./Context/OrderedProducts/OrderedProducts";
import { Provider as ProductsProvider } from "./Context/Products/Products";
import { Provider as DeliveryProvider } from "./Context/HasDelivery/HasDelivery";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LangProvider>
        <SavedProvider>
          <BackedProvider>
            <ProductsProvider>
              <DeliveryProvider>
                <App />
              </DeliveryProvider>
            </ProductsProvider>
          </BackedProvider>
        </SavedProvider>
      </LangProvider>
    </BrowserRouter>
  </React.StrictMode>
);
