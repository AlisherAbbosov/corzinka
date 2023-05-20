import React from "react";
const Context = React.createContext(null);

function Provider({ children }) {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      const res = await fetch("https://corzinka-api.onrender.com/products");
      const data = await res.json();
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
