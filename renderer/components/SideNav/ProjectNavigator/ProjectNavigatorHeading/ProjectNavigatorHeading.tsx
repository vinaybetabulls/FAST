import React from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;
type Props = {
  toggleNavigatorTab: (value: string) => void;
};

const ProjectNavigatorHeading = ({ toggleNavigatorTab }: Props) => {
  return (
    <div>
      <h3>Project Navigation</h3>
      <Tabs defaultActiveKey="1" onChange={toggleNavigatorTab}>
        <TabPane tab="TestCase" key="TestCase"></TabPane>
        <TabPane tab="TestSession" key="TestSession"></TabPane>
      </Tabs>
    </div>
  );
};

export default ProjectNavigatorHeading;
