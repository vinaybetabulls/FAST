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
  shortName: string;
};

const columns = [
  {
    title: "Sno",
    key: "sno",
    dataIndex: "sno",
  },
  {
    title: "Test case Id",
    key: "testCaseId",
    dataIndex: "testCaseId",
  },
  {
    title: "Category",
    key: "category",
    dataIndex: "category",
  },
  {
    title: "Description",
    key: "description",
    dataIndex: "description",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "Validation For Project",
    key: "validationForProject",
    dataIndex: "validationForProject",
  },
  {
    title: "Priority",
    key: "priority",
    dataIndex: "priority",
  },
];

const TestSuiteSummaryTab = (props: Props) => {
  const { shortName } = props;
  const { treeData } = useContext(AppContext);
  const [suiteSummaryData, setSuiteSummaryData] = useState([]);
  let summaryInfo = [];
  
  const getSummaryData = (element) => {
    for (let i = 0; i < element?.length; i++) {
        let index = i+1
      summaryInfo.push({
        sno: index,
        testCaseId: element[i].projectId,
        category: "System Test",
        description: element[i].description,
        status: element[i].projectStatus,
        validationForProject: "",
        priority: element[i].priority,
      });
      if (!!element[i].children?.length) {
        getSummaryData(element[i].children);
      }
    }
    return summaryInfo;
  };

  useEffect(() => {
    console.log({ shortName });
    setSuiteSummaryData([]);
    treeData.map((tree) => {
      tree?.children?.map((level1) => {
        if (level1.children && level1.shortName === shortName) {
          const response = getSummaryData(level1?.children);
          if (response) setSuiteSummaryData(response);
        }
      });
    });
  }, [treeData, shortName]);
  console.log({ suiteSummaryData });
  return (
    <div style={{ width: "100%" }}>
      <Table
        columns={columns}
        data={suiteSummaryData}
        displayPagination={false}
        className="summary-table"
      />
    </div>
  );
};

export default TestSuiteSummaryTab;
