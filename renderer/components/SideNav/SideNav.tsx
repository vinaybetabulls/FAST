import React from "react";
import Configurations from "./Configurations/Configurations";
import ProjectNavigator from "./ProjectNavigator/ProjectNavigator";
import "./SideNav.styles.css";
import { Resizable } from "re-resizable";

const SideNav = () => {
  return (
    <Resizable
      defaultSize={{
        width: "20%",
        height: "682px",
      }}
      className="sideNavContianer"
      maxWidth="35%"
      minWidth="20%"
      minHeight="688px"
      maxHeight="688px"
    >
      <div className="bbr"></div>
      <div>
        <ProjectNavigator />
        <Configurations />
      </div>
    </Resizable>
  );
};

export default SideNav;
