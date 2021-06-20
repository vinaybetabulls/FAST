import React from "react";
import { Menu } from "antd";
import {
  ProfileOutlined,
  CopyOutlined,
  FolderAddOutlined,
  ImportOutlined,
  DeleteOutlined,
  ReloadOutlined,
  DownCircleOutlined,
  ExportOutlined,
} from "@ant-design/icons";

type Props = {
  top: number;
  left: number;
  handleTestCaseModal: () => void;
};

const TestCaseLevelMenu = (props: Props) => {
  const { top, left, handleTestCaseModal } = props;
  return (
    <Menu style={{ position: "absolute", top: top, left: left, zIndex: 999 }}>
      <Menu.Item key="1">
        <ProfileOutlined style={{ color: "#1890ff", fontSize: "18px" }} />
        <span className="menu-text">View More Details</span>
      </Menu.Item>
      <Menu.Item key="2" onClick={handleTestCaseModal}>
        <FolderAddOutlined style={{ color: "green", fontSize: "18px" }} />
        <span className="menu-text">Create Test case</span>
      </Menu.Item>
      <Menu.Item key="3">
        <CopyOutlined style={{ color: "rgb(20 134 201)", fontSize: "18px" }} />
        <span className="menu-text">Copy Test case Ctrl+C</span>
      </Menu.Item>
      <Menu.Item key="4">
        <ExportOutlined style={{ color: "#F5A962", fontSize: "18px" }} />
        <span className="menu-text">Export Test case</span>
      </Menu.Item>
      <Menu.Item key="5">
        <DownCircleOutlined style={{ color: "green", fontSize: "18px" }} />
        <span className="menu-text">Optimize Test case</span>
      </Menu.Item>
      <Menu.Item key="6">
        <ReloadOutlined style={{ color: "green", fontSize: "18px" }} />
        <span className="menu-text">Refresh</span>
      </Menu.Item>
      <Menu.Item key="7">
        <DeleteOutlined style={{ color: "#999", fontSize: "18px" }} />
        <span className="menu-text">Delete from wrokspace Del</span>
      </Menu.Item>
    </Menu>
  );
};

export default TestCaseLevelMenu;
