import React from "react";
import { Menu } from "antd";
import {
  ProfileOutlined,
  FolderOpenFilled,
  FolderAddOutlined,
  ImportOutlined,
  SelectOutlined,
  SyncOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

type Props = {
  top: number;
  left: number;
  handleTestSuiteModal: () => void;
  handleBodyActiveTab: () => void;
  handleOpenTestSuite: () => void;
};
const TestSuiteMenu = (props: Props) => {
  const { top, left, handleTestSuiteModal, handleBodyActiveTab, handleOpenTestSuite } = props;
  return (
    <Menu style={{ position: "absolute", top: top, left: left, zIndex: 999 }}>
      <Menu.Item key="1" onClick={handleBodyActiveTab}>
        <ProfileOutlined style={{ color: "#1890ff", fontSize: "18px" }} />
        <span className="menu-text">View More Details</span>
      </Menu.Item>
      <Menu.Item key="2">
        <FolderAddOutlined style={{ color: "green", fontSize: "18px" }} />
        <span className="menu-text" onClick={handleTestSuiteModal}>
          Create Test Suite
        </span>
      </Menu.Item>
      <Menu.Item key="3" onClick={handleOpenTestSuite}>
        <FolderOpenFilled style={{ color: "#FAC218", fontSize: "18px" }} />
        <span className="menu-text">Open Test Suite</span>
      </Menu.Item>
      <Menu.Item key="4">
        <ImportOutlined style={{ color: "#3C8DAD", fontSize: "18px" }} />
        <span className="menu-text">Import Test Suite</span>
      </Menu.Item>
      <Menu.Item key="5">
        <SyncOutlined style={{ color: "#F5A962", fontSize: "18px" }} />
        <span className="menu-text">Recover Test Suite</span>
      </Menu.Item>
      <Menu.Item key="6">
        <CloseCircleOutlined style={{ color: "#De4f60", fontSize: "18px" }} />
        <span className="menu-text">Close Project</span>
      </Menu.Item>
    </Menu>
  );
};

export default TestSuiteMenu;
