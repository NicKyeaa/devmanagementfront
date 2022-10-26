import React from 'react'
import 'antd/dist/antd.min.css';
import { Col, Row } from 'antd'
import DataTable from './DataTable'
import EquipmentEditCard from './EquipmentEditCard'

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
					<EquipmentEditCard />
				</Col>
				<Col span={11}>
					Test2
				</Col>
			</Row>
        </>
    );
};

export default EquipmentTab;