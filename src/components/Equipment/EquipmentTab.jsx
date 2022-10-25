import React from 'react'
import { Col, Row } from 'antd'
import DataTable from './DataTable'

const EquipmentTab = () => {
    
    return (
        <>
            <Row>
                <Col span={24}>
                    <DataTable />
                </Col>
			</Row>
			<Row justify="space-between">
				<Col span={11}>
					Test
				</Col>
				<Col span={11}>
					Test 2
				</Col>
			</Row>
        </>
    );
};

export default EquipmentTab;