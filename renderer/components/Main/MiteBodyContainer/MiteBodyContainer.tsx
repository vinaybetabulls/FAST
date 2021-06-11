import React from 'react'
import './MiteBodyContainer.styles.css'
import { Empty } from 'antd';
const MiteBodyContainer = () => {
    return (
        <div className="miteBodyConainer">
            <div className="mite-nav-title">
                <h3>MITE Project</h3>
            </div>
            <div className="align-center">
            <Empty />
            </div>
        </div>
    )
}

export default MiteBodyContainer
