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
      <Menu.Item key="1" onClick={onClose}>
        <span className="menu-text">
          Close
        </span>
      </Menu.Item>
      <Menu.Item key="2" onClick={onCloseAllTabs}>
        <span className="menu-text">
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
