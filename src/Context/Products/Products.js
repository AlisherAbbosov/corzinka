import React from "react";
import { Context as SavedProducts } from "../SavedProducts/SavedProducts";

const Context = React.createContext(null);

function Provider({ children }) {
  const { saved } = React.useContext(SavedProducts);
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      const res = await fetch("https://corzinka-api.onrender.com/products");
      const data = await res.json();

      data.map(element => {
        saved.map(p => {
          if (element.id === p.id) {
            element.isSaved = true;
          }
        });
      });

      setProducts([...data]);
    })();
  }, []);

  return (
    <Context.Provider value={{ products, setProducts }}>
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
