import React, { createContext, useEffect, useState } from "react";
import { treeMockTreekData } from "../common/data/treeData";
import { FolderFilled, SmileOutlined, FileFilled } from "@ant-design/icons";
import Image from "next/image";

export const AppContext = createContext(null);

// Create a provider for components to consume and subscribe to changes
const initialState = [];
export const AppProvider = (props) => {
  const [tabsList, setTabsList] = useState(initialState);
  const [activeTabKey, setActiveTabKey] = useState();
  const [treeData, setTreeData] = useState(treeMockTreekData);
  const [bodyTabActiveKey, setBodyTabActiveKey] = useState("1");
  const [removedTestSuite, setRemovedTestSuite] = useState([]);

  const updateChildrenIcons = (children) => {
    children.icon = <Image src="/svgs/test-case.svg" height="18" width="18" />;
    for (let i = 0; i < children?.children?.length; i++) {
      updateChildrenIcons(children.children[i]);
    }
    return children;
  };
  const updateIconsForTree = (tree) => {
    // <FolderFilled style={{color: "#FAC218" }} />
    tree.icon = <Image src="/svgs/project.png" height="18" width="18" />;
    if (!!tree.children?.length) {
      for (let level1 = 0; level1 < tree.children.length; level1++) {
        tree.children[level1].icon = (
          <Image src="/svgs/folder_icon.svg" height="18" width="18" />
        );
        if (!!tree.children[level1]?.children?.length)
          for (
            let level2 = 0;
            level2 < tree.children[level1]?.children?.length;
            level2++
          ) {
            tree.children[level1].children[level2] = updateChildrenIcons(
              tree.children[level1].children[level2]
            );
          }
      }
    }
    return tree;
  };
  const setIconsForTree = () => {
    treeData.map((tree) => {
      return updateIconsForTree(tree);
    });
  };

  useEffect(() => {
    setIconsForTree();
  }, [treeData]);

  const values = {
    tabsList,
    setTabsList,
    activeTabKey,
    setActiveTabKey,
    treeData,
    setTreeData,
    bodyTabActiveKey,
    setBodyTabActiveKey,
    removedTestSuite,
    setRemovedTestSuite,
  };
  return (
    <AppContext.Provider value={values}>{props.children}</AppContext.Provider>
  );
};
