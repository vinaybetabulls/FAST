import React from "react";
import { Radio } from 'antd';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
type Props = {
  toggleNavigatorTab: (e: any) => void;
};

const ProjectNavigatorHeading = ({ toggleNavigatorTab }: Props) => {
  return (
    <div>
      <h3>Project Navigation</h3>
      <RadioGroup onChange={toggleNavigatorTab} defaultValue="TestCase">
        <RadioButton value="TestCase">TestCase</RadioButton>
        <RadioButton value="TestSession">TestSession</RadioButton>
      </RadioGroup>
    </div>
  );
};

export default ProjectNavigatorHeading;
