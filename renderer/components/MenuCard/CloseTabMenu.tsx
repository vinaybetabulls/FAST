import React from "react";
import { Menu } from "antd";

type Props = {
  top: number;
  left: number;
  closeOtherTabs: () => void;
  onClose: () => void;
  onCloseAllTabs: ()=>void
};
const CloseTabMenu = (props: Props) => {
  const { top, left, onCloseAllTabs, onClose, closeOtherTabs } = props;
  return (
    <Menu style={{ position: "absolute", top: top, left: left, zIndex: 999 }}>
      <Menu.Item key="1">
        <span className="menu-text" onClick={onClose}>
          Close
        </span>
      </Menu.Item>
      <Menu.Item key="2">
        <span className="menu-text" onClick={onCloseAllTabs}>
          Close all
        </span>
      </Menu.Item>
      <Menu.Item key="3" onClick={closeOtherTabs}>
        <span className="menu-text">Close others</span>
      </Menu.Item>
    </Menu>
  );
};

export default CloseTabMenu;
