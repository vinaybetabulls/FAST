import React from "react";
import Configurations from "./Configurations/Configurations";
import ProjectNavigator from "./ProjectNavigator/ProjectNavigator";
import './SideNav.styles.css'

const SideNav = () => {
  return (
    <div className="sideNavContianer">
      <ProjectNavigator />
      <Configurations />
    </div>
  );
};

export default SideNav;
