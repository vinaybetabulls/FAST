import React, { useRef, useState } from "react";
import Table from "../Table/Table";
import ParameterMenu from "../MenuCard/ParameterMenu";

const initialValues = [
  {
    type: "",
    Sno: 0,
  },
];

type Props = {
  data: any;
  handleAddNewParameter: () => void
  // onRow: () => void
};
const ParametersTab = (props: Props) => {
  const { data, handleAddNewParameter } = props;
  console.log(data);
  console.log("data");
  const [visible, setVisible] = useState(false);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const ref = useRef();
  const parameterData = data?.map((parameter, index) => {
    return {
      Sno: ++index,
      Name: parameter.parameterName,
      Description: parameter.description,
      Type: parameter.pickListType,
      Values: parameter.parameterValues
    }
  })
  const handleRightClick = (e) => {
    if (e.type === "contextmenu") {
      setVisible(true);
      console.log({ context: e });
      setLeft(e.pageX);
      setTop(e.pageY - 50);
    }
  };

  const handleRemoveParameter = () => {

  }
  const onRow = (record) => ({
    onContextMenu: event => {
      event.preventDefault()
      if (!visible) {
        document.addEventListener(`click`, function onClickOutside() {
          setVisible(false)
          document.removeEventListener(`click`, onClickOutside)
        })
      }
      setVisible(true)
      setLeft(event.clientX)
      setTop(event.clientY)
    }
    })
  const columns = [
    {
      title: "Sno",
      dataIndex: "Sno",
      key: "Sno",
    },
    {
      title: "Name",
      dataIndex: "Name",
      key: "Name",
    },
    {
      title: "Description",
      dataIndex: "Description",
      key: "Description",
    },
    {
      title: "Type",
      dataIndex: "Type",
      key: "Type",
    },
    {
      title: "Values",
      dataIndex: "Values",
      key: "Values",
    },
    {
      title: "Current Value",
      dataIndex: "CurrentValue",
      key: "CurrentValue",
    },
    {
      title: "Value Description",
      dataIndex: "ValueDescription",
      key: "ValueDescription",
    },
    {
      title: "Units",
      dataIndex: "Units",
      key: "Units",
    },
    {
      title: "Scope",
      dataIndex: "Scope",
      key: "Scope",
    },
  ];
  return (
    <div style={{ width: "100%" }}>
      {visible && (
        <div ref={ref}>
          <ParameterMenu
            top={top}
            left={left}
            handleAddNewParameter={handleAddNewParameter}
            handleRemoveParameter={handleRemoveParameter}
          />
        </div>
      )}
      <Table
        columns={columns}
        data={parameterData}
        displayPagination={false}
        className="summary-table"
        onRow={onRow}
        // onRow={(record, rowIndex) => { return { onClick: event => {}, onContextMenu: {handleRightClick} }} }// click row onDoubleClick: event => {}, //double click row onContextMenu: event => {}, // right button click row onMouseEnter: event => {}, // mouse enter row onMouseLeave: event => {}, // mouse leave row }; }} onHeaderRow={(columns, index) => { return { onClick: () => {}, // click header row }; }} 
      />
    </div>
  );
};

export default ParametersTab;
