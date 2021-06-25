import React, { createContext, useState } from "react";

export const AppContext = createContext(null);

// Create a provider for components to consume and subscribe to changes
const initialState = [];
export const AppProvider = (props) => {
  const [tabsList, setTabsList] = useState(initialState);
  const [activeTabKey, setActiveTabKey] = useState();
  const values = { tabsList, setTabsList, activeTabKey, setActiveTabKey };
  return (
    <AppContext.Provider value={values}>{props.children}</AppContext.Provider>
  );
};
