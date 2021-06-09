import React, { useState } from "react";
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
            <h3>Test case tree view</h3>
          ) : (
            <h3>Test suite tree view</h3>
          )}
        </div>
      </div>
  );
};

export default ProjectNavigator;
