import React from "react";
import { Menu } from "antd";
import {
  ProfileOutlined,
  CopyOutlined,
  FolderAddOutlined,
  ImportOutlined,
  DeleteOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

type Props = {
  top: number;
  left: number;
};

const TestCaseLevelMenu = (props: Props) => {
  const { top, left } = props;
  return (
    <Menu style={{ position: "absolute", top: top, left: left, zIndex: 999 }}>
      <Menu.Item key="1">
        <ProfileOutlined style={{ color: "#1890ff", fontSize: "18px" }} />
        <span className="menu-text">View More Details</span>
      </Menu.Item>
      <Menu.Item key="2">
        <FolderAddOutlined style={{ color: "green", fontSize: "18px" }} />
        <span className="menu-text">Create Test case</span>
      </Menu.Item>
    </Menu>
  );
};

export default TestCaseLevelMenu;
