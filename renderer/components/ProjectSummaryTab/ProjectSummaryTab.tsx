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
const ProjectSummaryTab = (props: Props) => {
  const { treeData } = useContext(AppContext);
  const [projectSummaryData, setProjectSummaryData] = useState(initialValues);
  const { shortName } = props;
  useEffect(() => {
    const findProject = treeData.find((tree) => tree.shortName === shortName);
    const summaryData =
      !!findProject?.children?.length &&
      findProject?.children?.map((project, index) => {
        return {
          Sno: ++index,
          Id: project.projectId,
          Type: "Suite",
          Summary: project.title,
          State: "Open",
          FastCompatiblity: "true",
        };
      });
    setProjectSummaryData(summaryData);
  }, [treeData, shortName]);
  const columns = [
    {
      title: "Sno",
      dataIndex: "Sno",
      key: "Sno",
    },
    {
      title: "Id",
      dataIndex: "Id",
      key: "Id",
    },
    {
      title: "Type",
      dataIndex: "Type",
      key: "Type",
    },
    {
      title: "Summary",
      dataIndex: "Summary",
      key: "SUmmary",
    },
    {
      title: "State",
      dataIndex: "State",
      key: "State",
    },
    {
      title: "FastCompatiblity",
      dataIndex: "FastCompatiblity",
      key: "FastCompatiblity",
    },
  ];
  return (
    <div style={{ width: "100%" }}>
      <Table
        columns={columns}
        data={projectSummaryData}
        displayPagination={false}
        className="summary-table"
      />
    </div>
  );
};

export default ProjectSummaryTab;
