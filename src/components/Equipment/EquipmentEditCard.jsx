import React, {useState} from 'react'
// import 'antd/dist/antd.min.css';
import {
    Card,
    Button,
    Tooltip
} from 'antd';
import { EditFilled } from '@ant-design/icons'
import EquipmentEditForm from './EquipmentEditForm';

const EquipmentEditCard = () => {

    const [componentDisabled, setComponentDisabled] = useState(true);

    const formChange = () => { 
        setComponentDisabled(componentDisabled => !componentDisabled);
    };

    return (
        <>
            <Card
                title="Edit Equipment"
                style={{
                    width: '100%',
                    height: '100%',
                }}
                extra={
                    <Tooltip title="Edit the selected equipment" color="cyan" key="equipmentEditButton">
                        <Button
                            type="primary"
                            icon={<EditFilled />}
                            shape="round"
                            onClick={formChange}
                        >
                            Edit
                        </Button>
                    </Tooltip>
                }
            >
                <EquipmentEditForm disabled={componentDisabled} />
            </Card>
        </>
    );
};

export default EquipmentEditCard;