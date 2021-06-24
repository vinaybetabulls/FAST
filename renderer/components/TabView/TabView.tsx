import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context/MainContext";
import { Empty, Tabs } from "antd";
import MiteBodyContainer from "../Main/MiteBodyContainer/MiteBodyContainer";
import { CloseOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

const TabView = () => {
  // const [newTabIndex, setNewTabIndex] = useState(0);
  const { tabsList, setTabsList } = useContext(AppContext);
  let [activeKey, setActiveKey] = useState(
    !!tabsList[0]?.key ? tabsList[0].key : ""
  );
  const onChange = (activeKey) => {
    setActiveKey(activeKey);
  };

  useEffect(() => {
    if (tabsList[0]) {
      setActiveKey(tabsList[tabsList.length - 1].key);
    }
  }, [tabsList]);
  const remove = (event) => {
    const targetKey = event;
    let lastIndex;
    tabsList.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i;
      }
    });
    const panes = tabsList.filter((pane) => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        lastIndex = lastIndex === 0 ? lastIndex : lastIndex - 1;
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    console.log({ panes });
    setTabsList(panes);
  };
  const onEdit = () => {};
  return (
    <div>
      {tabsList.length > 0 ? (
        <Tabs
          hideAdd
          onChange={onChange}
          activeKey={activeKey}
          type="editable-card"
          onEdit={onEdit}
        >
          {tabsList.map((pane) => (
            <TabPane
              tab={pane.title}
              key={pane.key}
              closeIcon={
                <CloseOutlined onClick={() => remove(pane.key)} id={pane.key} />
              }
            >
              {<MiteBodyContainer />}
            </TabPane>
          ))}
        </Tabs>
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default TabView;
