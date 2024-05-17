import { createContext, useContext, useState } from "react";

const ConsoContext = createContext();

// eslint-disable-next-line react/prop-types
export function ConsoProvider({ children }) {
  const [consoGlobal, setConsoGlobal] = useState(1.2);

  const handleConso = (conso, toogle) => {
    if (toogle) {
      setConsoGlobal((prevState) => prevState - conso);
    } else {
      setConsoGlobal((prevState) => prevState + conso);
    }
  };

  console.info(consoGlobal.toFixed(1));

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ConsoContext.Provider value={{ handleConso, consoGlobal }}>
      {children}
    </ConsoContext.Provider>
  );
}

export const useConso = () => useContext(ConsoContext);
