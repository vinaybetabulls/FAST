import React from 'react'
import { Table as AntdTable } from 'antd';


type Props = {
    columns: any
    data: any
    displayPagination: false
    className?: string 
    bordered?: boolean
    onRow?: any
}

const Table = (props: Props) => {
    const {data, columns, displayPagination, className, bordered=false, onRow} = props
    return (
        <div>
            <AntdTable columns={columns} dataSource={data} pagination={displayPagination} className={className} bordered={bordered} onRow={onRow}/>
        </div>
    )
}

export default Table
