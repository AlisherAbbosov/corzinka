import React from "react";
const Context = React.createContext(null);

function Provider({ children }) {
  const [lang, setLang] = React.useState("ru");
  return (
    <Context.Provider value={{ lang, setLang }}>{children}</Context.Provider>
  );
}

export { Context, Provider };
