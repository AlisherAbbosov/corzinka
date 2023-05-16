import "./Main.scss";

import { Route, Routes } from "react-router-dom";
import Saved from "../../Pages/Saved/Saved";
import Contacts from "../../Pages/Contacts/Contacts";
import Service from "../../Pages/Service/Service";
import Ordering from "../../Pages/Ordering/Ordering";
import Product from "../../Pages/Product/Product";
import Home from "../../Pages/Home/Home";
import Cart from "../../Pages/Cart/Cart";

function Main() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/service-requirements" element={<Service />} />
        <Route path="/ordering" element={<Ordering />} />
        <Route path="/product/:product_id" element={<Product />} />
      </Routes>
    </div>
  );
}
export default Main;
