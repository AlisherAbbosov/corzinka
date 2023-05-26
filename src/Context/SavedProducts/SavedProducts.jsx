import React from "react";
const Context = React.createContext(null);

function Provider({ children }) {
  const [saved, setSaved] = React.useState(
    window.localStorage.getItem("saved") || []
  );

  return (
    <Context.Provider value={{ saved, setSaved }}>{children}</Context.Provider>
  );
}

export { Context, Provider };
