import React from "react";
import { Menu } from "antd";

type Props = {
  top: number;
  left: number;
  handleTestSuiteModal: () => void
};
const CloseTabMenu = (props: Props) => {
  const { top, left, handleTestSuiteModal } = props;
  return (
    <Menu style={{ position: "absolute", top: top, left: left, zIndex: 999 }}>
      <Menu.Item key="1">
        <span className="menu-text">Close</span>
      </Menu.Item>
      <Menu.Item key="2">
        <span className="menu-text" onClick={handleTestSuiteModal}>Close all</span>
      </Menu.Item>
      <Menu.Item key="3">
        <span className="menu-text">Close others</span>
      </Menu.Item>
    </Menu>
  );
};

export default CloseTabMenu;
