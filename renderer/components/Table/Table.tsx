import React from 'react'
import { Table as AntdTable } from 'antd';


type Props = {
    columns: any
    data: any
    displayPagination: false
    className?: string 
}

const Table = (props: Props) => {
    const {data, columns, displayPagination, className} = props
    return (
        <div>
            <AntdTable columns={columns} dataSource={data} pagination={displayPagination} className={className}/>
        </div>
    )
}

export default Table
