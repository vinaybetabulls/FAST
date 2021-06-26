import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context/MainContext";
import { Empty, Tabs } from "antd";
import MiteBodyContainer from "../Main/MiteBodyContainer/MiteBodyContainer";
import { CloseOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

const TabView = () => {
  // const [newTabIndex, setNewTabIndex] = useState(0);
  const { tabsList, setTabsList, activeTabKey, setActiveTabKey } = useContext(AppContext);
  // let [activeKey, setActiveKey] = useState(activeTabKey);
  const onChange = (activeKey) => {
    setActiveTabKey(activeKey);
  };

  useEffect(() => {
    if (tabsList[0]) {
      setActiveTabKey(activeTabKey);
    }
  }, [tabsList, activeTabKey]);
  const remove = (event) => {
    const targetKey = event;
    let lastIndex;
    let newActiveTabKey;
    tabsList.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i;
      }
    });
    const panes = tabsList.filter((pane) => pane.key !== targetKey);
    if (panes.length && activeTabKey === targetKey) {
      if (lastIndex >= 0) {
        lastIndex = lastIndex === 0 ? lastIndex : lastIndex - 1;
        newActiveTabKey = panes[lastIndex].key;
        setActiveTabKey(newActiveTabKey);
      } else {
        newActiveTabKey = panes[0].key;
        setActiveTabKey(newActiveTabKey);
      }
    }
    setTabsList(panes);
  };
  const onEdit = () => {};
  return (
    <div style={{width: '80%'}}>
      { tabsList.length === 0 && 
      <div className="project-nav-title">
        <h3 style={{visibility: 'hidden'}}> FAST </h3>
      </div>
      }
      {tabsList.length > 0 ? (
        <Tabs
          hideAdd
          onChange={onChange}
          activeKey={activeTabKey}
          type="editable-card"
          onEdit={onEdit}
          className="top-tabs"
        >
          {tabsList.map((pane) => (
            <TabPane
              tab={pane.title}
              key={pane.key}
              closeIcon={
                <CloseOutlined onClick={() => remove(pane.key)} id={pane.key} />
              }
            >
              {<MiteBodyContainer shortName={pane.key}/>}
            </TabPane>
          ))}
        </Tabs>
      ) : (
        <div className="alignCenter">
          <Empty />
        </div>
      )}
    </div>
  );
};

export default TabView;
