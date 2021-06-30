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
  handleAddNewParameter: () => void;
  handleRemoveParameter: () => void;
};
const ParameterMenu = (props: Props) => {
  const { top, left, handleAddNewParameter, handleRemoveParameter } = props;
  return (
    <Menu style={{ position: "absolute", top: top, left: left, zIndex: 999 }}>
      <Menu.Item key="1" onClick={handleAddNewParameter}>
        <FolderAddOutlined style={{ color: "green", fontSize: "18px" }} />
        <span className="menu-text">
          Add Parameter Ctrl + Enter
        </span>
      </Menu.Item>
      <Menu.Item key="2" onClick={handleRemoveParameter}>
        <FolderOpenFilled style={{ color: "#FAC218", fontSize: "18px" }} />
        <span className="menu-text">Remove Parameter</span>
      </Menu.Item>
      <Menu.Item key="3">
        <ImportOutlined style={{ color: "#3C8DAD", fontSize: "18px" }} />
        <span className="menu-text">Where Used</span>
      </Menu.Item>
      <Menu.Item key="4">
        <SyncOutlined style={{ color: "#F5A962", fontSize: "18px" }} />
        <span className="menu-text">About Parameter</span>
      </Menu.Item>
    </Menu>
  );
};

export default ParameterMenu;
