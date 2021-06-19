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
  handleTestCaseModal: () => void
};

const TestCaseMenu = (props: Props) => {
  const { top, left, handleTestCaseModal } = props;
  return (
    <Menu style={{ position: "absolute", top: top, left: left, zIndex: 999 }}>
      <Menu.Item key="1">
        <ProfileOutlined style={{ color: "#1890ff", fontSize: "18px" }} />
        <span className="menu-text">View More Details</span>
      </Menu.Item>
      <Menu.Item key="2">
        <FolderAddOutlined style={{ color: "green", fontSize: "18px" }} />
        <span className="menu-text" onClick={handleTestCaseModal}>Create Test case</span>
      </Menu.Item>
      <Menu.Item key="3">
        <ImportOutlined style={{ color: "#3C8DAD", fontSize: "18px" }} />
        <span className="menu-text">Import Test case</span>
      </Menu.Item>
      <Menu.Item key="4">
        <CopyOutlined
          style={{ color: "rgb(20 134 201)", fontSize: "18px" }}
          rotate={180}
        />
        <span className="menu-text">Copy Test Suite Ctrl + C</span>
      </Menu.Item>
      <Menu.Item key="5">
        <ImportOutlined
          style={{ color: "#F5A962", fontSize: "18px" }}
          rotate={180}
        />
        <span className="menu-text">Export Test case</span>
      </Menu.Item>
      <Menu.Item key="6">
        <DeleteOutlined style={{ color: "#999", fontSize: "18px" }} />
        <span className="menu-text">Delete Del</span>
      </Menu.Item>
      <Menu.Item key="7">
        <CloseCircleOutlined style={{ color: "#De4f60", fontSize: "18px" }} />
        <span className="menu-text">Close</span>
      </Menu.Item>
    </Menu>
  );
};

export default TestCaseMenu;
