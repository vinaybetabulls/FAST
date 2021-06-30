import React, { useContext, useEffect, useState, useRef } from "react";
import { AppContext } from "../../Context/MainContext";
import { Empty, Tabs } from "antd";
import MiteBodyContainer from "../Main/MiteBodyContainer/MiteBodyContainer";
import { CloseOutlined } from "@ant-design/icons";
import { getProjectSummaryTable } from "../../utils/tree";
import CloseTabMenu from "../MenuCard/CloseTabMenu";

const { TabPane } = Tabs;
function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

const TabView = () => {
  // const [newTabIndex, setNewTabIndex] = useState(0);
  const { tabsList, setTabsList, activeTabKey, setActiveTabKey } =
    useContext(AppContext);
  // let [activeKey, setActiveKey] = useState(activeTabKey);
  const [visible, setVisible] = useState(false);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [selectedTabText, setSelectedTabText] = useState();
  const ref = useRef();
  useOnClickOutside(ref, () => setVisible(false));
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
  const getTabTtile = (icon, title) => {
    return (
      <>
        <span style={{ position: "relative", top: "4px" }}>{icon}</span>
        <span style={{ position: "relative", left: "4px" }}>{title}</span>
      </>
    );
  };
  const handleRightClick = (e) => {
    if (e.type === "contextmenu") {
      setVisible(true);
      setLeft(e.pageX);
      setTop(e.pageY - 50);
      setSelectedTabText(e.target.innerText);
    }
  };
  const handleCloseMenu = () => {};

  const closeSelectedTab = (event) => {
    const targetKey = selectedTabText;
    let lastIndex;
    let newActiveTabKey;
    tabsList.forEach((pane, i) => {
      if (pane.title === targetKey) {
        lastIndex = i;
      }
    });
    const panes = tabsList.filter((pane) => pane.title !== targetKey);
    if (panes.length) {
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
    setVisible(false);
  };

  const closeAllTabs = () => {
    setTabsList([]);
    setActiveTabKey("");
    setVisible(false);
  };

  const closeOtherTabs = () => {
    const targetKey = selectedTabText;
    let newActiveTabKey;
    const panes = tabsList.filter((pane) => pane.title === targetKey);
    if (panes.length) {
      newActiveTabKey = panes[0].key;
      setActiveTabKey(newActiveTabKey);
    }
    setTabsList(panes);
    setVisible(false);
  };
  return (
    <div style={{ width: "80%" }}>
      {tabsList.length === 0 && (
        <div className="project-nav-title">
          <h3 style={{ visibility: "hidden" }}> FAST </h3>
        </div>
      )}
      {visible && (
        <div ref={ref}>
          <CloseTabMenu
            top={top}
            left={left}
            closeOtherTabs={() => closeOtherTabs()}
            onClose={() => closeSelectedTab(event)}
            onCloseAllTabs={() => closeAllTabs()}
          />
        </div>
      )}
      {tabsList.length > 0 ? (
        <Tabs
          hideAdd
          onChange={onChange}
          activeKey={activeTabKey}
          type="editable-card"
          onEdit={onEdit}
          className="top-tabs"
          onContextMenu={handleRightClick}
        >
          {tabsList.map((pane) => (
            <TabPane
              tab={getTabTtile(pane.icon, pane.title)}
              key={pane.key}
              closeIcon={
                <CloseOutlined onClick={() => remove(pane.key)} id={pane.key} />
              }
            >
              {<MiteBodyContainer shortName={pane.key} />}
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
