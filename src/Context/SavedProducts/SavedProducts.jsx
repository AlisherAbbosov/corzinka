import React from "react";
const Context = React.createContext(null);

function Provider({ children }) {
  const [saved, setSaved] = React.useState(
   JSON.parse( window.localStorage.getItem("saved")) || []
  );

  React.useEffect(() => {
    window.localStorage.setItem("saved", JSON.stringify(saved));
  }, [saved]);

  return (
    <Context.Provider value={{ saved, setSaved }}>{children}</Context.Provider>
  );
}

export { Context, Provider };
