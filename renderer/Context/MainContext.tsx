import React, { createContext, useState } from "react";

export const AppContext = createContext(null);

// Create a provider for components to consume and subscribe to changes
const initialState = []
export const AppProvider = (props) => {
  const [tabsList, setTabsList] = useState(initialState);
  const values = { tabsList, setTabsList };
  return (
    <AppContext.Provider value={values}>{props.children}</AppContext.Provider>
  );
};
