import React from "react";
const Context = React.createContext(null);

function Provider({ children }) {
  const [delivery, setDelivery] = React.useState(
    JSON.parse(window.localStorage.getItem("hasDelivery") || true)
  );

  React.useEffect(() => {
    window.localStorage.setItem("hasDelivery", delivery);
  }, [delivery]);

  return (
    <Context.Provider value={{ delivery, setDelivery }}>
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
