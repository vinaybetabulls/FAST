import React from "react";
import TreeView from "../../../TreeView/TreeView"
import Configurations from '../../Configurations/Configurations'
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;


const ProjectNavigatorHeading = () => {
  return (
    <div>
      <div className="project-nav-title">
      <h3>Project Navigation</h3>
      </div>
      {/* <RadioGroup onChange={toggleNavigatorTab} defaultValue="TestCase">
        <RadioButton value="TestCase">TestCase</RadioButton>
        <RadioButton value="TestSession">TestSession</RadioButton>
      </RadioGroup> */}
      <div className="card-container">
        <Tabs type="card">
          <TabPane tab="Test Case" key="1">
            <TreeView />
          </TabPane>
          <TabPane tab="Test Session" key="2">
            <Configurations />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default ProjectNavigatorHeading;
