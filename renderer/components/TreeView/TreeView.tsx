import React, { useState } from "react";
import { Tree } from "antd";
import { treeMockData } from "../../common/data/treeData";
import responsiveObserve from "antd/lib/_util/responsiveObserve";

const TreeView = () => {
  const [treeData, setTreeData] = useState(treeMockData);

  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  const createTestSuite = () => {};
  const createTestCase = () => {};

  // get the object of selected element
  function getObject(treeObject, matchElement) {
    if (treeObject.shortName == matchElement) {
      return treeObject;
    } else {
      for (let i = 0; i < treeObject?.children?.length; i++) {
        let response = getObject(treeObject.children[i], matchElement);
        if (response) return response;
      }
    }
  }
  React.useEffect(() => {
    setTreeData(treeData);
  }, [treeData]);

  // to generate random key
  function uuidv4() {
    return "xxxxxxxx_4xxx".replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0;
      const v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
  // TODO - as of now just adding a new tree when user right click on tree element
  const onRightClick = (event) => {
    let response;
    const udatedTree = treeData.map((element) => {
      response = getObject(element, event.node.shortName);
      if (response) {
        if (response.children) {
          response.children.push({
            title: `LabView_RVC_DEMO_${uuidv4()}`,
            key: uuidv4(),
            shortName: uuidv4(),
          });
        } else {
          response.children = [];
          response.children.push({
            title: `LabView_RVC_DEMO_${uuidv4()}`,
            key: uuidv4(),
            shortName: uuidv4(),
          });
        }
        return { ...response, ...element };
      } else {
        return element;
      }
    });
    setTreeData(udatedTree);
  };

  return (
    <div>
      <Tree
        showLine={true}
        defaultExpandedKeys={[treeData[0].key]}
        onSelect={onSelect}
        treeData={treeData}
        onRightClick={onRightClick}
      />
    </div>
  );
};

export default TreeView;
