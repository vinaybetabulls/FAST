import React from "react";
import { Tree } from "antd";
import { CarryOutOutlined } from "@ant-design/icons";
const treeData = [
  {
    title: "DemoProject",
    key: "project1",
    isParent: true,
    icon: <CarryOutOutlined />,
    children: [
      {
        title: "Test Case1",
        key: "0-0-0",
        icon: <CarryOutOutlined />,
        children: [
          {
            title: "Test suite 1",
            key: "0-0-0-0",
            icon: <CarryOutOutlined />,
          },
          {
            title: "Test suite 2",
            key: "0-0-0-2",
            icon: <CarryOutOutlined />,
          },
        ],
      },
      {
        title: "Test case 2",
        key: "0-0-1",
        icon: <CarryOutOutlined />,
        children: [
          {
            title: "Test suite 2-1",
            key: "0-0-1-0",
            icon: <CarryOutOutlined />,
          },
        ],
      },
    ],
  },
  {
    title: "parent 2",
    key: "0-1",
    icon: <CarryOutOutlined />,
    children: [
      {
        title: "parent 2-0",
        key: "0-1-0",
        icon: <CarryOutOutlined />,
        children: [
          {
            title: "Test suite 2-1",
            key: "0-1-0-0",
            icon: <CarryOutOutlined />,
          },
          {
            title: "Test suite 2-2",
            key: "0-1-0-1",
            icon: <CarryOutOutlined />,
          },
        ],
      },
    ],
  },
];
const TreeView = () => {
  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  const createTestSuite = () => {};
  const createTestCase = () => {};

  const onRightClick = (event) => {
    console.log({ rightclickEvent: event });
  };

  return (
    <div>
      <Tree
        showLine={true}
        defaultExpandedKeys={["0-0-0"]}
        onSelect={onSelect}
        treeData={treeData}
        onRightClick={onRightClick}
      />
    </div>
  );
};

export default TreeView;
