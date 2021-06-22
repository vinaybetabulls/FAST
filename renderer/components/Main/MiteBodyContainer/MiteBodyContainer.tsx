import React from 'react'
import './MiteBodyContainer.styles.css'
import { Empty, Input, Button } from 'antd';
import { Tabs } from 'antd';

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

}
    from "@ant-design/icons";

const MiteBodyContainer = () => {
    return (
        <div className="miteBodyConainer">
            <div className="mite-nav-title">
                <h3>FAST Project</h3>
            </div>
            <div className="mite-detail-view">
                <div className="summary-view">
                    <Tabs type="card">
                        <TabPane tab={
                            <span> <ProfileOutlined />Content</span>
                        }
                            key="1">
                            
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
                                <TabPane tab={
                                    <span> <FormOutlined style={{ fontSize: '16px' }} />Summary</span>
                                }
                                    key="1">
                                    <div className="summary-contents" style={{ height: "300px" }}>
                                        <Empty />
                                    </div>
                                </TabPane>
                                <TabPane
                                    tab={
                                        <span>
                                            <SlidersTwoTone style={{ fontSize: '16px' }} />
                                            Parameters
                                        </span>
                                    }
                                    key="2">
                                    Parameters
                                </TabPane>
                                <TabPane
                                    tab={
                                        <span>
                                            <TagFilled rotate={180} style={{ color: "#FDCA40", fontSize: '16px' }} />
                                            Labels
                                        </span>
                                    }
                                    key="3">
                                    Labels
                                </TabPane>
                                <TabPane
                                    tab={
                                        <span>
                                            <BookFilled style={{ color: "#7D5A50", fontSize: '16px' }} />
                                            Requirement Documentation
                                        </span>
                                    }
                                    key="4">
                                    Requirement Documentation
                                </TabPane>
                                <TabPane
                                    tab={
                                        <span>
                                            <MessageFilled style={{ color: "#5B8A72", fontSize: '16px' }} />
                                            Messages
                                        </span>
                                    }
                                    key="5">
                                    Messages
                                </TabPane>
                                <TabPane
                                    tab={
                                        <span>
                                            <BarChartOutlined style={{ color: "#7868E6", fontSize: '16px' }} />
                                            Statistics
                                        </span>
                                    }
                                    key="6">
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
                            key="2">
                            <div className="view-more-container">
                                <ul className="project-detail-list">
                                    <li>
                                        <span className="fast-label">Project ID:&nbsp;</span>
                                        <span className="fast-value">12345</span>
                                    </li>
                                    <li>
                                        <span className="fast-label">Created By:&nbsp;</span>
                                        <span className="fast-value">Morampudi-PC</span>
                                    </li>
                                    <li>
                                        <span className="fast-label">Modified By:&nbsp;</span>
                                        <span className="fast-value">Morampudi-PC</span>
                                    </li>
                                </ul>
                            </div>
                            <Tabs type="card">
                                <TabPane tab={
                                    <span> <FormOutlined style={{ fontSize: '16px' }} />Overview</span>
                                }
                                    key="1">
                                    <ul className="project-detail-list">
                                    <li>
                                        <span className="fast-label">State:&nbsp;</span>
                                        <span className="fast-value">12345</span>
                                    </li>
                                    <li>
                                        <span className="fast-label">Project:&nbsp;</span>
                                        <span className="fast-value">Demo Project</span>
                                    </li>
                                    <li>
                                        <span className="fast-label">Project Status:&nbsp;</span>
                                        <span className="fast-value">Active</span>
                                    </li>
                                    <li>
                                        <span className="fast-label">Project Short Name:&nbsp;</span>
                                        <span className="fast-value">DemoProject</span>
                                    </li>
                                    <li>
                                        <span className="fast-label">Description:&nbsp;</span>
                                        <span className="fast-value">
                                        <TextArea rows={4} style={{resize: 'none'}} />
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
                                            <SlidersTwoTone style={{ fontSize: '16px' }} />
                                            Parameters
                                        </span>
                                    }
                                    key="2">
                                    Parameters
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
    )
}

export default MiteBodyContainer
