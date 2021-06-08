import React from "react";
import Configurations from "./Configurations/Configurations";
import ProjectNavigator from "./ProjectNavigator/ProjectNavigator";

const SideNav = () => {
  return (
    <div style={{ flex: "20%", height: "500px", border: "1px solid #d4d6d8" }}>
      <ProjectNavigator />
      <Configurations />
    </div>
  );
};

export default SideNav;
