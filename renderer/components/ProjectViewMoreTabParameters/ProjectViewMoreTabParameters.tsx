import React from 'react'
import Table from '../Table/Table'

const ProjectViewMoreTabParameters = () => {
    const parametesValueTableColumns = [
        {
            title: "#",
            dataIndex: "#",
            key: "#"
        },
        {
            title: "Parameters Name",
            dataIndex: "#",
            key: "#"
        },
        {
            title: "Parameters Value",
            dataIndex: "#",
            key: "#"
        },
        {
            title: "Parameter Descrition",
            dataIndex: "#",
            key: "#"
        },
        {
            title: "Value Description",
            dataIndex: "#",
            key: "#"
        },
    ]
    const parametesTableColumns = [
        {
            title: "#",
            dataIndex: "#",
            key: "#"
        },
        {
            title: "Parameters Name",
            dataIndex: "#",
            key: "#"
        },
        {
            title: "Parameters Value",
            dataIndex: "#",
            key: "#"
        },
        {
            title: "Parameter Type",
            dataIndex: "#",
            key: "#"
        },
        {
            title: "Description",
            dataIndex: "#",
            key: "#"
        },
    ]
    return (
        <div>
            <div>
                <h3>Paramters Values Table</h3>
                <Table columns={parametesValueTableColumns} data={[]} displayPagination={false}/>
            </div>
            <div>
                <h3>Paramter Table</h3>
                <Table columns={parametesTableColumns} data={[]} displayPagination={false}/>
            </div>
        </div>
    )
}

export default ProjectViewMoreTabParameters
