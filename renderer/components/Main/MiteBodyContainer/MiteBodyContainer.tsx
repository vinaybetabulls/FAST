import React, { useContext, useEffect, useState } from "react";
import "./MiteBodyContainer.styles.css";
import { Empty, Input, Button } from "antd";
import { Tabs } from "antd";

const { TextArea } = Input;
const TabPane = Tabs.TabPane;
import {
  ProfileOutlined,
  FileDoneOutlined,
  FormOutlined,
  SlidersTwoTone,
  TagFilled,
  BookFilled,
  MessageFilled,
  BarChartOutlined,
} from "@ant-design/icons";
import ProjectSummaryTab from "../../ProjectSummaryTab/ProjectSummaryTab";
import ProjectViewMoreTabParameters from "../../ProjectViewMoreTabParameters/ProjectViewMoreTabParameters";
import { AppContext } from "../../../Context/MainContext";
import TestSuiteSummaryTab from "../../TestSuiteSummaryTab/TestSuiteSummatTab";

type Props = {
  shortName: string;
};

const initialValues = {
  title: "",
  key: "",
  shortName: "",
  createdBy: "",
  modifiedBy: "",
  projectId: "",
  state: "",
  projectStatus: "",
  description: "",
  children: [],
  level: 0,
};

const MiteBodyContainer = (props: Props) => {
  const { shortName } = props;
  const { treeData, setTreeData } = useContext(AppContext);
  const [bodyContent, setBodyContent] = useState(initialValues);

  const getObject = (element, shortName) => {
    if (element.shortName === shortName) {
      return { ...element, level: 1 };
    } else {
      for (let i = 0; i < element?.children?.length; i++) {
        let response = getObject(element.children[i], shortName);
        if (response) return { ...response, level: 2 };
      }
    }
  };
  const getTreeData = (shortName: string) => {
    let response;
    treeData.map((element) => {
      response = getObject(element, shortName);
      if (response) setBodyContent(response);
    });
  };
  useEffect(() => {
    getTreeData(shortName);
  }, [shortName]);
  return (
    <div className="miteBodyConainer">
      {/* <div className="mite-nav-title">
                <h3>FAST Project</h3>
            </div> */}
      <div className="mite-detail-view">
        <div className="summary-view">
          <Tabs type="card" tabPosition="bottom" className="summary-tabs">
            <TabPane
              tab={
                <span>
                  {" "}
                  <ProfileOutlined />
                  Content
                </span>
              }
              key="1"
            >
              {/* <div className="contents-view">
                                <div className="details-section">
                                    <div className="search-container">
                                        <span className="key-name" style={{ color: '#000' }}>
                                            Search here:
                            </span>&nbsp;&nbsp;&nbsp;
                            <span>
                                            <Input placeholder="" />
                                        </span>
                                    </div>
                                    <div className="details-tab-view">

                                    </div>
                                </div>
                            </div> */}
              <Tabs type="card">
                <TabPane
                  tab={
                    <span>
                      {" "}
                      <FormOutlined style={{ fontSize: "16px" }} />
                      Summary
                    </span>
                  }
                  key="1"
                >
                  <div className="summary-contents">
                    {bodyContent?.level === 1 && (
                      <ProjectSummaryTab shortName={bodyContent?.shortName} />
                    )}
                    {bodyContent?.level === 2 && (
                      <TestSuiteSummaryTab shortName={bodyContent?.shortName} />
                    )}
                  </div>
                </TabPane>
                <TabPane
                  tab={
                    <span>
                      <SlidersTwoTone style={{ fontSize: "16px" }} />
                      Parameters
                    </span>
                  }
                  key="2"
                >
                  Parameters
                </TabPane>
                <TabPane
                  tab={
                    <span>
                      <TagFilled
                        rotate={180}
                        style={{ color: "#FDCA40", fontSize: "16px" }}
                      />
                      Labels
                    </span>
                  }
                  key="3"
                >
                  Labels
                </TabPane>
                <TabPane
                  tab={
                    <span>
                      <BookFilled
                        style={{ color: "#7D5A50", fontSize: "16px" }}
                      />
                      Requirement Documentation
                    </span>
                  }
                  key="4"
                >
                  Requirement Documentation
                </TabPane>
                <TabPane
                  tab={
                    <span>
                      <MessageFilled
                        style={{ color: "#5B8A72", fontSize: "16px" }}
                      />
                      Messages
                    </span>
                  }
                  key="5"
                >
                  Messages
                </TabPane>
                <TabPane
                  tab={
                    <span>
                      <BarChartOutlined
                        style={{ color: "#7868E6", fontSize: "16px" }}
                      />
                      Statistics
                    </span>
                  }
                  key="6"
                >
                  Statistics
                </TabPane>
              </Tabs>
            </TabPane>
            <TabPane
              tab={
                <span>
                  <FileDoneOutlined />
                  View More Details
                </span>
              }
              key="2"
            >
              <div className="view-more-container">
                {/* <ul className="project-detail-list">
                  <li>
                    <span className="fast-label">Project ID:&nbsp;</span>
                    <span className="fast-value">12345</span>
                  </li>
                  <li>
                    <span className="fast-label">Created By:&nbsp;</span>
                    <span className="fast-value">{bodyContent?.createdBy}</span>
                  </li>
                  <li>
                    <span className="fast-label">Modified By:&nbsp;</span>
                    <span className="fast-value">
                      {bodyContent?.modifiedBy}
                    </span>
                  </li>
                </ul> */}
                <div className="project-detail-list1">
                  <div className="project-detail">
                    <div className="fast-label">
                    Project ID:&nbsp;
                    </div>
                    <div className="fast-value">
                    12345
                    </div>
                  </div>
                  <div className="project-detail">
                    <div className="fast-label">
                    Created By:&nbsp;
                    </div>
                    <div className="fast-value">
                    {bodyContent?.createdBy}
                    </div>
                  </div>
                  <div className="project-detail">
                    <div className="fast-label">
                    Modified By:&nbsp;
                    </div>
                    <div className="fast-value">
                    {bodyContent?.modifiedBy}
                    </div>
                  </div>
                </div>
              </div>
              <Tabs type="card" style={{}}>
                <TabPane
                  tab={
                    <span>
                      {" "}
                      <FormOutlined style={{ fontSize: "16px" }} />
                      Overview
                    </span>
                  }
                  key="1"
                >
                  {/* <div className="project-detail-list1" style={{gridTemplateColumns: '20% 20% 20% 20% 20%' }}>
                  <div className="project-detail">
                    <div className="fast-label">
                    State:&nbsp;
                    </div>
                    <div className="fast-value">
                    {bodyContent?.state}
                    </div>
                  </div>
                  <div className="project-detail">
                    <div className="fast-label">
                    Project:&nbsp;
                    </div>
                    <div className="fast-value">
                    {bodyContent?.title}
                    </div>
                  </div>
                  <div className="project-detail">
                    <div className="fast-label">
                    Project Status:&nbsp;
                    </div>
                    <div className="fast-value">
                    Active
                    </div>
                  </div>
                  <div className="project-detail">
                    <div className="fast-label">
                    Project Short Name:&nbsp;
                    </div>
                    <div className="fast-value">
                    {bodyContent?.shortName}
                    </div>
                  </div>
                </div> */}

                  <ul
                    className="project-detail-list"
                    style={{ padding: "0 16px" }}
                  >
                    <li>
                      <span className="fast-label">State:&nbsp;</span>
                      <span className="fast-value">{bodyContent?.state}</span>
                    </li>
                    <li>
                      <span className="fast-label">Project:&nbsp;</span>
                      <span className="fast-value">{bodyContent?.title}</span>
                    </li>
                    <li>
                      <span className="fast-label">Project Status:&nbsp;</span>
                      <span className="fast-value">Active</span>
                    </li>
                    <li>
                      <span className="fast-label">
                        Project Short Name:&nbsp;
                      </span>
                      <span className="fast-value">
                        {bodyContent?.shortName}
                      </span>
                    </li>
                    <li>
                      <span className="fast-label">Description:&nbsp;</span>
                      <span className="fast-value">
                        <TextArea
                          rows={4}
                          style={{ resize: "none" }}
                          value={bodyContent?.description}
                        />
                      </span>
                    </li>
                  </ul>
                  <div className="btn-container">
                    <Button type="primary">Save</Button>
                  </div>
                </TabPane>
                <TabPane
                  tab={
                    <span>
                      <SlidersTwoTone style={{ fontSize: "16px" }} />
                      Parameters
                    </span>
                  }
                  key="2"
                >
                  <ProjectViewMoreTabParameters />
                </TabPane>
              </Tabs>
            </TabPane>
          </Tabs>
        </div>
      </div>
      {/* <div className="align-center">
            <Empty />
            </div> */}
    </div>
  );
};

export default MiteBodyContainer;
