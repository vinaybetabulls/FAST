import React, { useEffect, useState, useRef } from "react";
import { Menu, Tree } from "antd";
import { treeMocTreekData } from "../../common/data/treeData";
import responsiveObserve from "antd/lib/_util/responsiveObserve";
import Modal from "../Modal/Modal";
import TestCaseForm from "../TestCase/CreateTestCase/CreateTestCase";

import ProjectLevelMenu from "../MenuCard/ProjectLevelMenu";
import TestSuiteLevelMeu from "../MenuCard/TestSuiteLevelMeu";
import TestCaseLevelMenu from "../MenuCard/TestCaseLevelMenu";

function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
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
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
}
const TreeView = () => {
  const [treeData, setTreeData] = useState(treeMocTreekData);
  const [isOPen, setOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [treeLevelForm, setTreeLevelForm] = useState("");
  const [isTestCaseModal, setTestCaseModal] = useState(false);
  const [selectedShortName, setSelectedShortName] = useState();
  const ref = useRef();
  useOnClickOutside(ref, () => setOpen(false));

  let level = 0;
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  const onDrop = (info) => {
    const dropKey = info.node.key;
    const dragKey = info.dragNode.key;
    const dropPos = info.node.pos.split("-");
    const dropPosition =
      info.dropPosition - Number(dropPos[dropPos.length - 1]);

    const loop = (data, key, callback) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].key === key) {
          return callback(data[i], i, data);
        }
        if (data[i].children) {
          loop(data[i].children, key, callback);
        }
      }
    };
    const data = [...treeData];

    // Find dragObject
    let dragObj;
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });

    if (!info.dropToGap) {
      // Drop on the content
      loop(data, dropKey, (item) => {
        item.children = item.children || [];
        // where to insert
        item.children.unshift(dragObj);
      });
    } else if (
      (info.node.props.children || []).length > 0 && // Has children
      info.node.props.expanded && // Is expanded
      dropPosition === 1 // On the bottom gap
    ) {
      loop(data, dropKey, (item) => {
        item.children = item.children || [];
        // where to insert
        item.children.unshift(dragObj);
        // in previous version, we use item.children.push(dragObj) to insert the
        // item to the tail of the children
      });
    } else {
      let ar;
      let i;
      loop(data, dropKey, (item, index, arr) => {
        ar = arr;
        i = index;
      });
      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj);
      } else {
        ar.splice(i + 1, 0, dragObj);
      }
    }

    setTreeData(data);
  };

  const createTestSuite = () => {};

  // get the object of selected element
  function getObject(treeObject, matchElement) {
    if (treeObject.shortName == matchElement) {
      level = level + 1;
      return { response: treeObject, level };
    } else {
      for (let i = 0; i < treeObject?.children?.length; i++) {
        let response = getObject(treeObject.children[i], matchElement);
        level = level + 1;
        if (response) return { response, level };
      }
    }
  }
  React.useEffect(() => {
    setTreeData(treeData);
  }, [treeData]);

  // to generate random key
  function uuidv4() {
    return "xxxxxxxx_4xxx".replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0;
      const v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  const handleCreateTestCase = (values: any) => {
    console.log({ values });
    let response;
    const updatedTree = treeData.map((element) => {
      level = 0;
      response = getObject(element, selectedShortName);
      if (response && response.response) {
        console.log(response.response);
        if (response.response.response.children) {
          response.response.response.children.push({
            title: `${values.description}_${uuidv4()}`,
            key: uuidv4(),
            shortName: `${values.description}_${uuidv4()}`,
          });
        } else {
          response.response.response.children = [];
          response.response.response.children.push({
            title: `${values.description}_${uuidv4()}`,
            key: uuidv4(),
            shortName: `${values.description}_${uuidv4()}`,
          });
        }
        return { ...response, ...element };
      } else {
        return element;
      }
    });
    setTreeData(updatedTree);
    handleModalClose();
    return;
  };

  const onRightClick = (event) => {
    let response;
    setOpen(true);
    setOpen(true);
    setLeft(event.event.pageX);
    setTop(event.event.pageY - 50);
    setSelectedShortName(event.node.shortName);
    treeData.map((element) => {
      level = 0;
      response = getObject(element, event.node.shortName);
      if (response && response.response) {
        if (response.level === 1) setTreeLevelForm("ProjectLevel");
        if (response.level === 2) {
          setTreeLevelForm("TestSuiteLevel");
          setTestCaseModal(true);
        }
        if (response.level > 2) {
          setTreeLevelForm("TestCaseLevel");
          setTestCaseModal(true);
        }
        // if (response.children) {
        //   response.children.push({
        //     title: `LabView_RVC_DEMO_${uuidv4()}`,
        //     key: uuidv4(),
        //     shortName: uuidv4(),
        //   });
        // } else {
        //   response.children = [];
        //   response.children.push({
        //     title: `LabView_RVC_DEMO_${uuidv4()}`,
        //     key: uuidv4(),
        //     shortName: uuidv4(),
        //   });
        // }
        // return { ...response, ...element };
      }
      // else {
      //   return element;
      // }
    });
    //setTreeData(udatedTree);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setOpen(false);
    setTestCaseModal(false);
  };

  const handleTestSuiteModal = () => {
    setModalOpen(true);
  };

  const handleTestCaseModal = () => {
    setModalOpen(true);
    setTestCaseModal(true);
  };

  return (
    <div>
      {isOPen && treeLevelForm === "ProjectLevel" && (
        <div ref={ref}>
          <ProjectLevelMenu
            top={top}
            left={left}
            handleTestSuiteModal={handleTestSuiteModal}
          />
        </div>
      )}
      {isOPen && treeLevelForm === "TestSuiteLevel" && (
        <div ref={ref}>
          <TestSuiteLevelMeu
            top={top}
            left={left}
            handleTestCaseModal={handleTestCaseModal}
          />
        </div>
      )}
      {isOPen && treeLevelForm === "TestCaseLevel" && (
        <div ref={ref}>
          <TestCaseLevelMenu
            top={top}
            left={left}
            handleTestCaseModal={handleTestCaseModal}
          />
        </div>
      )}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          title={isTestCaseModal ? "Create Test Case" : "Create Test Suite"}
          setOpen={handleModalClose}
        >
          {isTestCaseModal && (
            <TestCaseForm
              onSubmit={handleCreateTestCase}
              setOpen={handleModalClose}
            />
          )}
        </Modal>
      )}
      <Tree
        showLine={true}
        defaultExpandedKeys={[treeData[0].key]}
        onSelect={onSelect}
        treeData={treeData}
        onRightClick={onRightClick}
        draggable
        onDrop={onDrop}
      />
    </div>
  );
};

export default TreeView;
