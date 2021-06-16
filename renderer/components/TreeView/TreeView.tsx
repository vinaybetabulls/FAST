import React, { useState } from "react";
import { Menu, Tree } from "antd";
import { treeMockData } from "../../common/data/treeData";
import {
  ProfileOutlined,
  FolderOpenFilled,
  FolderAddOutlined,
  SelectOutlined,
  SyncOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

const TreeView = () => {
  const [treeData, setTreeData] = useState(treeMockData);
  const [isOPen, setOpen] = useState(false)
  const [top, setTop]   = useState(0)
  const [left, setLeft] = useState(0)
  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  const onDrop = info => {
    console.log(info);
    const dropKey = info.node.key;
    const dragKey = info.dragNode.key;
    const dropPos = info.node.pos.split('-');
    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);

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
      loop(data, dropKey, item => {
        item.children = item.children || [];
        // where to insert 示例添加到头部，可以是随意位置
        item.children.unshift(dragObj);
      });
    } else if (
      (info.node.props.children || []).length > 0 && // Has children
      info.node.props.expanded && // Is expanded
      dropPosition === 1 // On the bottom gap
    ) {
      loop(data, dropKey, item => {
        item.children = item.children || [];
        // where to insert 示例添加到头部，可以是随意位置
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

    setTreeData(data)
  };

  const createTestSuite = () => {};
  const createTestCase = () => {};

  // get the object of selected element
  function getObject(treeObject, matchElement) {
    if (treeObject.shortName == matchElement) {
      return treeObject;
    } else {
      for (let i = 0; i < treeObject?.children?.length; i++) {
        let response = getObject(treeObject.children[i], matchElement);
        if (response) return response;
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
  // TODO - as of now just adding a new tree when user right click on tree element
  const onRightClick = (event) => {
    let response;
    console.log("top", "caluclated Top",event.event.pageY, event.event.pageY -50)
    setOpen(true)
    setLeft(event.event.pageX)
    setTop(event.event.pageY - 50)
    
    // const udatedTree = treeData.map((element) => {
    //   response = getObject(element, event.node.shortName);
    //   if (response) {
    //     if (response.children) {
    //       response.children.push({
    //         title: `LabView_RVC_DEMO_${uuidv4()}`,
    //         key: uuidv4(),
    //         shortName: uuidv4(),
    //       });
    //     } else {
    //       response.children = [];
    //       response.children.push({
    //         title: `LabView_RVC_DEMO_${uuidv4()}`,
    //         key: uuidv4(),
    //         shortName: uuidv4(),
    //       });
    //     }
    //     return { ...response, ...element };
    //   } else {
    //     return element;
    //   }
    // });
    // setTreeData(udatedTree);
  };

  return (
    <div>
      {
        isOPen && 
        <Menu style={{position: 'absolute', top: top, left: left, zIndex: 999}}>
        <Menu.Item key="1"><ProfileOutlined style={{ color: "#1890ff", fontSize: "18px" }} /><span className="menu-text">View More Details</span></Menu.Item>
        <Menu.Item key="2"><FolderAddOutlined style={{ color: "green", fontSize: "18px" }} /> <span className="menu-text">Create Test Suite</span></Menu.Item>
        <Menu.Item key="3"><FolderOpenFilled style={{ color: "#FAC218", fontSize: "18px" }} /><span className="menu-text">Open Test Suite</span></Menu.Item>
        <Menu.Item key="4"><SelectOutlined style={{ color: "#3C8DAD", fontSize: "18px" }} /><span className="menu-text">Import Test Suite</span></Menu.Item>
        <Menu.Item key="5"><SyncOutlined style={{ color: "#F5A962", fontSize: "18px" }}/><span className="menu-text">Recover Test Suite</span></Menu.Item>
        <Menu.Item key="6"><CloseCircleOutlined style={{ color: "#De4f60", fontSize: "18px" }}/><span className="menu-text">Close Project</span></Menu.Item>
      </Menu>
      }
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
