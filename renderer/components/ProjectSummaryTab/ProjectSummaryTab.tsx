import React from 'react'
import Table from '../Table/Table'
import {ProjectSummaryTabData} from '../../common/data/commonData'

const ProjectSummaryTab = () => {
    const columns = [
        {
            title: 'Sno',
            dataIndex: 'Sno',
            key: 'Sno'
        },
        {
            title: 'Id',
            dataIndex: 'Id',
            key: 'Id'
        },
        {
            title: 'Type',
            dataIndex: 'Type',
            key: 'Type'
        },
        {
            title: 'Summary',
            dataIndex: 'Summary',
            key: 'SUmmary'
        },
        {
            title: 'State',
            dataIndex: 'State',
            key: 'State'
        },
        {
            title: 'FastCompatiblity',
            dataIndex: 'FastCompatiblity',
            key: 'FastCompatiblity'
        },

    ]
    return (
        <div>
            <Table columns={columns} data={ProjectSummaryTabData} displayPagination={false}/>
        </div>
    )
}

export default ProjectSummaryTab
