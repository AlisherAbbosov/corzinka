import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider as LangProvider } from "./Context/Localization/Localization";
import { Provider as SavedProvider } from "./Context/SavedProducts/SavedProducts";
import { Provider as BackedProvider } from "./Context/OrderedProducts/OrderedProducts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LangProvider>
        <SavedProvider>
          <BackedProvider>
            <App />
          </BackedProvider>
        </SavedProvider>
      </LangProvider>
    </BrowserRouter>
  </React.StrictMode>
);
