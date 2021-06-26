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
        height: "100%",
      }}
      className="sideNavContianer"
      // maxWidth="35%"
      // minWidth="20%"
      // minHeight="682px"
      // maxHeight="682px"
    >
      <>
        <ProjectNavigator />
        <Configurations />
      </>
    </Resizable>
  );
};

export default SideNav;
