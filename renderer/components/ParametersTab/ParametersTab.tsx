import React, { useContext, useEffect, useState } from "react";
import Table from "../Table/Table";
import { AppContext } from "../../Context/MainContext";

const initialValues = [
  {
    type: "",
    Sno: 0,
  },
];

type Props = {
  data: any;
};
const ParametersTab = (props: Props) => {
  const { data } = props;
  console.log(data);
  console.log("data");
  const parameterData = data?.map((parameter, index) => {
    return {
      Sno: ++index,
      Name: parameter.parameterName,
      Description: parameter.description,
      Type: parameter.pickListType,
      Values: parameter.parameterValues
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
      <Table
        columns={columns}
        data={parameterData}
        displayPagination={false}
        className="summary-table"
      />
    </div>
  );
};

export default ParametersTab;
