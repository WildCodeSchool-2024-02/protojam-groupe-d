import { createContext, useContext } from "react";

const ConsoContext = createContext();

// eslint-disable-next-line react/prop-types
export function ConsoProvider({ children }) {
  return <ConsoContext.Provider>{children}</ConsoContext.Provider>;
}

export const useConso = () => useContext(ConsoContext);
