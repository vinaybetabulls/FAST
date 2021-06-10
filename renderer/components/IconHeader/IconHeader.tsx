import React from "react";
import "./IconHeader.styles.css";
import { 
  SaveFilled , 
  FolderOpenFilled, 
  FolderAddOutlined, 
  DeleteFilled , 
  StopOutlined, 
  RotateLeftOutlined,
  RotateRightOutlined,
  CopyFilled ,
  PlusCircleFilled,
  MinusCircleFilled,
  RedoOutlined,
  UndoOutlined,
  FileAddOutlined
} from '@ant-design/icons'

const IconHeader = () => {
  return (
    <div className="iconHeaderContainer">
      <div className="iconContainer">
      <FolderAddOutlined style={{color: "green"}}/>
      <FolderOpenFilled style={{color:"#ffe69a"}} />
      <SaveFilled  style={{color:"#4189ba"}} />
      <DeleteFilled  style={{color: "#DE4F60" }} />
      <StopOutlined style={{color:"orange"}}/>
      <RotateRightOutlined />
      <RotateLeftOutlined />
      <CopyFilled  />
      <PlusCircleFilled />
      <MinusCircleFilled />
      <UndoOutlined />
      <RedoOutlined />
      <FileAddOutlined />
      </div>
      <div className="testCaseOptions">
        <p>Test Case dropdown</p>
      </div>
    </div>
  );
};

export default IconHeader;
