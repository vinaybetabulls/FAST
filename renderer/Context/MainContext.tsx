import React, { createContext, useState } from "react";
import { treeMockTreekData } from "../common/data/treeData";

export const AppContext = createContext(null);

// Create a provider for components to consume and subscribe to changes
const initialState = [];
export const AppProvider = (props) => {
  const [tabsList, setTabsList] = useState(initialState);
  const [activeTabKey, setActiveTabKey] = useState();
  const [treeData, setTreeData] = useState(treeMockTreekData);
  const values = {
    tabsList,
    setTabsList,
    activeTabKey,
    setActiveTabKey,
    treeData,
    setTreeData,
  };
  return (
    <AppContext.Provider value={values}>{props.children}</AppContext.Provider>
  );
};
