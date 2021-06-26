import React from "react";
import "./IconHeader.styles.css";
import { Select } from "antd";
import Image from "next/image";
import {
  SaveFilled,
  FolderOpenFilled,
  FolderAddOutlined,
  DeleteFilled,
  StopOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  CopyFilled,
  PlusCircleFilled,
  MinusCircleFilled,
  RedoOutlined,
  UndoOutlined,
  ExportOutlined,
  ClusterOutlined,
  ClearOutlined,
} from "@ant-design/icons";

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const IconHeader = () => {
  return (
    <div className="iconHeaderContainer">
      <div className="iconContainer">
        {/* <FolderAddOutlined style={{ color: "green", fontSize: "18px" }} /> */}
        <Image src="/svgs/folder_create.svg" height="18" width="18" className="mite-context-icons"/>
        {/* <FolderAddOutlined style={{ color: "green", fontSize: "18px" }} /> */}
        <Image src="/svgs/folder_open.svg" height="18" width="18" className="mite-context-icons"/>
        <Image src="/svgs/floppy_disc.svg" height="18" width="18" className="mite-context-icons"/>
        <Image src="/svgs/delete.svg" height="18" width="18" className="mite-context-icons"/>
        <Image src="/svgs/error.svg" height="18" width="18" className="mite-context-icons"/>
        {/* <Image src="/svgs/error.svg" height="18" width="18"/>
        <Image src="/svgs/error.svg" height="18" width="18"/> */}
        {/* <Image src="/svgs/clean.svg" height="18" width="18" className="mite-context-icons"/> */}
        <Image src="/svgs/folder_icon_import.png" height="18" width="18" className="mite-context-icons"/>
        <Image src="/svgs/folder_icon_export.png" height="18" width="18" className="mite-context-icons"/>
        <Image src="/svgs/folder_copy.svg" height="18" width="18" className="mite-context-icons"/>
        <Image src="/svgs/refresh-button.svg" height="18" width="18" className="mite-context-icons"/>
        <Image src="/svgs/forbidden.png" height="18" width="18" className="mite-context-icons"/>
        {/* <Image src="/svgs/error.svg" height="18" width="18"/> */}
        {/* <FolderOpenFilled style={{ color: "#FAC218", fontSize: "18px" }} /> */}
        {/* <SaveFilled style={{ color: "#4189ba", fontSize: "18px" }} /> */}
        {/* <DeleteFilled style={{ color: "#DE4F60", fontSize: "18px" }} /> */}
        {/* <StopOutlined style={{ color: "#F85C70", fontSize: "18px" }} />
        <RotateRightOutlined style={{ color: "#f1803e", fontSize: "18px" }} />
        <RotateLeftOutlined style={{ color: "#f5a941", fontSize: "18px" }} />
        <CopyFilled style={{ color: "#7391C8", fontSize: "18px" }} />
        <ClearOutlined style={{ color: "#FAC218", fontSize: "18px" }} />
        <PlusCircleFilled style={{ color: "#76B947", fontSize: "18px" }} />
        <ClusterOutlined style={{ color: "#999", fontSize: "18px" }} />
        <MinusCircleFilled style={{ color: "#E43D40", fontSize: "18px" }} /> */}
        {/* <UndoOutlined style={{color:"", fontSize: "18px"}} />
      <RedoOutlined style={{color:"", fontSize: "18px"}} /> */}
        {/* <ExportOutlined style={{ color: "#00a8f5", fontSize: "18px" }} /> */}
        <Image src="/svgs/clean.svg" height="18" width="18" />
        <Image src="/svgs/logout.svg" height="18" width="18" />
      </div>
      <div className="testCaseOptions">
        <Select
          defaultValue="testCase"
          style={{ width: 118 }}
          onChange={handleChange}
        >
          <Option value="testCase">Test Case</Option>
          <Option value="testScripts">Test Scripts</Option>
          <Option value="testDemo">Test Demo</Option>
        </Select>
      </div>
    </div>
  );
};

export default IconHeader;
