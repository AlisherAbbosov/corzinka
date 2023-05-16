import React from "react";
const Context = React.createContext(null);

function Provider({ children }) {
  const [ordered, setOrdered] = React.useState(
    JSON.parse(window.localStorage.getItem("orders")) || []
  );

  React.useEffect(() => {
    window.localStorage.setItem("orders", JSON.stringify(ordered));
  }, [ordered]);

  return (
    <Context.Provider value={{ ordered, setOrdered }}>
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
