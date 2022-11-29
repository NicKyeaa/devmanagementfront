import React from 'react'
// import 'antd/dist/antd.min.css';
import { Col, Row } from 'antd'
import DataTable from './DataTable'
import EquipmentEditCard from './EquipmentEditCard'
import EquipmentLifeCylcleCard from './EquipmentLifeCylcleCard'

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
					<EquipmentLifeCylcleCard />
				</Col>
			</Row>
        </>
    );
};

export default EquipmentTab;