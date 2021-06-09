import React, { useState } from "react";
import TreeView from "../../TreeView/TreeView";
import ProjectNavigatorHeading from "./ProjectNavigatorHeading/ProjectNavigatorHeading";

const ProjectNavigator = () => {
  const [displyNavigatoryTree, setDisplayNavigatorTree] = useState("TestCase");

  const toggleNavigatorTab = (e: any) => {
    setDisplayNavigatorTree(e?.target.value);
  };
  return (
    <div className="project-navigator">
      <ProjectNavigatorHeading toggleNavigatorTab={toggleNavigatorTab} />
      <div>
        {displyNavigatoryTree == "TestCase" ? (
          <TreeView />
        ) : (
          <h3>Test suite tree view</h3>
        )}
      </div>
    </div>
  );
};

export default ProjectNavigator;
