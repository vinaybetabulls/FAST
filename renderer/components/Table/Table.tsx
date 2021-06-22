import React from 'react'
import { Table as AntdTable } from 'antd';


type Props = {
    columns: any
    data: any
    displayPagination: false 
}

const Table = (props: Props) => {
    const {data, columns, displayPagination} = props
    return (
        <div>
            <AntdTable columns={columns} dataSource={data} pagination={displayPagination} />
        </div>
    )
}

export default Table
