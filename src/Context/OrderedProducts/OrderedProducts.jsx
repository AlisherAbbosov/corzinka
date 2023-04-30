import React from "react";
const Context = React.createContext(null);

function Provider({ children }) {
  const [ordered, setOrdered] = React.useState([]);
  return (
    <Context.Provider value={{ ordered, setOrdered }}>
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
