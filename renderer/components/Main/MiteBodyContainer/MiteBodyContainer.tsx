import React from 'react'
import './MiteBodyContainer.styles.css'
import { Empty, Input } from 'antd';
import { Tabs } from 'antd';
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
import ProjectSummaryTab from '../../ProjectSummaryTab/ProjectSummaryTab';

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
                            <span> <ProfileOutlined />Overview</span>
                        }
                            key="1">
                            <div className="summary-contents">
                                <div className="left-summary">
                                    <ul className="attributes-list">
                                        <li>
                                            <span className="key-name">Code: </span>
                                            <span className="value-name">78HGT56FG4023U</span>
                                        </li>
                                        <li>
                                            <span className="key-name">Created by: </span>
                                            <span className="value-name">Vinay Bodige</span>
                                        </li>
                                        <li>
                                            <span className="key-name">Name: </span>
                                            <span className="value-name">Demo Project</span>
                                        </li>
                                        <li>
                                            <span className="key-name">Modified by: </span>
                                            <span className="value-name"></span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="right-summary">
                                    <h1>Project</h1>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane
                            tab={
                                <span>
                                    <FileDoneOutlined />
                                    Summary
                                </span>
                            }
                            key="2">
                            Summary
                        </TabPane>
                    </Tabs>
                </div>
                <div className="contents-view">
                    <div className="details-section">
                        <div className="search-container">
                            <span className="key-name" style={{color: '#000'}}>
                                Search here:
                            </span>&nbsp;&nbsp;&nbsp;
                            <span>
                            <Input placeholder="" />
                            </span>
                        </div>
                        <div className="details-tab-view">
                            <Tabs type="card">
                                <TabPane tab={
                                    <span> <FormOutlined style={{fontSize: '16px'}} />Content</span>
                                }
                                    key="1">
                                    <div className="summary-contents" style={{height: "300px"}}>
                                        <ProjectSummaryTab />
                                    </div>
                                </TabPane>
                                <TabPane
                                    tab={
                                        <span>
                                            <SlidersTwoTone style={{fontSize: '16px'}}/>
                                            Parameters
                                        </span>
                                    }
                                    key="2">
                                    Parameters
                                </TabPane>
                                <TabPane
                                    tab={
                                        <span>
                                            <TagFilled rotate={180} style={{color: "#FDCA40", fontSize: '16px'}}  />
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
                                            <MessageFilled style={{color: "#5B8A72", fontSize: '16px'}} />
                                            Messages
                                        </span>
                                    }
                                    key="5">
                                    Messages
                                </TabPane>
                                <TabPane
                                    tab={
                                        <span>
                                            <BarChartOutlined style={{color: "#7868E6", fontSize: '16px'}}/>
                                            Statistics
                                        </span>
                                    }
                                    key="6">
                                    Statistics
                                </TabPane>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="align-center">
            <Empty />
            </div> */}
        </div>
    )
}

export default MiteBodyContainer
