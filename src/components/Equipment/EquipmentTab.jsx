import React from 'react'
import { Col, Row } from 'antd'
import DataTable from './DataTable'

const EquipmentTab = () => {
    
    return (
        <div>
            <Col span={24}>
                <DataTable />
            </Col>
        </div>
    );
};

export default EquipmentTab;